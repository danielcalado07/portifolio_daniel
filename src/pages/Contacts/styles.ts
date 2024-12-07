import styled from "styled-components";

export const Container = styled.div`
    margin-top: 100px;
    padding-top: 40px;
    background-color: #01091b;

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

    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

export const ContainerContacts = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    gap: 80px;

    @media (max-width: 768px) {
        height: 100px;
        margin-top: 20px;
        gap: 0px;
    }
`;

export const ContainerItem = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: 0 20px;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
        margin: 0 10px;
    }
`;

export const Text = styled.p`
    color: #ffffff;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: 0;
    margin-top: 10px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`;