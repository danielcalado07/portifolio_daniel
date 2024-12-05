import styled from "styled-components";

export const StyleButtonLeaked = styled.button`
    font-size: 20px;
    padding: 5px;
    color: #ffffff;
    border-radius: 20px;
    border: solid, 2px, #16bd16;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #010d27;
    &:hover {
        background-color: #011746;
    }

    @media (max-width: 768px) {
        font-size: 15px;
        width: 100px;
    }
`;

export const StyleButtonSolid = styled.button`
    background-color: #16bd16;
    font-size: 20px;
    padding: 5px;
    border-radius: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    margin-left: 20px;
    cursor: pointer;
    &:hover {
        background-color: #19dd19;
    }

    @media (max-width: 768px) {
        font-size: 15px;
        width: 100px;
    }
`;