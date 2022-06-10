import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 100, bgcolor: "#f5f2e3" }}>
      <CardContent>
        <Typography variant="h4" component="div" bgcolor={"#f5f2e3"}>
         d a i s y . w a t t 
        </Typography>
        <Typography sx={{ fontSize: 15}} color="text.secondary">
        c l o t h + c o d e
        </Typography>
      </CardContent>
    </Card>
  );
}