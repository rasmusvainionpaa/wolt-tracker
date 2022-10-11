import { OrderType } from "src/types/order"

export default function Counters({data}: any) {
    const daysSinceLastOrder = 3

    return (
        <div className="flex flex-col">
            <div className="flex flex-col justify-center mb-5 text-3xl">
                <div className="flex flex-row justify-around p-4">
                    <p className="p-4">
                        Days since last order
                    </p>
                    <p className="p-4">
                        {daysSinceLastOrder}
                    </p>
                </div>
                <div className="flex flex-row justify-around p-4">
                    <p className="p-4">
                        Money saved
                    </p>
                    <p className="p-4">
                        {daysSinceLastOrder}
                    </p>
                </div>
                <div className="flex flex-row justify-around p-4">
                    <p className="p-4">
                        Average day spending
                    </p>
                    <p className="p-4">
                        {daysSinceLastOrder}
                    </p>
                </div>
                <div className="flex flex-row justify-around p-4">
                    <p className="p-4">
                        Money used
                    </p>
                    <p className="p-4">
                        {daysSinceLastOrder}
                    </p>
                </div>
            </div>
        </div>
    )
}