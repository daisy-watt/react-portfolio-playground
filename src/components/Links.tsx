import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { fontSize } from '@mui/system';

export default function BasicList() {
  return (
    <Box sx={{ width: '100%', maxWidth: '100%', bgcolor: "#f5f2e3"}}>
      <nav aria-label="main mailbox folders">
        <div className="links">
            <Divider />
                <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={ () => {window.open("https://github.com/daisy-watt", '_blank').focus();}}>
                    <ListItemText primary=" G i t H u b " />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton onClick={ () => {window.open("https://www.linkedin.com/in/daisy-watt-a76558198/", '_blank').focus();}}>
                    <ListItemText primary=" L i n k e d I n " />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton onClick={ () => {window.open("https://www.instagram.com/", '_blank').focus();}}>
                    <ListItemText primary=" I n s t a g r a m " />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton onClick={ () => {window.open("./DaisyWatt_Melbourne.pdf");}}>
                    <ListItemText primary=" C V " />
                    </ListItemButton>
                </ListItem>
                </List>
        </div>
      </nav>
    </Box>
  );
}
