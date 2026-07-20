import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage displaying the 3 items */}
        <Route path="/" element={<ItemList />} />
        
        {/* Dynamic item view route matching /items/:id */}
        <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;