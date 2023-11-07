import { Box, Typography } from "@mui/material";
import navData from "../../constants/data";
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  margin: 55px 130px 0px;
`;

const StyledContent = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;
const StyledText = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const StyledImg = { width: "64px" };

const Navbar = () => {
  return (
    <>
      <StyledBox>
        {navData.map((data) => (
          <StyledContent>
            <img src={data.url} style={StyledImg} alt="" />
            <StyledText>{data.text}</StyledText>
          </StyledContent>
        ))}
      </StyledBox>
    </>
  );
};

export default Navbar;
