import React from 'react'
import bannerImg from '../assets/books.jpg'

export default function Banner() {
    return (
        <div className="hero bg-base-200 min-h-screen rounded-2xl mb-10">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <img
                    src={bannerImg}
                    alt="Banner"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold mb-5">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    )
}
