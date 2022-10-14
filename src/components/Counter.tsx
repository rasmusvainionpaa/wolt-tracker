import date from 'date-and-time';

export default function Counters({props}: any) {

    //const diff = Math.floor(date.subtract(new Date(), props.latestDate).toDays())
    //const perDaySpend = props.total / (Math.floor(date.subtract(props.latestDate, props.firstDate).toDays()))
    //const moneySaved = perDaySpend * diff

    const diff = 3
    const perDaySpend = 3
    const moneySaved = 5

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-center p-4 mb-5 text-3xl">
                <div className="flex flex-col p-4">
                    <p>
                        Days since last order
                    </p>
                    <p>
                        Total money spent
                    </p>
                    <p>
                        Money spend per day
                    </p>
                    <p>
                        Money saved
                    </p>
                </div>
                <div className="flex flex-col p-4">
                    <p>
                        {diff}
                    </p>
                    <p>
                        {3}
                    </p>
                    <p>
                        {perDaySpend}
                    </p>
                    <p>
                        {moneySaved}
                    </p>
                </div>
            </div>
        </div>
    )
}