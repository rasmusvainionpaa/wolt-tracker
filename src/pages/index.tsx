import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Counters from 'src/components/Counter'
import Layout from 'src/components/Layout'
import Order from 'src/components/Order'
import { OrderType } from 'src/types/order'
import countTotal from 'src/utils/countTotal'
import firstOder from 'src/utils/firstOrder'
import lastOrder from 'src/utils/lastOrder'

const Home: NextPage = () => {
  const [orders, setOrders] = useState<OrderType[]>([])
  const [latestDate, setLatestDate] = useState<Date>()
  const [firstDate, setFisrtDate] = useState<Date>()
  const [totalSpend, setTotalSpend] = useState<number>()

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("orders") || "[]"))
  }, [])

  useEffect(() => {
    setLatestDate(new Date(lastOrder(orders)))
    setFisrtDate(new Date(firstOder(orders)))
    setTotalSpend(countTotal(orders))
  }, [orders])

  return (
    <Layout>
      <h1 className="mb-5 text-3xl">Orders</h1>
      <Counters data={orders} firstDate={firstDate} latestDate={latestDate} total={totalSpend} />
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