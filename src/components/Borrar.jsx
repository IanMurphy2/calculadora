import Boton from "./Boton";


function Borrar({onClickDelete, onClickPrevious}){

    return(
        <div>
            <Boton tipo={"clear"} valor={"clear"} clickHandler={onClickDelete} />
            <Boton tipo={"clear"} valor="&larr;" clickHandler={onClickPrevious} />
        </div>
        )
}

export default Borrar;