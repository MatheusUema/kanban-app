import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #97a9fb;
  padding: 1rem 0rem;
  padding-left: 10%;
  height: 50px;
  display: flex;
  align-items: center;

  h1 {
      color: white;
      margin-bottom: 0.5rem;
      font-weight: 300;
  }

  @media screen and (max-width: 1024px){
    justify-content: center;
    padding: 1rem 0;
  }
`;
