import { styled } from "styled-components"
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        background-color: #AB5D39;
    }
`;

export const Logo = styled.img`
    width: 10vw;
    height: auto;

    @media screen and (max-width:900px){
        width: 100px;
    }

`

export const colors = {
    MarromClaro:'#EAD7C6',
}


