import "./Boton.css"

function Boton({tipo, valor, clickHandler}){

    return(
        <button className={`${tipo}__btn`} onClick={() => clickHandler(valor)}>{valor}</button>
    )
}

export default Boton;