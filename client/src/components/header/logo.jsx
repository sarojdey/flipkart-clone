import { Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
const logoURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
const subURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

const StyledLogoBox = styled(Box)`
  margin-left: 12%;
  line-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const StyledLogo = styled.img`
  width: 75px;
`;
const StyledSubHeadingLogo = styled(Box)`
  display: flex;
  justify-content: center;
  text-align: center;
`;
const StyledSubheading = styled(Typography)`
  font-size: 10px !important;
  font-style: italic;
`;
const StyledSublogo = styled.img`
  width: 10px;
  height: 10px;
  margin-left: 3px;
  margin-top: 3px;
`;

const Logo = () => {
  return (
    <>
      <StyledLogoBox>
        <StyledLogo src={logoURL} alt="logo" />
        <StyledSubHeadingLogo>
          <StyledSubheading>
            Explore{" "}
            <Box component="span" style={{ color: "#ffe500" }}>
              Plus
            </Box>
          </StyledSubheading>
          <StyledSublogo src={subURL} alt="sub-logo" />
        </StyledSubHeadingLogo>
      </StyledLogoBox>
    </>
  );
};

export default Logo;
