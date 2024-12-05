import styled from "styled-components";

export const Container = styled.div`
    padding-top: 60px;
    padding-left: 10%;
    padding-right: 10%;

    @media (max-width: 768px) {
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 30px;
    }
`;

export const H1About = styled.h1`
    color: #ffffff;
    font-size: 40px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: 0;
    text-align: center;
    margin-bottom: 50px;   

    @media (max-width: 768px) {
        font-size: 30px;
        margin-bottom: 20px;
    }
`;