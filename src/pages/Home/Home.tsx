import styled from "styled-components";
import Header from "../../widgets/Header/Header";

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
