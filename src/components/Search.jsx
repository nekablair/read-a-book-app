//search bar, look for books by author, book name, subject
import React from 'react'

const Search = () => {
  return (
    <>
        <div>Search</div>
        <form action="">
            <label htmlFor="site-search">Search for Books:</label>
            <input type="search" placeholder='Enter a search term for author, book name or subject'/>
            <input type="submit" value="Submit" />
        </form>
    </>
  )
}

export default Search