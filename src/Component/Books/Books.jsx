import React, { useEffect, useState } from 'react'
import Book from './Book';

export default function Books() {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('booksData.json') 
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    },[])

  return (
    <div className='mb-10'>
        <h1 className='text-3xl font-bold text-center mb-6'>Books</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {books.map(book => <Book key={book.bookId} book={book}></Book>)}
      </div>
    </div>
  )
}
