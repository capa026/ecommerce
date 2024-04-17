import { useState } from "react";
import { styled } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: "transparent",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const Summary = styled(AccordionSummary)({
  background:
    "linear-gradient(to right bottom, #23003b, #25063b, #270c3b, #29123b, #2b173b, #29234d, #203060, #003e71, #005b8d, #00758b, #008c69, #069e2d)",
  color: "white",
});
const Details = styled(AccordionDetails)({
  background:
    "linear-gradient(to right bottom, #23003b60, #25063b60, #270c3b60, #29123b60, #2b173b60, #29234d60, #20306060, #003e7160, #005b8d60, #00758b60, #008c6960, #069e2d60)",
  backdropFilter: "blur(8px)",
  color: "white",
});

export default function AccordionUsage() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div style={{ width: "270px" }}>
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
        <Details>LINKS</Details>
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
          Ofertas
        </Summary>
        <Details>LINKS</Details>
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
          Destacados
        </Summary>
        <Details>LINKS</Details>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <Summary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Tiendas
        </Summary>
        <Details>LINKS</Details>
      </Accordion>
    </div>
  );
}
