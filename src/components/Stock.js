import React, { useState, useEffect } from 'react';

function Stock() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then((r) => r.json())
      .then((data) => setStocks(data));
  }, []);

  const displayStockContainer = stocks.map((stock) => {
    return (
      <div className='card' key={stock.id}>
        <div className='card-body'>
          <h5 className='card-title'>{stock.name}</h5>
          <p className='card-text'>{stock.price}</p>
        </div>
      </div>
    );
  });

  return <div>{displayStockContainer}</div>;
}
export default Stock;
