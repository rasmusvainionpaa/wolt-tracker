export default function Counters({ props }: any) {
  const perDaySpend =
    props?.total / props?.diff != NaN ? props?.total / props?.diff : 0;

  return (
    <div className="flex flex-col">
      <div className="mb-5 flex flex-row justify-center p-4 text-3xl">
        <div className="flex flex-col p-4">
          <p>Days since last order</p>
          <p>Total money spent</p>
          <p>Money spend per day</p>
          <p>Money saved</p>
        </div>
        <div className="flex flex-col p-4">
          <p>{props?.diff ? 0 : props?.diff}</p>
          <p>{props?.total ? 0 : props?.total}</p>
          <p>{perDaySpend}</p>
          <p>{props?.saved ? 0 : props?.saved}</p>
        </div>
      </div>
    </div>
  );
}
