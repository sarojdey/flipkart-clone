import { AppBar, Toolbar, styled } from "@mui/material";
import Logo from "./logo/logo";
import Search from "./search/search";
import "./header.css";
import Custombuttons from "./custombutton/custombutton";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Toolbar className="toolbar">
          <Logo />
          <Search />
          <Custombuttons />
        </Toolbar>
      </StyledHeader>
    </>
  );
};

export default Header;
