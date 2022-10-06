import React from 'react'
import BookCard from './BookCard'

export default function Home({ books, handleSearch, addToRead }) {
  return (
    <>
      <nav className="navbar bg-inherit">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" onChange={(e) => handleSearch(e.target.value)} />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div>
        {books.map((book) => (
          <BookCard key={book.id} book={book} addToRead={addToRead} />
        ))}
      </div>
    </>
  )
}
