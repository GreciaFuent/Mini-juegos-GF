import "../styles/Tarjetas.css"

function Tarjetas(props) {

    const { name , img , enlace} = props

    return (
        <a href={enlace} className="enlace_tarjeta">
            <div className="tarjeta">
            <div className="cont_img">
                <img src={img}></img>
            </div>
            <h2>{name}</h2>
            </div>
        </a>
    )
}


export default Tarjetas