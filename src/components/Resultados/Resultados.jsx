import Link from 'next/link';
import './Resultados.css'

export const Resultados = ({ libros }) => {

  return (
    <div>
        <ul>
            {libros.map((libro, index)=>(

                <li>
                    <div className="book-item">
                        <img src={libro.imagen_portada_url} alt="Portada del libro" />
                        <Link href={`libro/${libro.ISBN13}`} key={index}>
                        <h3>{libro.titulo}</h3>
                        </Link>
                        <p>ISBN: {libro.ISBN}</p>
                        <p>Autores: Autor 1, Autor 2</p>
                        <p>Editor: Editorial 1</p>

                        <input type="date" name="reservar_date" min="2023-04-01" max="2024-04-30" />

                        <button className='reservar_button' onClick={(e)=>{
                            e.preventDefault();
                            
                            alert('Felicidades por la reserva!!!')
                        }}>Reservar</button>

                    </div>
                </li>

            ))}
        </ul>
    </div>
  )
}
