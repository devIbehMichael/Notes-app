import React from 'react';
import {MdSearch} from 'react-icons/md'
const Search = ({handleSearchNote}) => {
  return (
    <div className="search">
    <MdSearch className='search-icon'/>    
    <input type="text" placeholder='type a search...' 
    onChange={(event=> 
        handleSearchNote(event.target.value))}
    />
    </div>
  )
}

export default Search