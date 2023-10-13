import React from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className='text-start flex flex-col py-5 my-6'>
      <label htmlFor="searchPhoto" className='mb-4 font-semibold text-xl'>Search a photo by title</label>
      <input type="text" id='searchPhoto' name='searchPhoto' placeholder="Search Pizzas" onChange={handleSearch} className="input input-bordered input-primary w-full max-w-xs" />
    </div>
  );
};

export default SearchBar;