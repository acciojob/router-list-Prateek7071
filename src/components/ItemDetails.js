import React from 'react';
import { useParams } from 'react-router-dom';
import { itemsData } from './ItemList';

const ItemDetail = () => {
  const { id } = useParams();
  
  // Find the matching item based on the route parameter
  const item = itemsData.find((i) => i.id === id);

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;