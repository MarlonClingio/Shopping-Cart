import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar() {

  const { setProducts, setLoading } = useContext(AppContext);
  const [search, setSearch] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(search);
    setProducts(products);
    setLoading(false);
    setSearch('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input type="search" value={search} placeholder="Buscar produtos" className="search__input" required onChange={({ target }) => setSearch(target.value)} />
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
