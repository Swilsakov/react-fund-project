import { type TabType } from "@/pages/Home/type";
import { ButtonUI } from "@/shared/ui/Button";
import { ButtonGroup } from "@mui/material";

interface TabsSectionProps {
  handleChangeTab: (tab: TabType) => void;
  currentTab: string;
}

export const TabsSection = ({
  handleChangeTab,
  currentTab,
}: TabsSectionProps) => {
  return (
    <>
      <ButtonGroup>
        <ButtonUI
          onClick={() => handleChangeTab("main")}
          isActive={currentTab === "main"}
        >
          Main
        </ButtonUI>
        <ButtonUI
          onClick={() => handleChangeTab("feedback")}
          isActive={currentTab === "feedback"}
        >
          Feedback
        </ButtonUI>
        <ButtonUI
          onClick={() => handleChangeTab("wallet")}
          isActive={currentTab === "wallet"}
        >
          Wallet
        </ButtonUI>
        <ButtonUI
          onClick={() => handleChangeTab("effect")}
          isActive={currentTab === "effect"}
        >
          Effect
        </ButtonUI>
      </ButtonGroup>
    </>
  );
};
