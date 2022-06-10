import React from 'react';
import ReactDOM from 'react-dom';
import Feeds from "./Feeds";
import Header from "./Header"
import ScribbleBox from "./ScribbleBox"
import Pattern from "./Pattern"
import Links from "./Links"
import Stack from "@mui/material/Stack"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#212121',
            },
            secondary: {
                main: '#f5f2e3',
            },
        },
        typography: {
            fontFamily: 'Synt',
            fontSize:20,
            fontWeightBold:700
        },

    });

console.log(theme)

export default function App(){
    return (
        <ThemeProvider theme={theme}>
            <Stack direction="column" bgcolor={'#f5f2e3'}>
                <Pattern width={window.innerWidth} height={10}></Pattern>
                    <Header></Header>
                        <ScribbleBox width={window.innerWidth} height={200}></ScribbleBox>
                    <Links></Links>
                    {/* <ScribbleBox width={window.innerWidth} height={400}></ScribbleBox> */}
                {/* <Feeds></Feeds> */}
                <Pattern width={window.innerWidth} height={window.innerHeight}></Pattern>
            </Stack>
        </ThemeProvider>
    )
}
