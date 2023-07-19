import { ProdutoDiv } from "./style";

const Produto = (props) => {
  return (
    <ProdutoDiv>
      <img alt="imagem" src="./." />
      <p>{props.nome}</p>
      <p>{props.quantidade}</p>
    </ProdutoDiv>
  );
};

export default Produto;
