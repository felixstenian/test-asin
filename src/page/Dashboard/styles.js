import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  a {
    text-decoration: none;
  }
  .container {
    min-height: 100vh;
    padding: 8px;
  }

  .container h1 {
    color: #303943;

    margin: 8px;
  }

  .pokemon-card-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    .pokemon-card-wrapper {
      justify-content: start;
    }
  }
`;

export const Button = styled.button`
  width: 20%;
  height: 80px;
  border-radius: 5px;
  background: #333;
`;
