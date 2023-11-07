import { InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";

const StyledSearchbar = styled(Box)`
  background-color: white;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  padding-left: 15px;
  display: flex;
  justify-content: space-between;
  font-family: unset;
`;

const StyledInput = styled(InputBase)`
  width: 100%;
`;
const StyledSearchIcon = styled(Box)`
  display: flex;
  color: blue;
  padding-top: 5px;
  padding-right: 5px;
`;

const Search = () => {
  return (
    <>
      <StyledSearchbar>
        <StyledInput placeholder="Search for pruducts, brands, and more"></StyledInput>
        <StyledSearchIcon>
          <SearchIcon />
        </StyledSearchIcon>
      </StyledSearchbar>
    </>
  );
};

export default Search;
