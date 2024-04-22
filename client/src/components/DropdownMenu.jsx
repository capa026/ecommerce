import { Children, cloneElement, useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import {
  Menu as IconMenu,
  KeyboardArrowDown,
  ShoppingCart,
} from "@mui/icons-material";
import { Badge, Box, styled } from "@mui/material";
import LinkComponent from "./LinkComponent";

const Item = styled(Box)({
  display: "flex",
  cursor: "pointer",
  userSelect: "none",
  transition: ".3s",
  padding: "0.3rem",
  borderRadius: "8px",
  fontSize: "0.7rem",
  justifyContent: "center",
  alignItems: "center",

  "&:hover": {
    backgroundColor: "rgba(255,255,255, 0.1)",
  },
});

export default function DropdownMenu({
  children,
  isMenu,
  text,
  wBadge,
  currentCart,
  placement,
}) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const closeMenu = () => setOpen(false);

  const modifiedChildren = Children.map(children, (child) => {
    // Clone the child element and pass additional props
    return cloneElement(child, { closeMenu });
  });

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  addEventListener("resize", () => {
    closeMenu();
  });

  return (
    <div>
      {isMenu ? (
        <Box
          display={{ xs: "flex", md: "none" }}
          border="2px solid white"
          borderRadius="4px"
          alignItems="center"
          p="0.5rem"
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <IconMenu fontSize="small" />
        </Box>
      ) : wBadge ? (
        <Badge
          badgeContent={currentCart?.products?.length || 0}
          color="primary"
        >
          <Item
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <ShoppingCart fontSize="small" /> {text}
          </Item>
        </Badge>
      ) : (
        <Item
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {text}
          <KeyboardArrowDown fontSize="small" />
        </Item>
      )}

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement={placement || "bottom-start"}
        transition
        disablePortal
        sx={{ zIndex: 1000 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            // style={{
            //   transformOrigin:
            //     placement === "bottom-start" ? "left top" : "left bottom",
            // }}
          >
            <Paper sx={{ background: "none" }} elevation={0}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {modifiedChildren}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
