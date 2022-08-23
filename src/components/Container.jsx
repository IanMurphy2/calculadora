import { useState } from "react";
import "./Container.css"
import Numeros from "./Numeros"
import Operadores from "./Operadores";
import Resultado from "./Resultado";
import Borrar from "./Borrar"

function Container(){

    const [operacion, setOperacion] = useState("")
    const igual = () => setOperacion(eval(operacion))
    const clear = () => setOperacion("")
    const previous = () => setOperacion(operacion.slice(0, -1))

    return(
        <main className="cont__main">

            <section className="cont__section">
                <div className="cont__section__pantalla">
                    <div className="cont__section__pantalla__div">
                        <Resultado resultado={operacion} />
                    </div>
                </div>
                <div className="cont__section__teclas">
                    <div className="cont__section__teclas__div">
                        <div>
                            <Numeros onClickNumber={e => setOperacion(`${operacion}${e}`)}/>
                            <Borrar onClickDelete={clear} onClickPrevious={previous}/>
                        </div>
                        <Operadores onClickOperation={e => setOperacion(`${operacion}${e}`)} onClickEqual={igual} />
                    </div>
                </div>
            </section>

        </main>
    )

}

export default Container;