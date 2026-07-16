import React from 'react';
import { Link } from 'react-router-dom';
import { itemsData } from './mockData';

function ItemList() {
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {itemsData.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;