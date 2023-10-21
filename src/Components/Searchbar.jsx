import React from 'react';

const SearchBar = ({ onSearch,value }) => {

  const handleSearch = (event) => {
    const value = event.target.value;
    onSearch(value);
  };

  return (
    <div className='searchbar'>
      <input
        type="text"
        placeholder="Search photos..."
        value={value}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;