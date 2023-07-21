import { styled } from "styled-components";



export const LoginPageDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;

`

export const LogoName = styled.img`
width: 20vw;
height: auto;
margin-bottom: 1.5vh;

@media screen and (max-width:900px){
width: 300px;
}
`

export const LoginDiv = styled.div`
    display: flex;
    background-color: #52240D;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: 50vw;
    max-width: 90%;
    max-height: 90%;
    border-radius: 30px;

    & label{
        color: #EAD7C6;
    }


    @media screen and (max-width:480px){
    width: 90%;
    
}
    
`