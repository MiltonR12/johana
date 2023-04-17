import React, { useEffect, useState } from 'react'
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpeg";
import img5 from "../images/img5.jpeg";
import img6 from "../images/img6.jpeg";
import img7 from "../images/img1.jpeg";
const images = [img1, img2, img3, img4, img5, img6, img7];
import { history } from "../data/historia.json";
import AOS from 'aos'
import 'aos/dist/aos.css';
import Cargar from './Cargar';

function Historia({ visible }) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init()
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Cambia este valor para ajustar la duración de la carga

    return () => {
      clearTimeout(timer);
    };
  }, [])

  if (loading) {
    return <Cargar />
  }

  return (
    <div className={`text-zinc-200 transition-all ${visible ? 'hidden' : ''}`}  >
      {
        history.map((parrafo, index) => (
          <div
            key={index}
            className={`md:flex gap-x-5 ${(1 + index) % 2 == 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            <p className={` p-4 my-5 md:w-1/3 flex items-center`}>{parrafo}</p>
            <div className="md:w-1/3 flex justify-center">
              <span className="md:w-5 bg-zinc-800" />
            </div>
            <div className="md:w-1/3 flex justify-center" data-aos="fade-up">
              <img
                src={images[index]}
                className="rounded-md w-9/12 md:w-40"
              />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Historia