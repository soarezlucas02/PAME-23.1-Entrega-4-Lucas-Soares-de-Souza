import { EncomendaDiv } from "./style";


const Encomenda = (props) => {
    
    return(
        <EncomendaDiv>
            <img alt='imagem' src={props.foto}/>
            <p>ID : {props.id}</p>
            <p>Situacao: {props.situacao}</p>
            <img alt="imagem" className="apagar" src={props.apagar}/>
        </EncomendaDiv>
    )

}

export default Encomenda;