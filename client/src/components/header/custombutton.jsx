import { Box, Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";

const StyledCustomButtons = styled(Box)`
  width: 38%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
`;
const StyledButton = styled(Button)`
  text-transform: none;
  border-radius: 2px;
  padding: 10px;
  background-color: white;
  box-shadow: none !important;
  color: blue;
  height: 30px;
  width: 100px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;

  &:hover {
    background-color: unset !important;
    color: white !important;
  }
`;
const StyledCart = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Custombuttons = () => {
  return (
    <>
      <StyledCustomButtons className="custombuttons">
        <StyledButton variant="contained" className="button">
          Login
        </StyledButton>
        <Typography>Become a Seller</Typography>
        <Typography>More</Typography>
        <StyledCart className="cart">
          <ShoppingCartIcon />
          <Typography>Cart</Typography>
        </StyledCart>
      </StyledCustomButtons>
    </>
  );
};

export default Custombuttons;
