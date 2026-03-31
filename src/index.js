import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';

import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";
import HomePage from "./Landing_page/Home/HomePage";
import AboutPage from "./Landing_page/About/AboutPage";
import HighlightsPage from "./Landing_page/Highlights/HighlightsPage";
import BrochurePage from "./Landing_page/Brochure/BrochurePage";
import CommitteePage from "./Landing_page/Committee/CommitteePage";
import RegistrationPage from "./Landing_page/Registration/RegistrationPage";
import ContactUsPage from "./Landing_page/contactUs/ContactUsPage";
import CallForPapers from './Landing_page/callForPapers/CallForPapers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/iqicsa2027">
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/brochure' element={<BrochurePage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/highlights' element={<HighlightsPage />}></Route>
      <Route path='/callForPapers' element={<CallForPapers />}></Route>
      <Route path='/committee' element={<CommitteePage />}></Route>
      <Route path='/registration' element={<RegistrationPage />}></Route>
      <Route path='/contactUs' element={<ContactUsPage />}></Route> 
    </Routes>
    
    <Footer />
  </BrowserRouter>
   
);
