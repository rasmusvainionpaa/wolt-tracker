import { OrderType } from "src/types/order";

// get latest date when order was made
export default function lastOrder(orders: OrderType[]) {
    let latest = new Date

    if(orders[0] === undefined || orders[0] === null) {
        return latest.toString()
    }

    latest = orders[0].Ordered
    let temp: Date
    for(var i = 1; i < orders.length; i++) {
        temp = orders[i].Ordered
        if(temp > latest) {
            latest = orders[i].Ordered
        }
    }
    
    return latest.toString()
}