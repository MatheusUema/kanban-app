import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  h2 {
      color: #8888a4;
      margin-bottom: 2rem;
      margin-top: 1rem;
      font-weight: 300;
  }

  @media screen and (max-width: 1024px){
    text-align: center;
  }

`;

export const Board = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1024px){
      margin: 0 auto;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      max-width: 500px;
    }
`;
