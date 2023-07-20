import { Link } from "react-router-dom";
import { Botao } from "../Botao/style";
import { Input } from "../Input/style";
import { HeaderDiv } from "./styles";

const Header = () => {
    return (
        <HeaderDiv>
            <h1>Delicias Caseiras</h1>
            <Input placeholder="Pesquise aqui um sabor"/>
            <Link to="/estoque">Estoque</Link>
            <Link to="/encomendas">Encomendas</Link>
            <Link to='/'>Sair</Link>
        </HeaderDiv>
    )
}

export default Header;