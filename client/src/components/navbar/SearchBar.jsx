import { Directions, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
  TextField,
} from "@mui/material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "0",
        display: "flex",
        alignItems: "center",
        width: "100%",
        backgroundColor: "transparent",
        border: "2px solid white",
      }}
      elevation={0}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          backgroundColor: "transparent",
          color: "white",
          fontSize: ".8rem",
        }}
        placeholder="Search Products..."
        inputProps={{ "aria-label": "search products" }}
      />
      <Divider
        sx={{ height: 28, m: 0.5, borderColor: "white" }}
        orientation="vertical"
      />
      <IconButton
        type="button"
        sx={{ p: "5px" }}
        aria-label="search"
        fontSize="small"
      >
        <Search sx={{ color: "white" }} />
      </IconButton>
    </Paper>
  );
};
export default SearchBar;
