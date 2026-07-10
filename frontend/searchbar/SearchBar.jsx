import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Buscando:', searchTerm);
    // Aquí iría la lógica de búsqueda
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Escribe para buscar..."
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px',
          width: '250px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#007bff',
          color: 'white',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
/*import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.trim();
    if (!term) return;

    if (onSearch) {
      onSearch(term);
    } else {
      console.log("Buscando:", term);
    }
  };

  return (
    <form className="d-flex" role="search" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control me-2"
        placeholder="Buscar..."
        aria-label="Buscar"
      />
      <button className="btn btn-light" type="submit" aria-label="Buscar">
        <FaSearch />
      </button>
    </form>
  );
}*/