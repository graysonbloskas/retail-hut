import React from 'react';
import './style.css';

function SearchBar() {
    return (

<form className="form-inline searchBar">
      <div className="form-group mb2">
        <input type="search" className="form-control" id="searchInput" placeholder="Search for a product"></input>
      </div> 
      {/* <button type="submit" className="btn btn-primary mb-2">Search</button> */}
</form>



      //   <form className="searchBar form-inline"> 
      //   <div className="form-group mb2">
      //       <input type="search" className="form-control" id="searchInput" aria-describedby="searchHelp" placeholder="Search for a product" />
      //       </div>
      //       <button type="submit" className="btn btn-primary mb-2 searchBtn">Search</button>
          
      // </form>

    )
}

export default SearchBar
