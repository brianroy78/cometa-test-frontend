import React from 'react'


interface Item {
    name: string;
    quantity: number;
    price_per_unit: number;
    total: number;
}

interface Order {
    created: string;
    paid: boolean;
    subtotal: number;
    taxes: number;
    discounts: number;
    items: Item[];
}

const OrdersPage = async () => {
    const res = await fetch('http://127.0.0.1:8000/order/')
    const orders: Order[] = await res.json();

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => <li key={order.created}>{order.created} {order.paid}{order.subtotal}{order.taxes}{order.discounts}</li>)}
      </ul>
    </div>
  )
}

export default OrdersPage