import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Counters from "src/components/Counter";
import Layout from "src/components/Layout";
import Order from "src/components/Order";
import { OrderType } from "src/types/order";
import countTotal from "src/utils/countTotal";
import firstOder from "src/utils/firstOrder";
import lastOrder from "src/utils/lastOrder";
import date from "date-and-time";

const Home: NextPage = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [latestDate, setLatestDate] = useState(new Date());
  const [firstDate, setFisrtDate] = useState(new Date());
  const [totalSpend, setTotalSpend] = useState(0);
  const [moneySaved, setMoneySaved] = useState(0);
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("orders") || "[]"));
  }, []);

  useEffect(() => {
    setLatestDate(new Date(lastOrder(orders)));
    setFisrtDate(new Date(firstOder(orders)));
    setTotalSpend(countTotal(orders));
  }, [orders]);

  useEffect(() => {
    const diff = Number(
      date.subtract(new Date(), latestDate).toDays().toFixed(0)
    );
    console.log(diff);
    const perDaySpend =
      totalSpend / Math.floor(date.subtract(latestDate, firstDate).toDays());
    setMoneySaved(perDaySpend * diff);
    setDiff(diff);
  }, [totalSpend]);

  return (
    <Layout>
      <h1 className="mb-5 text-3xl">Orders</h1>
      <Counters total={totalSpend} diff={diff} saved={moneySaved} />
      <div className="flex justify-center">
        {orders.length < 1 ? (
          <p>yeet</p>
        ) : (
          <ul className="flex flex-col">
            {orders.map((ordered, index) => (
              <li key={index} className="">
                <Order order={ordered} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default Home;
