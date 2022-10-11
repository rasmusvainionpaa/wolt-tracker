import { OrderType } from "src/types/order";

export default function countTotal(orders: OrderType[]) {
    let total = 0
    orders.map((order) => {
        total = order.Price + total
    })

    return total
}