import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 1180px) {
    > main {
      margin: 40px 30px;
      display: flex;
      justify-content: center;
    }
  }

  .left-column,
  .right-column {
    display: none;
  }

  @media (min-width: 1180px) {
    .left-column,
    .right-column {
      display: unset;
    }

    .middle-column {
      margin: 0 25px 16px;
    }
  }
`;
