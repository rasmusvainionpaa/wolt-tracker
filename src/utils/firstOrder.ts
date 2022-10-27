import { OrderType } from "src/types/order"

export default function firstOder(orders: OrderType[]) {
  let latest = new Date
  
  if(orders[0] === undefined || orders[0] === null) {
    return latest
  }
  
  latest = orders[0].ordered_at
  let temp: Date
  for(var i = 1; i < orders.length; i++) {
    temp = orders[i].ordered_at
    if(temp < latest) {
      latest = orders[i].ordered_at
    }
  }
  
  return latest
}