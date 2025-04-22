import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

export default function BookDetails() {

  const { bookId } = useParams();
  const id = parseInt(bookId);

  const books = useLoaderData();

  const book = books.find(b => b.bookId === id);

  const { bookName, author, image, review } = book;


  return (
    <div className="hero bg-base-200 min-h-screen max-w-5xl mx-auto my-10 p-4 rounded-lg shadow-lg">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <img
          src={image}
          alt={bookName}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold mb-4">{bookName}</h1>
          <h1 className="text-xl font-bold">{author}</h1>

          <p className="py-6">
            {review}
          </p>
          <div className='flex gap-4'>
            <button className="btn btn-primary btn-outline">Read</button>
            <button className="btn btn-primary">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  )
}
