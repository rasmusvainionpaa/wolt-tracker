import Link from "next/link";
import { OrderType } from "src/types/order";

type OrderProps = {
  order: OrderType;
};

export default function Order({ order }: OrderProps) {
  return (
    <div className="group relative rounded-lg border transition-shadow hover:cursor-pointer hover:shadow-lg">
      <Link href={`/orders/${order.id}`}>
        <a className="absolute inset-0 z-0 h-full w-full select-none text-transparent">
          {order.store}
        </a>
      </Link>

      <div className="pointer-events-none relative z-10 flex justify-between p-4">
        <div className="p-1">{order.store}</div>
        <div className="p-1">{order.price}</div>
        <div className="pointer-events-auto p-1">
          <button
            onClick={() => alert("moi")}
            className="flex h-7 w-7 items-center justify-center gap-1 rounded-md bg-neutral-100 p-1 opacity-0 transition-opacity group-hover:opacity-100"
          >
            <span className="sr-only">Open menu</span>

            <div className="h-[3px] w-[3px] rounded-full bg-neutral-400" />
            <div className="h-[3px] w-[3px] rounded-full bg-neutral-400" />
            <div className="h-[3px] w-[3px] rounded-full bg-neutral-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
