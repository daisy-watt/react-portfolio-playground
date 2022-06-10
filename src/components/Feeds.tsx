import React from "react";
import Box from "@mui/material/Box"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
    return (
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Portfolio Project - Self </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                here will be a load of text about the portfolio project..... lol
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Terminal Application - Weavemate_94</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                heres again where there will be a witty articulate description of the weave encryption terminal app written in ruby
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography> Marketplace Application - Plate to Plate </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                heres again another place where there will be a witty articulate description of the peer to peer marketplace built in ruby on rails
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>React - TBC</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                heres again where there will be a witty articulate description of the weave encryption terminal app written in ruby
            </Typography>
          </AccordionDetails>
        </Accordion>


      </div>
    );
  }