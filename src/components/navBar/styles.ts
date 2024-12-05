import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #010714;
  color: #fff;
  height: 60px;
  font-size: 20px;
  font-weight: 400;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 60px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.6);
  border-bottom: 3px solid #16bd16;
  position: fixed;
  z-index: 10;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Nav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  padding: 0 20px;
  cursor: pointer;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 400;
  &:hover {
    color: #16bd16;
  }

  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;

export const H1Titulo = styled.h1`
  font-size: 20px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  margin-left: 20px;
  font-weight: 400;
  color: #fff;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;