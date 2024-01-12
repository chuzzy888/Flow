import React from 'react'

export default function Title({classes ,text}) {
  return (
    <div className='bg-green-500 font-serif text-white font-400'>
      <h1    className={!classes ?'title text-center ' : classes}> {!text ? "Title" : text} </h1>
    </div>
  )
}
