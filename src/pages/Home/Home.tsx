import Header from "@/widgets/Header/Header";
import styled from "styled-components";

const HomePage = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Home = () => {
  return (
    <HomePage>
      <Header />
      Home
    </HomePage>
  );
};
