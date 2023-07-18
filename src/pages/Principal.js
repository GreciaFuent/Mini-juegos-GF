import Tarjetas from "../components/Tarjetas"
import NAV from "../components/NAV"
import "../styles/Principal.css"


function Principal() {

    const juegos = [
        {
            name: "Piedra, Papel o Tijera",
            img: "https://media.istockphoto.com/id/1269211670/es/vector/rock-papel-tijeras-conjunto-de-iconos-de-partes-del-cuerpo.jpg?s=612x612&w=0&k=20&c=GUYVPaBrY6ZJQUIcJKj0n4uXee90wziYxg6YP1ZBcs4=",
            enlace: "/ppt"
        }, 
        {
            name: "Totito",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/522px-Tic_tac_toe.svg.png",
            enlace: "/totito"
        },
        {
            name: "Buscaminas",
            img: "https://play-lh.googleusercontent.com/eX5S3Tv3eSO1aWDMQ7MGRO1AaZM-mF0EvRbNsUM887kJVHj0aKv4GnDNj6ds_qvhpak",
            enlace: "/buscaminas"
        },
        {
            name: "Chistes",
            img: "https://media.istockphoto.com/id/1318016939/es/vector/rodando-en-el-suelo-riendo-emoji-icono.jpg?s=612x612&w=0&k=20&c=RKMY1D-7rpC3FY0dgtW_OvzBZvE0clBa1RyJXHpVNcc=",
            enlace: "/chistes"
        }
    ]


    function components() {
        return (
            <>
            {
                juegos.map((juego)=> {
                    return <Tarjetas name={juego.name} img={juego.img} enlace={juego.enlace}/>
                })
            }
            </>
        )
    }


    const abrir = ()=> {
        const nav = document.querySelector("nav")
        nav.style.display = "block"
    }



    return (
        <div className="principal">
            <header className="header">
                <ul className="ul_header">
                    <li><h1>Mini-Juegos</h1></li>
                    <li><button className="abrir" onClick={abrir}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20V8H4zM8 11H20V13H8zM13 16H20V18H13z"></path></svg></button></li>
                </ul>
            </header>
            
            <NAV/>
            <div className="contenedor_tarjetas">
                {components()}
            </div>
        </div>
    )
}

export default Principal