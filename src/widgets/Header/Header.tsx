import styled from "styled-components";
import { TypographyUI } from "@/shared/ui/Typography";
import { CurrentTime } from "@/features";
import { ButtonUI } from "@/shared/ui/Button";
import { Logo, WalletIcon } from "@/assets/icons";
import { useState } from "react";

const HeaderWrapper = styled.header`
  width: 100%;
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
  const [content, setContent] = useState("");

  const handleClick = (type: string) => {
    setContent(type);
  };

  return (
    <HeaderWrapper>
      <LogoBlock>
        <Logo />
        <TypographyUI.H4>React Fund</TypographyUI.H4>
      </LogoBlock>
      {content}
      <MenuList>
        <MenuItem>
          <CurrentTime />
        </MenuItem>
        <MenuItem>
          <ButtonUI
            onClick={() => handleClick("Connected")}
            img={<WalletIcon />}
          >
            Connect Wallet
          </ButtonUI>
          <ButtonUI
            onClick={() => handleClick("Disconnected")}
            img={<WalletIcon />}
          >
            Disconnect Wallet
          </ButtonUI>
        </MenuItem>
      </MenuList>
    </HeaderWrapper>
  );
};

export default Header;
