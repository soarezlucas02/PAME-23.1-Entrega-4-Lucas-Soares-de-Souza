import { styled } from "styled-components";

export const EncomendaDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1.9px solid black;
    margin: 10px;
    color: white;

    & img {
        margin: 10px;
        width: 300px;
        max-width: 100%;
    }

    & .apagar{
        width: 20px;
        cursor: pointer;
        filter: invert();
    }

`