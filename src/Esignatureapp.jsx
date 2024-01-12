import React from 'react'
import { useState } from 'react'
import Title from './components/Title'

export default function Esignatureapp() {
  const [name, setname] = useState("")
  const [date, setdate] = useState("")

  const handlechangename = (e) => {
    setname(e.target.value)
  }

  const handlechangedate = (e) => {
    setdate(e.target.value)
  }

  return (
    <div className='container text-center bg-gray-200 h-screen'>
      <Title text={name} classes={"title"} />
      <Title text={!date ? "D.O.B" : date} classes={"main-title "} />
      <p className='my-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium assumenda aperiam facere ipsam mollitia magni
        temporibus cupiditate commodi ab sapiente quia voluptatem
        error quisquam ad, consequuntur accusantium quos, dicta
      </p>
      <footer className='flex flex-col gap-10 m-5 justify-around  sm:flex-row  lg:mt-52'>

        <input type="date" value={date} onChange={handlechangedate} className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
        <input type="text" value={name} placeholder='enter signature ..' onChange={handlechangename} className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />

      </footer>

    </div>
  )
}
