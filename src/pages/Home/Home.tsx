import TextSection from "@/features/TextSection/TextSection";
import Header from "@/widgets/Header/Header";
import styled from "styled-components";

const StyledHomePageMain = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Home = () => {
  return (
    <>
      <Header />
      <StyledHomePageMain>
        <TextSection />
      </StyledHomePageMain>
    </>
  );
};
