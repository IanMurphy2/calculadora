import "./Operadores.css"
import Boton from "./Boton";

function Operadores({onClickOperation, onClickEqual}){
    const operadores = ["-", "+", "*", "/"]

    return(
        <section className="operadores">
            {operadores.map(e => <Boton key={e} tipo="operadores" valor={e} clickHandler={onClickOperation}/>)}
            <Boton key={"="} tipo="operadores" valor={"="} clickHandler={onClickEqual}/>
        </section>
    )
}

export default Operadores;