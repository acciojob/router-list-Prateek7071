import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { itemsData } from './mockData';

function ItemDetail() {
  const { id } = useParams();
  
  // Find the item matching the ID from the URL parameter
  const item = itemsData.find((i) => i.id === parseInt(id, 10));

  if (!item) {
    return (
      <div>
        <h2>Item not found</h2>
        <Link to="/">Back to Item List</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <Link to="/">Back to Item List</Link>
    </div>
  );
}

export default ItemDetail;