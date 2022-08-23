import "./Numeros.css"
import Boton from "./Boton";

function Numeros({onClickNumber}){
const numerosBotones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    return(
            <section className="numeros">
                {numerosBotones.map(e => <Boton key={e} tipo="numeros" valor={e} clickHandler={onClickNumber}/>)}
            </section>
    )

}

export default Numeros;