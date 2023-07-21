import { Link } from "react-router-dom";
import { Botao } from "../Botao/style";
import { HeaderDiv } from "./styles";
import { StyledLink } from "../../StyledLink/style";
import NomeIMG from '../../Assets/Nome.svg';
import { Logo } from "../../Constants/Theme/styles";

const Header = () => {
    return (
        <HeaderDiv>
            <Logo src={NomeIMG}/>
            <StyledLink to="/estoque">Estoque</StyledLink>
            <StyledLink to="/encomendas">Encomendas</StyledLink>
            <StyledLink to='/'>Sair</StyledLink>
        </HeaderDiv>
    )
}

export default Header;