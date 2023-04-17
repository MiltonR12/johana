import React, { useState } from 'react'
import Presentacion from './components/Presentacion'
import Carta from './components/Carta'
import Historia from './components/Historia'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import Musica from './components/Musica'
import Poemas from './components/Poemas'
import { AiFillHeart } from 'react-icons/ai'

function App() {

  const [openHistory, setOpenHistory] = useState(true)

  return (
    <div className="container bg-zinc-900 px-7 py-5 md:mt-5 text-center m-auto text-white rounded-3xl">
      <Musica />
      <h1 className="text-5xl font-bold mb-5 text-red-600">NUESTRA HISTORIA</h1>
      <AiFillHeart className='text-center w-full text-5xl text-red-600 animate-ping my-10' />
      <Presentacion />
      <button
        onClick={() => setOpenHistory(!openHistory)}
        className='flex flex-col place-items-center w-full py-1 bg-red-600 text-3xl mb-10' >
        {openHistory ? 'Abrir Historia' : 'Cerrar Historia'}
        <br />
        {openHistory ? <AiFillCaretDown /> : <AiFillCaretUp />}
      </button>
      <Historia visible={openHistory} />
      <Carta />
      <Poemas />
    </div>
  )
}

export default App