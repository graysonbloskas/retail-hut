import React from 'react';
import './style.css';

function SearchBar() {
    return (
        <form className="searchBar"> 
          <input type="text" name="searchBar" placeholder="Search for an item" fixed="center-top" />
            <input type="submit" value="Search" />
      </form>

    )
}

export default SearchBar
