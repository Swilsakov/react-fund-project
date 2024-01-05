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
  const [isConnectWallet, setIsConnectWallet] = useState(false);

  const handleConnect = () => {
    setIsConnectWallet(true);
  };

  const handleDisconnect = () => {
    setIsConnectWallet(false);
  };

  return (
    <HeaderWrapper>
      <LogoBlock>
        <Logo />
        <TypographyUI.H4>React Fund</TypographyUI.H4>
      </LogoBlock>
      <MenuList>
        <MenuItem>
          <CurrentTime />
        </MenuItem>

        {isConnectWallet && <>0x42dED9d615328665b04918D0eAb2D1ED57e473b1</>}

        <MenuItem>
          {!isConnectWallet && (
            <ButtonUI onClick={() => handleConnect()} img={<WalletIcon />}>
              Connect Wallet
            </ButtonUI>
          )}
          {isConnectWallet && (
            <ButtonUI onClick={() => handleDisconnect()} img={<WalletIcon />}>
              Disconnect Wallet
            </ButtonUI>
          )}
        </MenuItem>
      </MenuList>
    </HeaderWrapper>
  );
};

export default Header;
