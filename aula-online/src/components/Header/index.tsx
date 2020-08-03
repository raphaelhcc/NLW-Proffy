import React from 'react';
import { Container, ArrowBack } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <ArrowBack />
        Logo
      </div>
    </Container>
  );
}

export default Header;
