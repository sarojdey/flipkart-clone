import Navbar from "./navbar"
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const HomeStyled = styled(Box)`
  margin-top: 55px;
`;
const Home = () => {
  return (
    <Box>
      <HomeStyled>
        <Navbar />
      </HomeStyled>
    </Box>
  );
};

export default Home;
