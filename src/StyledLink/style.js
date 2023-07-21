import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
text-align: center;
padding: .7vw;
font-size: 1.5vw;
color: #52240D;
background-color: #EAD7C6;
border-radius: 10px;
margin: 10px;
border: 1px solid black;
cursor: pointer;
text-decoration: none;
width: 10vw;

@media screen and (max-width:480px){
    width: 10em;
    margin: 10px;
    padding: 8px;
    font-size: 16px;
    
}
`