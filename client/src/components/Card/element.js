import styled from "styled-components";


export const ProductCard = styled.div`
  background: #ffffff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  transition: all 0.2s ease-in-out;
  margin-bottom: 10px;
  box-shadow: 0 0 20px rgb(228, 228, 228);

  &:hover{
    box-shadow: 10px 10px 10px grey;
  }
`;

export const CardH2 = styled.h2`
  font-family: arvo;
  color: rgb(52, 95, 121);
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 30px;
  text-transform: uppercase;
  text-align: center;
`;

export const CardsP = styled.p`
  color: #000000;
  font-family: roboto;
  font-weight: 300;
  font-size: 20px;
  letter-spacing: 1px;
  text-align: justify;
  margin-bottom: 20px;
  height: 50px;
`;

export const CardImg = styled.div`
  max-width: auto;
  max-height: auto;
  min-width: 300px;
  min-height: 400px
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-space-around;
  width: auto;
`;
