import Layout from "src/components/Layout";
import Order from "src/components/Order";
import { OrderType } from "src/types/order";
import prisma from "src/lib/prisma";
import { NextPage } from "next";
import Link from "next/link";

type OrderProps = {
  orders: OrderType[];
};

export const getServerSideProps = async () => {
  const ordersTemp = await prisma.order.findMany()
  const orders = JSON.parse(JSON.stringify(ordersTemp))

  return {
    props: {orders}
  }
}

const Home: NextPage<OrderProps> = ({orders}) => {
  
  console.log(orders)

  return (
    <Layout>
      <h1 className="mb-5 text-3xl ml-2">Orders</h1>
      
      <div className="flex justify-center">
        {orders.length < 1 ? (
          <h1 className="underline underline-offset-1">
          <Link href="/add">Start by adding an order</Link>
          </h1>
        ) : (
          <ul className="flex flex-col">
            {orders.map((order) => (
              <li key={order.id} className="">
                <Order order={order} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default Home;

//<Counters total={totalSpend} diff={diff} saved={moneySaved} />
