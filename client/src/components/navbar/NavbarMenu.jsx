import { Box, Divider, Stack } from "@mui/material";
import DropdownMenu from "../DropdownMenu";
import LinkComponent from "../LinkComponent";
import { locateColor } from "../../Theme";

const ItemComponent = ({ link, text, content }) => {
  return (
    <>
      {!link ? (
        <DropdownMenu text={text}>
          <Stack
            sx={{
              background: locateColor("primary.light"),
              color: "white",
              width: "150px",
              boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.8)",
            }}
          >
            {content.map((item, i) => (
              <Box key={item}>
                <LinkComponent
                  to={"/" + item.toLowerCase()}
                  sx={{
                    padding: "0.5rem !important",
                    borderRadius: "0 !important",
                  }}
                >
                  {item}
                </LinkComponent>
                {i < content.length - 1 && (
                  <Divider sx={{ borderColor: "rgba(255,255,255,0.5)" }} />
                )}
              </Box>
            ))}
          </Stack>
        </DropdownMenu>
      ) : (
        <LinkComponent to="/stores">{text}</LinkComponent>
      )}
    </>
  );
};
const NavbarMenu = ({ sx }) => {
  return (
    <Stack direction="row" justifyContent="center" gap="1rem" sx={sx}>
      <ItemComponent
        text="Categorias "
        content={["Galletas", "Tortas", "Donas", "Frituras"]}
      />
      <ItemComponent
        text="Destacados"
        content={["Not ready yet...", "Not Ready yet..."]}
      />
      <ItemComponent text="Ofertas " content={["Diarias"]} />
      <ItemComponent
        text="Tiendas "
        content={["Postres", "Comida Rapida", "Almuerzos"]}
      />
    </Stack>
  );
};
export default NavbarMenu;
