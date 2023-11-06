import { InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./search.css";

const Search = () => {
  return (
    <>
      <Box className="searchbar">
        <InputBase className="input" placeholder="Search for pruducts, brands, and more"></InputBase>
        <Box className="search_icon">
          <SearchIcon />
        </Box>
      </Box>
    </>
  );
};

export default Search;
