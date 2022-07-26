import styled from 'styled-components';

export const Container = styled.div`
  background: #e0ebff ;
  border-radius: 10px;
  min-width: 300px;
  max-width: 300px;
  padding-bottom: 2rem;
  box-shadow: 10px 10px 26px -3px rgba(0,0,0,0.2);
  &:nth-child(1) {
    border-top: 3px solid #fea25d;
  }
  &:nth-child(2) {
    border-top: 3px solid #8ea3fb;
  }
  &:nth-child(3) {
    border-top: 3px solid #7bd4ad;
  }

  h3 {
      color: #8888a4;
      margin-bottom: 2rem;
      margin-top: 1rem;
      margin-left: 1rem;
      font-weight: 500;
  }

  @media screen and (max-width: 1024px){
      & + & {
        margin-left: 0;
        margin-top: 3rem;
      }
    }
`;


export const CardsContainer = styled.div`
    margin: 0.5rem;

`;