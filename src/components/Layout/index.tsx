import React from 'react';

import { Container } from './styles';
import { LeftColumn, MiddleColumn, RightColumn } from '../../components';
import MobileHeader from '../MobileHeader';

const Layout: React.FC = () => {
  return (
    <Container>
      <MobileHeader />
      <main>
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </main>
    </Container>
  );
};

export default Layout;
