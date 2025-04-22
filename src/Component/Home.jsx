import React from 'react'
import Banner from './Banner'
import Books from './Books/Books'


export default function Home() {
  return (
    <div className='w-10/12 mx-auto mt-10'>
      <Banner></Banner>
      <Books></Books>
    </div>
  )
}
