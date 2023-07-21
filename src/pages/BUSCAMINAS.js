import "../styles/Buscaminas.css"

function BUSCAMINAS() {

    const numero_minas = []

    for (let i = 0; i < 3; i++) {
        const numero_random = Math.round(Math.random() * 12)
        numero_minas.push(numero_random)
    }

    function mostrarElementoTocado(event) {
        const elementoTocado = event.target;
        console.log("Estás tocando el elemento con el ID:", elementoTocado.id);
    }
  
    const elementos = document.querySelectorAll('li');
      elementos.forEach(elemento => {
        elemento.addEventListener('click', mostrarElementoTocado);
    });


    return (
        <div className="principal_buscaminas">
            <a href="/principal"><button className="return"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.854 5.646a.5.5 0 010 .708L3.207 9l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M13.5 2.5a.5.5 0 01.5.5v4a2.5 2.5 0 01-2.5 2.5H3a.5.5 0 010-1h8.5A1.5 1.5 0 0013 7V3a.5.5 0 01.5-.5z" clip-rule="evenodd"></path></svg></button></a>
            <h1 className="titulo_bucaminas">Buscaminas</h1>
            <div className="grid_container">
            <li className="grid_item" id="0">0</li>
            <li className="grid_item" id="1">1</li>
            <li className="grid_item" id="2">2</li>
            <li className="grid_item" id="3">3</li>
            <li className="grid_item" id="4">4</li>
            <li className="grid_item" id="5">5</li>
            <li className="grid_item" id="6">6</li>
            <li className="grid_item" id="7">7</li>
            <li className="grid_item" id="8">8</li>
            <li className="grid_item" id="9">9</li>
            <li className="grid_item" id="10">10</li>
            <li className="grid_item" id="11">11</li>
            </div>
        </div>
    )
}

export default BUSCAMINAS