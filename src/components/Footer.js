import React from 'react'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material';
import './Footer.css'

export default function Footer() {
  return (
    <div>
        <Container sx={{
            width: "100%"
        }}>
            <footer>
                <div className="ft-wrapper">
                    <div className="ft-brand">
                        <h2>Fyll-<span class="ft-btm">Gh</span></h2>
                        <p><i>Best among equals...</i></p>
                        <div className="nav-socials">
                            <a href="" className=""><i class="fa-brands fa-facebook face" title="Facebook Link"></i></a>
                            <a href="" className=""><i class="fa-brands fa-youtube you" title="Youtube Link"></i></a>
                            <a href="" className=""><i class="fa-brands fa-instagram insta" title="Instagram Link"></i></a>
                            <a href="" className=""><i class="fa-brands fa-twitter twit" title="Twitter Link"></i></a>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="ft-info">
                        <p>For a better graphic works, printing and video editing, <br/> stay connected with us to have the best experience.</p>
                        <input type="email" name="email" id="email" placeholder="Enter email here..." />
                        <button id='submit'>Send</button>
                    </div>
                    <div className="bottom-nav-pages">
                        <ul>
                            <li><a href="index.html" className=""><i className="fa-solid fa-house-chimney" title="Go Home"></i></a></li>
                            <li><a href="about.html" className=""><i className="fa-solid fa-briefcase" title="About Page"></i></a></li>
                            <li><a href="contact.html" className=""><i className="fa-solid fa-id-card-clip" title="Contact Us"></i></a></li>
                            <li><a href="blog.html" className=""><i className="fa-solid fa-blog" title="Blog Page"></i></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            
                <div className="ft-bottom">
            <p>Copyright &copy;2022 Fyll-<span>Gh</span></p>
                </div>
        </Container>
    </div>
  )
}
