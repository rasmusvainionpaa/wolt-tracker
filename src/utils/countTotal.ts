import { OrderType } from "src/types/order";

export default function countTotal(orders: OrderType[]) {
  let total = 0
  orders.map((order) => {
    total = order.price + total
  })
  
  return Math.round(total * 100) / 100
}