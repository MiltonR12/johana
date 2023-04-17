import { useRef, useState } from 'react'
import fondomusic from '../audio/sonido-fondo.mp3'
import { GiMusicSpell } from 'react-icons/gi'

function Musica() {

  const music = useRef(null);
  const [activo, setActivo] = useState(true)

  const reproducir = (activo) => {
    if (activo) {
      music.current.play()
      music.current.volume = 0.05
    } else {
      music.current.pause()
      music.current.currentTime = 0
    }
  }

  return (
    <div className='flex justify-end text-4xl' >
      <button
        className={`${activo ? '' : 'text-red-600 animate-pulse'}`}
        onClick={() => {
          setActivo(!activo);
          reproducir(activo)
        }} >
        <GiMusicSpell />
      </button>
      <audio src={fondomusic} ref={music} ></audio>
    </div>
  )
}

export default Musica