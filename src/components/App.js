import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={<ItemList />} />
        
        {/* Dynamic Item Detail Route */}
        <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;