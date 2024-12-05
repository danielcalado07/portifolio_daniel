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
    margin-bottom: 50px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

export const Skills = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: column;

    @media (max-width: 768px) {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

export const ContainerSkills = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns:  20% 20% 20% 20% 20%;

    @media (max-width: 768px) {
        grid-template-columns:  33% 33% 33%;
    }
`;

export const Image = styled.img`
    width: 120px;
    height: 120px;

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    }
`;

export const DescriptionSkills = styled.p`
    color: white;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
    margin-top: 10px;

    @media (max-width: 768px) {
        font-size: 10px;
    }
`;