import { Link } from "react-router-dom";
import { Botao } from "../../Components/Botao/style";
import { Input } from "../../Components/Input/style";
import { LoginDiv, LoginPageDiv } from "./style";
import { StyledLink } from "../../StyledLink/style";

const Login = () => {
    return(
    <LoginPageDiv>
        <h1>Delicias Caseiras</h1>

        <LoginDiv>
            <label for="usuario" class="texto-usuario">Email ou nome de usuario</label>
                <Input type="username" id="username" required placeholder="E-mail ou nome de usuário"/>

                <label for="senha" class="texto-usuario texto-senha">Senha</label>
                <Input type="password" id="senha" required placeholder="Senha "/>

                <StyledLink to='/estoque'>Entrar</StyledLink>
        </LoginDiv>
    </LoginPageDiv>
    )
}

export default Login;