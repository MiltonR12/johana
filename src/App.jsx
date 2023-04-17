import React from 'react'
import Presentacion from './components/Presentacion'
import Carta from './components/Carta'
import Historia from './components/Historia'

function App() {
  return (
    <div className="container bg-zinc-900 px-7 py-5 md:mt-5 text-center m-auto text-white">
      <h1 className="text-5xl font-bold mb-5 text-red-600">NUESTRA HISTORIA</h1>
      <Presentacion />
      <Historia />
      <Carta />
    </div>
  )
}

export default App