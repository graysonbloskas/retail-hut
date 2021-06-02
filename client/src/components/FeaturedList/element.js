import styled from 'styled-components';


export const CardContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding-bottom: 50px;
  padding-top: 50px;
  padding-left: 8%;
  padding-right: 8%;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 40px;
  /* padding: 0 50px; */

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 875px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;