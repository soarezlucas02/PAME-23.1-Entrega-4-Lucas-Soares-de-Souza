import { ProdutosDiv } from "./style";
import Produto from '../Produto/index';
import { objetos } from '../Objetos/index';

const Produtos = () => {
    
    return(
        <ProdutosDiv>
            {objetos.map((produto, index) => (
                <li key={index}>
                    <Produto
                        nome={produto.nome}
                        quantidade={produto.quantidadeEmEstoque}
                        foto={produto.imageUrl}
                    />
                </li>

            ))}
        </ProdutosDiv>
    )

}

export default Produtos;