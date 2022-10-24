import type { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Layout from "src/components/Layout";
import { OrderType } from "src/types/order";

const Add: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<OrderType>();

  console.log(watch("price")); // watch input value by passing the name of it

  const [orders, setOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("orders") || "[]"));
  }, []);

  const onSubmit: SubmitHandler<OrderType> = (data) => {
    console.log(data);
    const tempOrder: OrderType[] = [...orders, data];

    localStorage.setItem("orders", JSON.stringify(tempOrder));
    setOrders(tempOrder);
    console.log(orders);
  };

  return (
    <Layout>
      <div className="mb-5 flex flex-row text-3xl">
        <h1 className="ml-2">
          <Link href="/">Orders /</Link>Add
        </h1>
      </div>

      <div className="flex flex-col justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-10 flex w-full flex-col items-start bg-blue-100 p-10"
        >
          <div className="mb-4 flex w-1/2 flex-col">
            <label htmlFor="store">Store</label>
            <input
              id="store"
              className="w-full"
              defaultValue="K-market"
              {...register("store", { required: true })}
            />
            {errors.store && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>

          <div className="mb-4 flex w-1/2 flex-col">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              className="w-full"
              type="number"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>

          <div className="mb-4 flex w-1/2 flex-col">
            <label htmlFor="ordertype">Order type</label>
            <select
              id="ordertype"
              {...register("order_type", { required: true })}
            >
              <option value="store">Store</option>
              <option value="restaurant">Restaurant</option>
            </select>

            {errors.order_type && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>

          <div className="mb-4 flex w-1/2 flex-col">
            <label htmlFor="ordered_at">Price</label>
            <input
              id="ordered_at"
              className="w-full"
              type="date"
              {...register("ordered_at", { required: true })}
            />
            {errors.price && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>

          <button
            type="submit"
            className={"flex rounded bg-blue-500 px-2 py-1 text-white"}
          >
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Add;
