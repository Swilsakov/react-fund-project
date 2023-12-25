import { type ReactNode } from "react";
import styled from "styled-components";

const RootLayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
`;

const RootLayoutContent = styled.div`
  display: flex;
  flex-direction: column;
`;

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <RootLayoutContainer>
      <RootLayoutContent>{children}</RootLayoutContent>
    </RootLayoutContainer>
  );
};

export default RootLayout;
