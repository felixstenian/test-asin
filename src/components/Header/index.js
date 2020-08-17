import React from 'react';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Header({ quantity }) {
  return (
    <Container>
      <header className="header">
        <Link to="/">
          <FiHome size={20} />
        </Link>
        Total of pokemon: {quantity}
      </header>
    </Container>
  );
}

export default Header;
