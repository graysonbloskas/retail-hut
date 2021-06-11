import React from 'react';
import './style.css';

function SearchBar() {
    return (
<form className="form-inline searchBar">
      <div className="form-group mb2">
        <input type="search" className="form-control" id="searchInput" placeholder="Search for a product"></input>
      </div> 
</form>
    )
}

export default SearchBar
