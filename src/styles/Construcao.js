import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 20px;

  p,
  strong {
    font-size: 20px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 50px;
  }

  strong {
    margin: 20px 0 5px;
  }
`;
