import poemas from '../data/poemas.json'
import Poema from './Poema'

function Poemas() {
  return (
    <div className='border-red-600 border-2 my-5 p-5 flex flex-col gap-3' >
      {
        poemas.map((item, index) => (
          <Poema poema={item} key={index} />
        ))
      }
    </div>
  )
}

export default Poemas