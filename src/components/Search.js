import React from 'react';
import '../App.css';

const Search = () => {
  return (
    <form className="form-inline formsearch">
        <div className="form-group">
            <label htmlFor="moviename" className="sr-only">Searching for a Movie...</label>
            <input type="text" className="form-control placeback" id="moviename" placeholder="Ex. American Beauty"/>
        </div>
        <a href="javascript:void(0)" className="btn btn-black btsearch">Search</a>
    </form>
  );
}

export default Search;