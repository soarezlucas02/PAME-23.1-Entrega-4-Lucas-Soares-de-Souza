import { Link } from "react-router-dom";
import { Botao } from "../../Components/Botao/style";
import { Input } from "../../Components/Input/style";
import { LoginDiv, LoginPageDiv, LogoName } from "./style";
import { StyledLink } from "../../StyledLink/style";
import LogoNome from '../../Assets/LogoNome.svg'

const Login = () => {
    return(
    <LoginPageDiv>
        <LogoName src={LogoNome}/>

        <LoginDiv>
            <label for="usuario">Email ou nome de usuario</label>
                <Input type="username" id="username" required placeholder="E-mail ou nome de usuário"/>

                <label for="senha">Senha</label>
                <Input type="password" id="senha" required placeholder="Senha "/>

                <StyledLink to='/estoque'>Entrar</StyledLink>
        </LoginDiv>
    </LoginPageDiv>
    )
}

export default Login;