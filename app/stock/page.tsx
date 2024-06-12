import React from 'react'

interface Beer {
    name: string;
    price: number;
    quantity: number;
}

interface Stock {
    last_updated: string;    
    beers: Beer[]
}

const StockPage = async () => {

    const res = await fetch('http://127.0.0.1:8000/stock/')
    const stock: Stock = await res.json();

  return (
    <div>
        <h2>Beer Stock</h2>
        <ul>
            {stock.beers.map(beer => <li key={beer.name}>{beer.name} {beer.price} {beer.quantity}</li>)}
        </ul>
    </div>
  )
}

export default StockPage
