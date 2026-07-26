"use client";
import type { ReactNode } from 'react';
import styled from 'styled-components';

import Nav from './nav';
import Social from './social';
import Email from './email';

interface LayoutProps {
  children: ReactNode;
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledContent>
      <Nav />
      <Social />
      <Email />

      <StyledMain id="content">{children}</StyledMain>
    </StyledContent>
  );
};


export default Layout;