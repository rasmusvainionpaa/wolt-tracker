import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Layout from 'src/components/Layout'
import { Order } from 'src/types/order'

const Add: NextPage = () => {
    const [orders, setOrders] = useState<Order[]>([])
    const [store, setStore] = useState<string>("")
    const [price, setPrice] = useState<string>("")
    const [date, setDate] = useState<string>("")
    const [orederType, setOrderType] = useState<string>("")

    useEffect(() => {
        setOrders(JSON.parse(localStorage.getItem("orders") || "[]"))
    }, [])
 
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const order: Order = {
            Store: store,
            Price: Number(price),
            Ordered: date,
            OrderType: orederType
        }

        let tempOrder : Order[] = orders
        tempOrder.push(order)

        localStorage.setItem("orders", JSON.stringify(tempOrder))
        console.log(orders)
    }

    const handleStoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStore(event.target.value)
    }

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value)
    }

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value)
    }

    const handleOrderTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOrderType(event.target.value)
    }

    return (
        <Layout>
            <div className="flex justify-center">
                <form className="flex justify-center w-2/6" onSubmit={handleSubmit}>
                    <ul className="flex flex-col">
                        <li className="pl-4 p-1">
                            <label>Store</label>
                        </li>
                        <li className="pl-4">
                            <input type="text" className="border-2 rounded-lg" name="store" onChange={handleStoreChange} />
                        </li>
                        <li className="pl-4">
                            <label>Price</label>
                        </li>
                        <li className="pl-4">
                            <input type="number" className="border-2 rounded-lg" name="price" onChange={handlePriceChange} />
                        </li>
                        <li className="pl-4">
                            <label>Ordered</label>
                        </li>
                        <li className="pl-4">
                            <input type="datetime-local" className="border-2 rounded-lg" name="date" onChange={handleDateChange} />
                        </li>
                        <li className="pl-4">
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