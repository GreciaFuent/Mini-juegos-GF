import Modal_PPT from "../components/Modal_PPT"
import "../styles/Ppt.css"

function PPT() {

// TODO EL CODIGO QUE SE UTILIZO PARA EL MODAL

    // selecciona la img de de la tarjeta del modal del jugador
    const fondo_tijera = ()=> {
        const li_jugador = document.querySelector(".li_jugador")

        li_jugador.classList.replace("cambiar","fondo_tijera")
    }

    const fondo_piedra = ()=> {
        const li_jugador = document.querySelector(".li_jugador")

        li_jugador.classList.replace("cambiar","fondo_piedra")
    }

    const fondo_papel = ()=> {
        const li_jugador = document.querySelector(".li_jugador")

        li_jugador.classList.replace("cambiar","fondo_papel")
    }


    // selecciona la img de de la tarjeta del modal de la maquina
    const fondo_tijera_compu = ()=> {
        const li_maquina = document.querySelector(".li_maquina")

        li_maquina.classList.replace("change","fondo_tijera_compu")
    }

    const fondo_piedra_compu = ()=> {
        const li_maquina = document.querySelector(".li_maquina")

        li_maquina.classList.replace("change","fondo_piedra_compu")
    }

    const fondo_papel_compu = ()=> {
        const li_maquina = document.querySelector(".li_maquina")

        li_maquina.classList.replace("change","fondo_papel_compu")
    }


    // codigo para abrir el modal
    const abrir_modal = ()=> {
        const modal = document.querySelector(".modal_tarjetas")

        modal.style.display = "block"
    }

    // codigo para cambiar el texto del modal
    const cambiar_clase_perdedor = ()=> {
        const h1_modal = document.querySelector(".ganador")

        h1_modal.classList.replace("ganador","perdedor")

        const h2_modal_modificado = document.querySelector(".perdedor")

        h2_modal_modificado.innerHTML = "Perdedor"
    }


// CODIGO DE LA PAGE PPT
    const cambiar_clase_empate = ()=> {
        const h1_modal = document.querySelector(".ganador")

        h1_modal.classList.replace("ganador","empate")

        const h2_modal_modificado = document.querySelector(".empate")

        h2_modal_modificado.innerHTML = "Es un empate"
    }



    // El codigo para obtener el numero random 
    const contra = ()=>{
        let num_random = Math.floor(Math.random() * 3)

        if (num_random == 0) {
            console.log('La computadora juega con piedra')
            fondo_piedra_compu()
        }
        else if (num_random == 1) {
            console.log('La computadora juega con papel')
            fondo_papel_compu()
        }
        else if (num_random == 2) {
            console.log('La computadora juega con tijera')
            fondo_tijera_compu()
        }

        return num_random
    }

    // obtener el contador del marcador
    let contador_compu = 0
    let contador_jugador = 0

    const marcador_maquina = ()=> {
        const contador_maquina = document.querySelector(".contador_maquina")

        contador_maquina.innerHTML = contador_compu
    }

    const marcador_jugador = ()=> {
        const contador_jugador1 = document.querySelector(".contador_jugador1")

        contador_jugador1.innerHTML = contador_jugador
    }

    // El codigo para obtener la opcion del jugador
    let contador_tijera = 0
    let contador_piedra = 0
    let contador_papel = 0
    let opcion = ""
    


    const juego = (contra)=> {
        abrir_modal()

        // define la opcion de jugador
        if (contador_papel == 1) {
            opcion = "papel"
            
        }
        else if (contador_piedra == 1) {
            opcion = "piedra"
        }
        else if (contador_tijera == 1) {
            opcion = "tijera"
        }

        // el enfrentamiento
        if (opcion == "papel" & contra == 0) {
            contador_jugador += 1
            console.log("tu ganas")
            
        }
        else if (opcion == "papel" & contra == 1) {
            console.log("nadie gana")
            cambiar_clase_empate()
        }
        else if (opcion == "papel" & contra == 2) {
            contador_compu += 1
            console.log("la compu gana")
            cambiar_clase_perdedor()
        }
        else if(opcion == "piedra" & contra == 0) {
            console.log("nadie gana")
            cambiar_clase_empate()
        }
        else if (opcion == "piedra" & contra == 1) {
            contador_compu += 1
            console.log("la compu gana")
            cambiar_clase_perdedor()
        }
        else if (opcion == "piedra" & contra == 2) {
            contador_jugador += 1
            console.log("tu ganas")
        }
        else if(opcion == "tijera" & contra == 0) {
            contador_compu += 1
            console.log("la compu gana")
            cambiar_clase_perdedor()
        }
        else if (opcion == "tijera" & contra == 1) {
            contador_jugador += 1
            console.log("tu ganas")
        }
        else if (opcion == "tijera" & contra == 2) {
            console.log("nadie gana")
            cambiar_clase_empate()
        }

        marcador_maquina()
        marcador_jugador()
    }


    const sumar_contador_tijera = ()=> {
        contador_tijera += 1
        juego(contra())
        fondo_tijera()
        contador_tijera = 0
    }

    const sumar_contador_piedra = ()=> {
        contador_piedra += 1
        juego(contra())
        fondo_piedra()
        contador_piedra = 0
    }   

    const sumar_contador_papel = ()=> {
        contador_papel += 1
        juego(contra())
        fondo_papel()
        contador_papel = 0
    }

    


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
                    <li className="contador_maquina">0</li>
                    <li className="contador_jugador1">0</li>
                </ul>
            </div>

            <Modal_PPT/>
            <h3 className="texto_h3">Escoje con que tarjeta deseas jugar</h3>
            <div className="tarjetas">
                    <ul className="ul_opciones">
                        <li className="li piedra" onClick={sumar_contador_piedra}></li>
                        <li className="li papel" onClick={sumar_contador_papel}></li>
                        <li className="li tijera" onClick={sumar_contador_tijera}></li>
                    </ul>
                </div>
        </div>
    )
}

export default PPT