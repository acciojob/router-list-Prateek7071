import React from 'react';
import { Link } from 'react-router-dom';

// Shared mock data matching the required items and descriptions
export const itemsData = [
  { id: '1', name: 'Item 1', description: 'Description for Item 1' },
  { id: '2', name: 'Item 2', description: 'Description for Item 2' },
  { id: '3', name: 'Item 3', description: 'Description for Item 3' }
];

const ItemList = () => {
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
};

export default ItemList;