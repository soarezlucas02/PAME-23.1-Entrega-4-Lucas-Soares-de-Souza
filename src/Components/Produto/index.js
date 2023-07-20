import { ProdutoDiv } from "./style";

const Produto = (props) => {
    
    return(
        <ProdutoDiv>
            <img alt='imagem' src={props.foto}/>
            <p>Nome : {props.nome}</p>
            <p>Quantidade: {props.quantidade}</p>
            <button>+</button>
            <button>-</button>
        </ProdutoDiv>
    )

}

export default Produto;