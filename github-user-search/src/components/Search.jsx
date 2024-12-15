import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={searchTerm}
        onChange={handleInputChange}
        style={{ padding: '10px', fontSize: '16px', width: '100%' }}
      />
      <button type="submit" style={{ padding: '10px', marginTop: '10px' }}>
        Search
      </button>
    </form>
  );
};

export default Search;
