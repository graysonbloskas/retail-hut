import styled from "styled-components";

export const ProductCard = styled.div`
  background: white;
  flex-direction: column;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 0 20px rgb(228, 228, 228);
`;

export const CardImg = styled.div`
  min-width: 300px;
  min-height: 400px;
  max-width: auto;
  max-height: auto;
`;

export const CardTitle = styled.h2`
  font-family: arvo;
  color: rgb(52, 95, 121);
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 30px;
  text-align: center;
`;

export const CardsPrice = styled.p`
  // color: black;
  // font-family: Arial;
  // font-size: 40px;
  // text-align: center;
`;


