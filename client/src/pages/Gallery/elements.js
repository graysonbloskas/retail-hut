import styled from 'styled-components';


export const CardContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 2fr 2fr;
  }
`;