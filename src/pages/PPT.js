import "../styles/Ppt.css"

function PPT() {
    return (
        <div className="principal">
            <a href="/principal"><button className="return"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.854 5.646a.5.5 0 010 .708L3.207 9l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M13.5 2.5a.5.5 0 01.5.5v4a2.5 2.5 0 01-2.5 2.5H3a.5.5 0 010-1h8.5A1.5 1.5 0 0013 7V3a.5.5 0 01.5-.5z" clip-rule="evenodd"></path></svg></button></a>
            <h1 className="h1_ppt">Piedra, Papel o Tijera</h1>
            <section className="section_contenedores">
            <div className="div_compu">
                <h3 className="marcador">08</h3>
                <h2>Computadora</h2>
                <div className="tarjetas">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
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
            </section>
        </div>
    )
}

export default PPT