import styled from "styled-components";

import { CurrentTime } from "@/features/CurrentTime/CurrentTime";
import { Logo } from "@/features/Logo/Logo";
import { Typography } from "@/shared/ui/Typography";

const HeaderWrapper = styled.header`
  height: 60px;
  padding: auto 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Menu = styled.div`
  display: flex;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoBlock>
        <Logo />
        <Typography.H4>React Fund</Typography.H4>
      </LogoBlock>
      <Menu>
        <CurrentTime />
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;
