import "./custombutton.css";
import { Box, Typography,Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Custombuttons = () => {
  return (
    <>
      <Box className="custombuttons">
      <Button variant="contained" className="button">Login</Button>
        <Typography className="seller">Become a Seller</Typography>
        <Typography className="seller">More</Typography>
        <Box className="cart">
          <ShoppingCartIcon />
        <Typography>Cart</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Custombuttons;
