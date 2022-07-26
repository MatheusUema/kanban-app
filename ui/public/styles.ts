import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  padding-top: 1rem;
  width: 80%;
  padding: 2rem 0;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    padding: 2rem 1rem;
    width: auto;
  }
`;
