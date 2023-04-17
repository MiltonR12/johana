import { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

function Poema({ poema }) {

  const [open, setOpen] = useState(true)

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className='bg-red-600 text-red-100 text-xl py-1 w-full' >
        {poema.title} { }
      </button>
      <p className={`text-zinc-200 p-3 ${open ? 'hidden' : ''}`} >
        {poema.description}
      </p>
    </div>
  )
}

export default Poema