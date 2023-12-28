import styled from "styled-components";
import { Typography } from "@/shared/ui/Typography";
import { CurrentTime } from "@/features";
import { ButtonUI } from "@/shared/ui/Button/Button";
import { Logo, WalletIcon } from "@/assets/icons";
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

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const MenuItem = styled.li`
  height: 100%;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoBlock>
        <Logo />
        <Typography.H4>React Fund</Typography.H4>
      </LogoBlock>
      <MenuList>
        <MenuItem>
          <ButtonUI img={<WalletIcon />}>Connect Wallet</ButtonUI>
        </MenuItem>
        <MenuItem>
          <CurrentTime />
        </MenuItem>
      </MenuList>
    </HeaderWrapper>
  );
};

export default Header;
