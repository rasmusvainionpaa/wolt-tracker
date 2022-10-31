import Layout from "src/components/Layout";
import Order from "src/components/Order";
import { OrderType } from "src/types/order";
import prisma from "src/lib/prisma";
import { NextPage } from "next";
import Link from "next/link";
import Counters from "src/components/Counter";
import countTotal from "src/utils/countTotal";
import lastOrder from "src/utils/lastOrder";
import firstOder from "src/utils/firstOrder";

type OrderProps = {
  total: number;
  orders: OrderType[];
};

export const getServerSideProps = async () => {
  const ordersTemp = await prisma.order.findMany({
    orderBy: [
      {
        ordered_at: "desc",
      },
    ],
  });

  const orders = JSON.parse(JSON.stringify(ordersTemp));

  const total: number = orders.length > 0 ? countTotal(orders) : 0;

  const latestOrder = lastOrder(orders);
  const firstOrder = firstOder(orders);

  const daysBetwFirstLastOrder = Math.floor(
    (new Date(latestOrder).getTime() - new Date(firstOrder).getTime()) /
      (1000 * 3600 * 24)
  );

  const daysSinceLastOrder = Math.floor(
    (new Date().getTime() - new Date(latestOrder).getTime()) /
      (1000 * 3600 * 24)
  );

  const moneySpentPerDay =
    Math.round((total / daysBetwFirstLastOrder) * 100) / 100;

  const moneySaved =
    Math.round(moneySpentPerDay * daysSinceLastOrder * 100) / 100;

  console.log(daysSinceLastOrder);
  console.log(daysBetwFirstLastOrder);
  console.log(moneySpentPerDay);
  console.log(moneySaved);
  return {
    props: { orders, total },
  };
};

const Home: NextPage<OrderProps> = ({ total, orders }) => {
  return (
    <Layout>
      <div>
        <h1 className="mb-5 ml-2 text-3xl">Orders</h1>
      </div>

      <div className="flex justify-center">
        {orders.length < 1 ? (
          <h1 className="underline underline-offset-1">
            <Link href="/add">Start by adding an order</Link>
          </h1>
        ) : (
          <div>
            <Counters total={total} />
            <ul className="flex flex-col">
              {orders.map((order) => (
                <li key={order.id} className="">
                  <Order order={order} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
