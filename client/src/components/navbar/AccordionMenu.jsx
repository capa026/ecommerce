import { useState } from "react";
import { Box, Divider, styled } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkComponent from "../LinkComponent";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: theme.palette.primary.light,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const Summary = styled(AccordionSummary)(({ theme }) => ({
  fontSize: "0.8rem",
  padding: "5px",
  minHeight: "0px",
  background: theme.palette.primary.light,
  color: "white",

  "& .MuiAccordionSummary-content": {
    margin: 0,
  },
}));

const Details = styled(AccordionDetails)(({ theme }) => ({
  minHeight: "0",
  color: "white",
  padding: "0",
}));

const DetailsComponent = ({ links }) => {
  return (
    <Details>
      {links.map((item, i) => (
        <Box key={item}>
          <LinkComponent
            to={"/" + item.toLowerCase()}
            sx={{
              padding: "0.5rem !important",
              paddingLeft: "15px !important",
              borderRadius: "0 !important",
              background: "rgba(0,0,0,0.5)",
            }}
          >
            {item}
          </LinkComponent>
          {i < links.length - 1 && (
            <Divider sx={{ borderColor: "rgba(255,255,255,0.5)" }} />
          )}
        </Box>
      ))}
    </Details>
  );
};

export default function AccordionUsage() {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box sx={{ width: "200px", boxShadow: "0 0 10px 1px rgba(0,0,0,0.5)" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <Summary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Categorias
        </Summary>
        <DetailsComponent links={["Galletas", "Tortas", "Donas", "Frituras"]} />
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <Summary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Destacados
        </Summary>
        <DetailsComponent links={["Not ready yet...", "Not Ready yet..."]} />
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <Summary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Ofertas
        </Summary>
        <DetailsComponent links={["Diarias"]} />
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <Summary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          Tiendas
        </Summary>
        <DetailsComponent links={["Postres", "Comida Rapida", "Almuerzos"]} />
      </Accordion>
    </Box>
  );
}
