import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .pokemon-card {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: calc(50% - 4px);

    padding: 4px;
    margin: 4px 0;

    color: #ffffff;

    text-transform: capitalize;

    border-radius: 8px;
  }

  .pokemon-card .content {
    display: flex;
    flex-direction: column;

    width: 100%;
  }

  .pokemon-card .content .id {
    position: absolute;

    top: 4px;
    right: 4px;

    opacity: 0.45;
  }

  .pokemon-card .content .types {
    font-size: 0.8em;
    margin: 2px;
    padding: 2px;
    text-align: center;
    border-radius: 10px;
    backdrop-filter: brightness(85%);
  }

  .pokemon-card.grass {
    background-color: #48d0b0;
  }

  .pokemon-card.fire {
    background-color: #fb6c6c;
  }

  .pokemon-card.water {
    background-color: #77bdfe;
  }

  .pokemon-card.normal {
    background-color: #cd835a;
  }

  .pokemon-card.bug {
    background-color: #6a8b5a;
  }

  @media (min-width: 768px) {
    .pokemon-card {
      max-width: 13%;

      margin: 8px;
    }
  }
`;
