import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  flex: 1;

  img {
    height: 100%;
    max-height: 150px;
    margin: 20px 0;
  }

  p,
  strong {
    font-size: 20px;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 35px;
  }

  strong {
    margin: 20px 0 5px;

    &:last-of-type {
      margin-top: auto;
    }
  }
`;
