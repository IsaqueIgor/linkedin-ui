import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import {
  LeftColumn,
  MiddleColumn,
  RightColumn,
  Adbanner,
  Header,
} from '../../components';

const Layout: React.FC = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Container>
      <Header />

      <span>{!isLoading && <Adbanner />}</span>

      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn />
        <RightColumn />
      </main>
    </Container>
  );
};

export default Layout;
