import { Box, InputBase, Stack, TextField } from "@mui/material";

const SearchBar = () => {
  return (
    <Stack justifyContent="center">
      <InputBase placeholder="Search..." sx={{ bgcolor: "white" }} />
    </Stack>
  );
};
export default SearchBar;
