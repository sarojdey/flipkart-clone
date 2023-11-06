import { Typography, Box } from "@mui/material";
import "./logo.css";
const logoURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
const subURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

const Logo = () => {
  return (
    <>
      <Box className="logo_box">
        <img className="logo" src={logoURL} alt="logo" />
        <Box className="sub_heading_logo">
          <Typography className="subheading">
            Explore{" "}
            <Box component="span" style={{ color: "#ffe500" }}>
              Plus
            </Box>
          </Typography>
          <img className="sub_logo" src={subURL} alt="sub-logo" />
        </Box>
      </Box>
    </>
  );
};

export default Logo;
