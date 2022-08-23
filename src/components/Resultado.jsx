import "./Resultado.css"
import PropTypes from 'prop-types';

function Resultado({resultado}){

    return(
        <span className="titulo">{resultado}</span>
    )

    
    
}

Resultado.propTypes = {
    resultado: PropTypes.string.isRequired
}

export default Resultado;