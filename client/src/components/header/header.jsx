import { AppBar, Toolbar, styled } from "@mui/material";
import Logo from "./logo";
import Search from "./search";
import Custombuttons from "./custombutton";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const StyledToolbar = styled(Toolbar)`
min-height: 55px !important;
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledToolbar>
          <Logo />
          <Search />
          <Custombuttons />
        </StyledToolbar>
      </StyledHeader>
    </>
  );
};

export default Header;
