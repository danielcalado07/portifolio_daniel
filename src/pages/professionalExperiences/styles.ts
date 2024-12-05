import styled from "styled-components";

export const Container = styled.div`
    padding-top: 60px;
    margin-top: 60px;
    padding-left: 10%;
    padding-right: 10%;

    @media (max-width: 768px) {
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 30px;
    }
`;

export const ContainerExp = styled.div`
    margin-top: 80px;
    margin-bottom: 20px;
    padding: 10px;
    width: 30%;
    @media (max-width: 768px) {
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 0px;
        padding-right: 5px;
    }
`;

export const ContainerExp2 = styled.div`
    margin-top: 80px;
    margin-bottom: 20px;
    padding: 10px;
    width: 70%;
    @media (max-width: 768px) {
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 0px;
        padding-left: 5px;
    }
`;

export const ContainerTrue = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

export const Experiences = styled.div`
    padding: 10px;
    margin-bottom: 10px;
    background-color: #01091b;
    margin-right: 30px;
    box-shadow: 0px 0px 10px 0px #01091b;
    cursor: pointer;
    &:hover {
        background-color: #16bd16;
        h1 {
            color: #000000;
        }
        h2 {
            color: #FFFFFF;
        }
    }

    @media (max-width: 768px) {
        padding: 5px;
        margin-right: 0px;
    }
`;

export const NameExp = styled.h1`
    color: white;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: 0;
    padding: 0;
    margin-top: 10px;
    font-weight: 200;

    @media (max-width: 768px) {
        font-size: 10px;
        margin-top: 5px;
    }
`;

export const FirmExp = styled.h2`
    color: #16bd16;
    font-size: 15px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    font-weight: 200;

    @media (max-width: 768px) {
        font-size: 5px;
        margin-bottom: 5px;
    }
`;

export const H1About = styled.h1`
    color: #ffffff;
    font-size: 40px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: 0;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

export const H2About = styled.h2`
    color: #ffffff;
    font-size: 25px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: 0;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

export const SpanExp = styled.span`
    font-size: 15px;
    color: #16bd16;
    font-style: italic;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 7px;
    }
`;

export const DescriptionExp = styled.p`
    color: white;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-top: 40px;

    @media (max-width: 768px) {
        font-size: 15px;
        margin-top: 20px;
        font-size: 10px;
    }
`;

export const SpanExpDesc = styled.span`
    font-size: 20px;
    color: #16bd16;
    font-style: italic;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 10px;
    }
`;