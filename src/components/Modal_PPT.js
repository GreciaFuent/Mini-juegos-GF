import "../styles/Modal_PPT.css"

function Modal_PPT() {


    const cerrar_modal = ()=> {
        const modal = document.querySelector(".modal_tarjetas")
        const li_jugador = document.querySelector(".li_jugador")
        const li_maquina = document.querySelector(".li_maquina")
        const h1_modal = document.querySelector(".h2")
        
        
        h1_modal.innerHTML = "Ganador"

        li_jugador.classList.replace("fondo_tijera","cambiar")
        li_jugador.classList.replace("fondo_piedra","cambiar")
        li_jugador.classList.replace("fondo_papel","cambiar")
        
        li_maquina.classList.replace("fondo_tijera_compu","change")
        li_maquina.classList.replace("fondo_piedra_compu","change")
        li_maquina.classList.replace("fondo_papel_compu","change")
        h1_modal.classList.replace("perdedor","ganador")
        h1_modal.classList.replace("empate","ganador")

        modal.style.display = "none"
    }


    return (
        <section className="modal_tarjetas">
            <h2 className="ganador h2">Ganador</h2>
            <div className="cont_div_modal">
                <div className="div_compu">
                    <h2>Maquina</h2>
                        <ul className="ul_maquina">
                            <li className="li_maquina change"></li>
                        </ul>
                </div>
                <img className="vs" src="https://static.vecteezy.com/system/resources/previews/019/541/245/original/vs-icons-illustration-versus-icons-symbol-vector.jpg"></img>
                <div className="div_jugador">
                    <h2>Jugador 1</h2>
                        <ul className="ul_jugador">
                            <li className="li_jugador cambiar"></li>
                        </ul>
                </div>
            </div>
            <button onClick={cerrar_modal} className="btn_cerrar_modal">Next</button>
            </section>
    )
}

export default Modal_PPT