'use client'
import Link from 'next/link'
import styles from './result.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'
import { useState } from "react"
import Button from "react-bootstrap/Button"
import Input from '@/components/Input/Input'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useRouter } from 'next/navigation'
import { Resultados } from '@/components/Resultados/Resultados'


const pantallaResultado = () => {

    const libros_string = localStorage.getItem("libros");
    const libros = JSON.parse(libros_string);

    const [topBarIsVisible, setTopBarIsVisible] = useState(true);
    const [contendoIsVisible, setContenidoIsVisible] = useState("DU");

    function swapTopBar() {
        setTopBarIsVisible(!topBarIsVisible)
    }

    function swapContenidoDU() {
        setContenidoIsVisible("DU")
    }

    function swapContenidoU() {
        setContenidoIsVisible("U")
    }

    function swapContenidoP() {
        setContenidoIsVisible("P")
    }

    let leftBarContent

    if (topBarIsVisible) {
        leftBarContent = <LeftBar libros={libros} />
    }


    return (
        <div className={styles.container}>
            <TopBar onButtonClick={swapTopBar}></TopBar>
            <div className={styles.main}>
                {leftBarContent}
                <div className={styles.contenido}>
                    <div className={styles.containerTitulo}>

                        <h1 className={styles.titulo}>Biblioteca</h1>
                        <div className={styles.botonesContainer}>
                            <button className={styles.boton2}>Volver a Buscar</button>
                            <button className={styles.boton2}>Ver mis reservas</button>
                        </div>
                    </div>

                    <div className={styles.linea}></div>

                    <div className={styles.buscar}>
                        <input type="text" placeholder="Ingresa la palabra clave" className={styles.inputBusqueda}/>
                        <button className={styles.boton}>Buscar</button>
                    </div>

                    <hr/>

                    <Resultados libros={libros} />

                </div>

            </div>

        </div>

    )

}

export default pantallaResultado;
