import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material';
import image from '../images/3d-logo.jpg'

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body1",
                    },
                    style: {
                        fontSize: 16,
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

export default function BlogCards({card}) {
    // console.log(card)
  return (
    <Grid item xs={3} className="blogGrid">
        <ThemeProvider theme={theme}>
            <Paper elevation={7} sx={{
                height: "320px",
            }}>
                <img
                src={image}
                alt=''
                className='img'
                />
                <Box sx={{
                    padding: "5px"
                }}>
                    <Box>
                        <Typography variant='body2'>
                            {card.hashTag}
                        </Typography>
                        <Typography variant='subtitle1' component="h2" sx={{
                            fontWeight: "bold",

                        }}>
                            {card.cardTitle}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='body2'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </ThemeProvider>
    </Grid>
  )
}
