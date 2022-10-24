import { OrderType } from "src/types/order";

type OrderProps = {
  order: OrderType;
};

export default function Order({ order }: OrderProps) {
  return (
    <div className="m-2 flex flex-row border-2 p-2">
      <p className="p-2">Store name: {order.store}</p>
      <p className="p-2">Price: {order.price}</p>
    </div>
  );
}
