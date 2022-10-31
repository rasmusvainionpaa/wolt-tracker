type CounterProps = {
  total: number;
};

export default function Counters({ total }: CounterProps) {
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
          <p>0</p>
          <p>{total}</p>
          <p>0</p>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}
