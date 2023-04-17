import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

function Cargar() {
  return (
    <div className="text-center p-10">
      <h1 className="text-5xl text-red-600 font-bold mb-10">
        LA QUIERO MUCHO NIÑA
      </h1>
      <h2 className="text-3xl">CARGANDO HISTORIA...</h2>
      <div className='flex gap-x-5 justify-center my-5 text-4xl text-red-700 animate-pulse' >
        <AiFillHeart />
        <AiOutlineHeart />
        <AiFillHeart />
      </div>
    </div>
  )
}

export default Cargar