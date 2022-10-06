import React from 'react'
import BookCard from './BookCard'

export default function ReadingList({collections}) {
  const addedBook = collections.map((book) =>{
    return  <BookCard key={book} book={book} />
  })
  return (
    <div>
      {addedBook}
    </div>
  )
}
