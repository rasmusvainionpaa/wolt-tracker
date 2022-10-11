import { OrderType } from "src/types/order";

export default function Order({key, order}: any) {
    return (
        <div className="flex flex-row border-2 p-2 m-2">
            <p className="p-2">
                Store name: {order.Store}
            </p>
            <p className="p-2">
                Price: {order.Price}
            </p>
            <p className="p-2">
                {key}
            </p>
        </div>
    )
}