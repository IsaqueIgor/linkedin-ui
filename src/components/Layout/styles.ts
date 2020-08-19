import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 1180px) {
    > main {
      margin: 0 30px;
      display: flex;
      justify-content: center;
    }
  }

  .left-column,
  .right-column {
    display: none;
  }
`;
