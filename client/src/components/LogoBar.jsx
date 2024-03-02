import { Stack } from "@mui/material";
import LinkComponent from "./LinkComponent";
import { Store } from "@mui/icons-material";

const LogoBar = () => {
  return (
    <Stack p="1rem 0" justifyContent="center">
      <LinkComponent
        sx={{
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          color: "black !important",
        }}
        to="/"
      >
        <Store fontSize="5rem" />
        eCOMMERCe
      </LinkComponent>
    </Stack>
  );
};
export default LogoBar;
