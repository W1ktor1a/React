import styled from 'styled-components';

export const HerConteiner = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    align-content: center;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 4vw;
    background-color: #FDFDDD;
    
`;

export const HerText = styled.h1`
    border: 4px solid #031704;
    font-size: 4vh;
    color: #031704;
    position: relative;
    align-items: center;
    padding: 25vh 8vw;
    background-color: #3C6C3F;
    border-radius: 2rem;
    :hover{
        background-color: #031704 ;
        color:#FDFDDD;
        font-size: 5vh;
        transition: 0.5s;
    }
    `
    