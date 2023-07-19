import { HeaderDiv } from "./styles";

const Header = () => {
    return (
        <HeaderDiv>
            <h1>Delicias Caseiras</h1>
            <input placeholder="Pesquise aqui um sabor"/>
            <a href="/produtos">Produtos</a>
            <a href="/encomendas">Encomendas</a>
            <button>Sair</button>
        </HeaderDiv>
    )
}

export default Header;