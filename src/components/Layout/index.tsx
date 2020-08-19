import React from 'react';

import { Container } from './styles';
import { LeftColumn, MiddleColumn, RightColumn } from '../../components';

const Layout: React.FC = () => {
  return (
    <Container>
      <main>
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </main>
    </Container>
  );
};

export default Layout;
