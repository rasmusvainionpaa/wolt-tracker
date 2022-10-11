import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Counters from 'src/components/Counter'
import Layout from 'src/components/Layout'
import Order from 'src/components/Order'
import { OrderType } from 'src/types/order'

const Home: NextPage = () => {
  const [orders, setOrders] = useState<OrderType[]>([])

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("orders") || "[]"))
  }, [])

  return (
    <Layout>
      <h1 className="mb-5 text-3xl">Orders</h1>
      <Counters data={orders} />
      <div className='flex justify-center'>
        { orders.length < 1 ? <p>Loading...</p> :
          <ul className='flex flex-col'>
            {orders.map((ordered, index) => (
              <li key={index} className="">
                <Order order={ordered}/>
              </li>
            ))}
          </ul>
        }
      </div>
    </Layout>
  )
}

export default Home
