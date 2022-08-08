import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { HashRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='about' element={<About />} />
                <Route path='services' element={<Services />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
);


{/* <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
</BrowserRouter> */}