import {
  FeedbackSection,
  TabsSection,
  TextSection,
  WalletSection,
  EffectSection,
} from "@/features";
import Header from "@/widgets/Header/Header";
import { useState } from "react";
import styled from "styled-components";
import { type TabType } from "./type";

const StyledHomePageMain = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Home = () => {
  const [tab, setTab] = useState<TabType>("main");

  return (
    <>
      <Header />

      <StyledHomePageMain>
        <TabsSection
          handleChangeTab={(currentTab) => setTab(currentTab)}
          currentTab={tab}
        />

        {tab === "main" && <TextSection />}
        {tab === "feedback" && <FeedbackSection />}
        {tab === "wallet" && <WalletSection />}
        {tab === "effect" && <EffectSection />}
      </StyledHomePageMain>
    </>
  );
};
