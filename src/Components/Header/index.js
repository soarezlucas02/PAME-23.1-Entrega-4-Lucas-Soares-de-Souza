import { Botao } from "../Botao/style";
import { Input } from "../Input/style";
import { HeaderDiv } from "./styles";

const Header = () => {
    return (
        <HeaderDiv>
            <h1>Delicias Caseiras</h1>
            <Input placeholder="Pesquise aqui um sabor"/>
            <Botao href="/produtos">Produtos</Botao>
            <Botao href="/encomendas">Encomendas</Botao>
            <Botao>Sair</Botao>
        </HeaderDiv>
    )
}

export default Header;