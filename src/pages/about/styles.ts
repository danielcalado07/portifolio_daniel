import styled from "styled-components";

export const Container = styled.div`
    padding-top: 60px;
`;

export const Image = styled.img`
    width: 100%;
    object-fit: cover;
    margin-bottom: 60px;

    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

export const H1Title = styled.h1`
    color: white;
    font-size: 50px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-left: 20px;
    margin-bottom: 5px;
    margin-top: 0px;

    @media (max-width: 768px) {
        font-size: 30px;
        margin-left: 0;
    }
`;

export const Subtitle = styled.h2`
    color: #16bd16;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-left: 20px;
    margin-top: 0px;

    @media (max-width: 768px) {
        font-size: 15px;
        margin-left: 0;
        font-size: 10px;

    }
`;

export const Presentation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding-left: 10%;
    padding-right: 10%;

    @media (max-width: 768px) {
        padding: 0;
        flex-direction: column-reverse;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    width: 50%;
    
    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`;

export const ImagePerfil = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 20px;

    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const ContainerAbout = styled.div`
    padding-left: 10%;
    padding-right: 10%;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 768px) {
        padding: 0 20px;
        margin-top: 50px;
        margin-bottom: 50px;
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

export const DescriptionAbout = styled.p`
    color: white;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
    margin-top: 40px;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

export const Span = styled.span`
    color: #16bd16;
    font-style: italic;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`;