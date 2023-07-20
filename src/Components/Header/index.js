import { Link } from "react-router-dom";
import { Botao } from "../Botao/style";
import { HeaderDiv } from "./styles";
import { StyledLink } from "../../StyledLink/style";

const Header = () => {
    return (
        <HeaderDiv>
            <h1>Delicias Caseiras</h1>
            <StyledLink to="/estoque">Estoque</StyledLink>
            <StyledLink to="/encomendas">Encomendas</StyledLink>
            <StyledLink to='/'>Sair</StyledLink>
        </HeaderDiv>
    )
}

export default Header;