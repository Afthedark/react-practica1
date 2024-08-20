// src/Default/_components/SearchBar.jsx
import React from 'react';

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Buscar..." />
      <label>
        <input type="checkbox" />
        {' '}
        Mostrar solo productos en stock
      </label>
    </form>
  );
}

export default SearchBar;
