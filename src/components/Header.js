import React from 'react'
// import {Link} from 'react-router-dom'
import './Header.css'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import image from '../images/wall-img.jpg'
import { createTheme, ThemeProvider } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body1",
                    },
                    style: {
                        fontSize: 45,
                    }
                },
                {
                    props: {
                        variant: "body2",
                    },
                    style: {
                        fontSize: 12,
                        color: "#696969"
                    }
                },
                {
                    props: {
                        variant: "body3",
                    },
                    style: {
                        fontSize: 10,
                    }
                }
            ]
        }
    }
})

export default function Header() {
  return (
    <div>
        <header>
            <h1 className='logo'>Fyll-<span>Gh</span></h1>
            <div className='links'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </header>
            <Container sx={{
                marginY: 7,
                marginBottom: "-20px",
                }}>
                <ThemeProvider theme={theme}>
                    <Typography variant="body1" sx={{
                        fontWeight: "bolder",
                        padding: "10px 20px",
                        color: "#052d64"
                    }}>
                        Fyll-<span className='blogSpan'>Gh</span> Blog
                    </Typography>
                </ThemeProvider>
            </Container>
            <Container sx={{marginY: 5}}>
                <ThemeProvider theme={theme}>
                    <Paper>
                        <Box sx={{
                            display: "flex",
                            padding: "0 5px 5px"
                        }}>
                            <img src={image} alt='' className='banner'/>
                            <Box sx={{
                                marginLeft: "30px",
                                marginTop: "50px",
                                paddingRight: "40px"
                            }}
                            >
                                <Typography variant="body1" sx={{
                                    fontWeight: "bolder",
                                    color: "#052d64",
                                    marginBottom: "-20px"
                                }}>
                                    Arts
                                </Typography>
                                <Typography variant="body1" sx={{
                                    fontWeight: "bolder",
                                    color: "#052d64",
                                    marginBottom: "-20px"
                                }}>
                                    &
                                </Typography>
                                <Typography variant="body1" sx={{
                                    fontWeight: "bolder",
                                    color: "#052d64"
                                }}>
                                    Entertainment
                                </Typography>
                                <Typography variant="body2">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </ThemeProvider>
            </Container>
    </div>
  )
}
