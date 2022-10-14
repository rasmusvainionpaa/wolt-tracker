import type { NextPage } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Layout from 'src/components/Layout'
import { OrderType } from 'src/types/order'

const Add: NextPage = () => {
    const [orders, setOrders] = useState<OrderType[]>([])
    const [store, setStore] = useState<string>("")
    const [price, setPrice] = useState<string>("")
    const [date, setDate] = useState<Date>(new Date())
    const [orederType, setOrderType] = useState<string>("")

    useEffect(() => {
        setOrders(JSON.parse(localStorage.getItem("orders") || "[]"))
    }, [])
 
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const order: OrderType = {
            Store: store,
            Price: Number(price),
            Ordered: date,
            OrderType: orederType
        }

        let tempOrder : OrderType[] = orders
        tempOrder.push(order)

        localStorage.setItem("orders", JSON.stringify(tempOrder))
    }

    const handleStoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStore(event.target.value)
    }

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value)
    }

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(new Date(event.target.value))
    }

    const handleOrderTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOrderType(event.target.value)
    }

    return (
        <Layout>

            <div className="flex flex-row mb-5 text-3xl">
                <Link href="/">
                    <a>Orders / </a>
                </Link>
                <h1 className='ml-2'>Add</h1>
            </div>
            
            <div className="flex justify-center">
                <form className="flex justify-center w-2/6" onSubmit={handleSubmit}>
                    <ul className="flex flex-col">
                        <li className="p-1">
                            <label>Store</label>
                        </li>
                        <li className="">
                            <input type="text" className="border-2 rounded-lg" name="store" onChange={handleStoreChange} />
                        </li>
                        <li className="">
                            <label>Price</label>
                        </li>
                        <li className="">
                            <input type="number" className="border-2 rounded-lg" name="price" onChange={handlePriceChange} />
                        </li>
                        <li className="">
                            <label>Ordered</label>
                        </li>
                        <li className="">
                            <input type="datetime-local" className="border-2 rounded-lg" name="date" onChange={handleDateChange} />
                        </li>
                        <li className="">
                            <p>Type of order</p>
                            <select onChange={handleOrderTypeChange}>
                                <option>Store</option>
                                <option>Restaurant</option>
                            </select>
                        </li>
                        <li className="p-4 flex justify-center">
                            <button className="border-2 rounded-lg p-1" type="submit">Submit</button>
                        </li>
                    </ul>
                </form>
            </div>
        </Layout>
    )
}

export default Add