import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  padding: 20px;
  background: #d93025;
  margin-top: auto;

  div {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    font-size: 20px;
    margin-bottom: 10px;
    width: fit-content;
    display: flex;
    align-items: center;

    &.alinharTopo {
      align-items: flex-start;
    }

    svg {
      margin-right: 5px;
    }

    &:hover {
      text-decoration: underline;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    a {
      font-size: 16px;
    }
  }
`;
