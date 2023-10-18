import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className='searchbar'>
      <input
        type="text"
        placeholder="Search photos..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;