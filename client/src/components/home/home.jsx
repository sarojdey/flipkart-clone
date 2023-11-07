import Navbar from "./navbar";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import Banner from "./banner";

const HomeStyled = styled(Box)`
  margin-top: 55px;
`;

const StyledBox = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
  
`;
const Home = () => {
  return (
    <>
      <HomeStyled>
        <Navbar />
        <StyledBox>
          <Banner />
        </StyledBox>
      </HomeStyled>
    </>
  );
};

export default Home;
