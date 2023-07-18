import "../styles/Ppt.css"

function PPT() {


    // El codigo para obtener el numero random 
    const contra = ()=>{
        let num_random = Math.floor(Math.random() * 3)

        if (num_random == 0) {
            return ('La computadora juega con tijera')
        }
        else if (num_random == 1) {
            return ('La computadora juega con piedra')
        }
        else if (num_random == 2) {
            return ('La computadora juega con papel')
        }
    }


    // El codigo para obtener la opcion del jugador

    let contador_tijera = 0
    let contador_piedra = 0
    let contador_papel = 0

    const sumar_contador_tijera = ()=> {
        contador_tijera += 1
        console.log(contador_tijera)
    }

    const sumar_contador_piedra = ()=> {
        contador_piedra += 1
        console.log(contador_piedra)
    }
    const sumar_contador_papel = ()=> {
        contador_papel += 1
        console.log(contador_papel)
        console.log(`Al final los contadores quedaron de esta manera Contador papel:${contador_papel}, Contador tijera: ${contador_tijera}, Contador piedra; ${contador_piedra}`)
   
    }


    







    // let juego = ""

    // const obtenerClassNamePiedra = ()=> {
    //     const clase = document.querySelector(".piedra").className

    //     juego = clase

    //     console.log(juego)

    //    return juego
    // }

    // const obtenerClassNamePapel = ()=> {
    //     const clase = document.querySelector(".papel").className

    //     juego = clase

    //     console.log(juego)

    //    return juego
    // }

    // const obtenerClassNameTijera = ()=> {
    //     const clase = document.querySelector(".tijera").className

    //     juego = clase

    //     console.log(juego)

    //    return juego
    // }

    // console.log(juego)

    return (
        <div className="principal">
            <a href="/principal"><button className="return"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.854 5.646a.5.5 0 010 .708L3.207 9l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M13.5 2.5a.5.5 0 01.5.5v4a2.5 2.5 0 01-2.5 2.5H3a.5.5 0 010-1h8.5A1.5 1.5 0 0013 7V3a.5.5 0 01.5-.5z" clip-rule="evenodd"></path></svg></button></a>
            <h1 className="h1_ppt">Piedra, Papel o Tijera</h1>
            <div className="marcador">
                <ul className="ul_nombre">
                    <li>Maquina</li>
                    <li>Tu</li>
                </ul>
                <ul className="ul_punteo"> 
                    <li>01</li>
                    <li>05</li>
                </ul>
            </div>

            <h3 className="texto_h3">Escoje con que tarjeta deseas jugar</h3>
            <svg className="flecha" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 9.646a.5.5 0 01.708 0L8 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M8 2.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z" clip-rule="evenodd"></path></svg>
            <div className="tarjetas">
                    <ul className="ul_opciones">
                        <li className="li piedra" onClick={sumar_contador_piedra}>piedra</li>
                        <li className="li papel" onClick={sumar_contador_papel}>papel</li>
                        <li className="li tijera" onClick={sumar_contador_tijera}>tijera</li>
                    </ul>
                </div>

            {/* <section className="section_contenedor">
            <div className="div_compu">
                <h3 className="marcador">08</h3>
                <h2>Computadora</h2>
                <div className="tarjetas">
                    <ul>
                        <li className="tijera" onClick={si}></li>
                        <li className="papel" onClick={si}></li>
                        <li className="piedra" onClick={si}></li>
                    </ul>
                    <h4>Perdedor</h4>
                </div>
            </div>
            <div className="div_jugador">
                <h3 className="marcador">08</h3>
                <h2>Computadora</h2>
                <div className="tarjetas">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <h4>Ganador</h4>
                </div>
            </div>
            </section> */}
        </div>
    )
}

export default PPT