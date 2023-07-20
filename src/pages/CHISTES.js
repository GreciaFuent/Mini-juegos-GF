import "../styles/Chistes.css"
import Tarjetas_Chistes from "../components/Tarjetas_Chistes"


function CHISTES() {

    const chistes = [
        {
            name: `Un loco entra a una panadería`,
            chiste: `Un loco entra a una panadería y le pregunta al panadero: Señor, ¿ya salió el pan? Y el panadero le dice:Sí, ya salió.Entonces el loco le pregunta: ¿Y a qué hora regresará?`
        },
        {
            name : `Mal entendido`,
            chiste: `El guardia al conductor borracho:
                    - ¿Me da su permiso de conducir?
                    - Sí, conduzca, conduzca...`
        },
        {
            name : `¡Qué rico!`,
            chiste: `- Mamá, mamá, ¿y por qué tenemos que comer hamburguesa?
                    - Cállate y no saques la mano del triturador.`
        },
        {
            name : `Trabajo ideal`,
            chiste: `- Mi hijo, en su nuevo trabajo, se encuentra como pez en el agua.
                    - ¿Qué hace?
                    - Nada.`
        },
        {
            name : `Análisis positivo`,
            chiste: `Va uno a recoger unos análisis y le dice el médico:
                    - Hemos encontrado algo de sangre en su torrente alcohólico.`
        },
        {
            name : `Anarquía religiosa`,
            chiste: `¿Tú sabes por qué los curas van tan contentos a su trabajo?
                    Porque tienen al jefe crucificado.`
        },
        {
            name : `Ganado Equivocado`,
            chiste: `Va un abogado con su hijo a su hacienda ganadera. El hijo le pregunta al abogado:
                    Papá, papá, todo lo que veo a mi alrededor es ganado.
                    ¡No hijo, es robado!`
        },
        {
            name : `El Juicio de la Apariencia`,
            chiste: `En un juicio dice el fiscal:
                    Miren al acusado, su mirada torva, su frente estrecha, sus ojos hundidos, su apariencia siniestra.
                    Y el acusado interrumpe:
                    Pero bueno, ¿Me van a juzgar por asesino o por feo?`
        },
        {
            name : `La Diferencia de Plumas`,
            chiste: `¿En qué se diferencia un abogado a un cuervo?
                    En que uno es rapaz, ladrón y traicionero, y si puede te saca los ojos, y el otro es un inocente pajarito negro.`
        },
        {
            name : `El Efecto del Alcohol`,
            chiste: `Estaba un borracho en una esquina, cuando una mujer pasa caminando, el borracho la observa y le dice:
                    ¡Adiós fea!
                    La mujer indignada se da media vuelta y le dice:
                    ¡Borracho!
                    El borracho con una sonrisa le dice:
                    Sí, pero a mí, mañana se me pasa.`
        },
        {
            name : `El Cardio Extremo de Caperucita`,
            chiste: `Estaba Caperucita roja de tanto correr...`
        }
    ]

    const generar_numero_random = ()=> {
        const numero_random = Math.floor(Math.random() * chistes.length)

        let nombre_chiste = chistes[numero_random].name
        let chiste = chistes[numero_random].chiste

        const antiguo_nombre_chiste = document.querySelector(".nombre_chiste")
        const antiguo_chiste = document.querySelector(".chiste")

        let nuevo_nombre_chiste = antiguo_nombre_chiste.innerHTML = nombre_chiste
        let nuevo_chiste = antiguo_chiste.innerHTML = chiste

    }
    

    return (
        <div className="principal_chistes">
            <a href="/principal"><button className="return"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.854 5.646a.5.5 0 010 .708L3.207 9l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M13.5 2.5a.5.5 0 01.5.5v4a2.5 2.5 0 01-2.5 2.5H3a.5.5 0 010-1h8.5A1.5 1.5 0 0013 7V3a.5.5 0 01.5-.5z" clip-rule="evenodd"></path></svg></button></a>
            <h1 className="h1_chistes">Chistes</h1>
            <Tarjetas_Chistes/>
            <button className="btn_generar_chiste" onClick={generar_numero_random}>New chiste</button>
        </div>
    )
}

export default CHISTES