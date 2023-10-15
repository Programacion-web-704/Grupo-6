'use client'
import './Libro.css'
import libros from '@/data/library.json'
import { useEffect, useState } from 'react'

export default function page({ params }) {

  const [libro, setLibro] = useState({});

  useEffect(()=>{

      libros.map((libro, index)=>{
          if(libro.ISBN13 == params.id){
              setLibro(libro);
          }
      });

  }, []);

  return (
    <div className="">

      <h1 className="">Titulo: {libro.titulo}</h1>
      <p className="">Autor: {libro.autor}</p>
      <p className="">ISBN: {libro.ISBN}</p>
      <p className="">Idioma: {libro.idioma}</p>

      <button className='reservar_button' onClick={(e)=>{
              e.preventDefault();
              
              alert('Felicidades por la reserva!!!')
          }}>Reservar</button>

    </div>
  )
}
