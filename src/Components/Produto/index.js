import { Botao } from "../Botao/style";
import { ProdutoDiv } from "./style";

const Produto = (props) => {
    
    return(
        <ProdutoDiv>
            <img alt='imagem' src={props.foto}/>
            <p>Nome : {props.nome}</p>
            <p>Quantidade: {props.quantidade}</p>
            <Botao>+</Botao>
            <Botao>-</Botao>
        </ProdutoDiv>
    )

}

export default Produto;