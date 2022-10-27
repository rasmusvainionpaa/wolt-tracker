import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
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

  const onSubmit: SubmitHandler<OrderType> = async (data) => {
    try {
      await fetch(`/api/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    }  catch (error) {
      console.error(error)
    }
  };

  return (
    <Layout>
      <div className="mb-5 flex flex-row text-3xl">
        <h1 className="ml-2">
          <Link href="/">Orders / </Link>Add
        </h1>
      </div>

      <div className="flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-center max-w-3/4 w-72 flex-col bg-blue-50 p-5 rounded-lg"
          >
            <div className="mb-4 flex flex-col">
              <label htmlFor="store">Store</label>
              <input
                id="store"
                className="w-full rounded-md"
                {...register("store", { required: true })}
              />
              {errors.store && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>

            <div className="mb-4 flex flex-col">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                className="w-full rounded-md"
                type="number"
                step="0.01"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>

            <div className="mb-4 flex flex-col">
              <label htmlFor="ordertype">Order type</label>
              <select
                id="ordertype"
                className="rounded-md"
                {...register("order_type", { required: true })}
              >
                <option value="store">Store</option>
                <option value="restaurant">Restaurant</option>
              </select>

              {errors.order_type && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>

            <div className="mb-4 flex flex-col">
              <label htmlFor="ordered_at">Date ordered</label>
              <input
                id="ordered_at"
                className="w-full rounded-md"
                type="date"
                {...register("ordered_at", { required: true })}
              />
              {errors.ordered_at && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>

            <button
              type="submit"
              className={"flex rounded bg-blue-500 px-2 py-1 text-white w-12"}
            >
              Save
            </button>
          </form>
      </div>
    </Layout>
  );
};

export default Add;
