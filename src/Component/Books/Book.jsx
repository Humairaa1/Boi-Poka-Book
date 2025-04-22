import React from 'react'
import { Link } from 'react-router-dom';

export default function Book({book}) {

    const {bookId, bookName,author, image} = book;

    return (
        <Link to={`/books/${bookId}`} className='hover:scale-105 duration-300'>
        <div className="card bg-base-100 shadow-sm p-6">
            <figure className='bg-gray-100 py-10 rounded-2xl'>
                <img
                    src={image}
                    className='h-[170px]'
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By: {author}</p>
                
            </div>
        </div>
        </Link>
    )
}
