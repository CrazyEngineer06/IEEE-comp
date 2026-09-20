import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";

import HomePage from "./Landing_page/Home/HomePage";
import AboutPage from "./Landing_page/About/AboutPage";
import HighlightsPage from "./Landing_page/Highlights/HighlightsPage";
import BrochurePage from "./Landing_page/Brochure/BrochurePage";
import CommitteePage from "./Landing_page/Committee/CommitteePage";
import ContactUsPage from "./Landing_page/contactUs/ContactUsPage";
import IqicsaPage from './Landing_page/IQICSA/IqicsaPage';
import AboutCMT from './Landing_page/callForPapers/AboutCMT';
import AuthorPage from './Landing_page/Author/AuthorPage';
import AdvisoryBoard from './Landing_page/Committee/AdvisoryBoard';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>

    <Navbar />

    <ScrollToTop />

    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/brochure" element={<BrochurePage />} />

      <Route path="/about" element={<AboutPage />} />

      <Route path="/highlights" element={<HighlightsPage />} />

      <Route path="/iqicsa" element={<IqicsaPage />} />

      {/* About CMT */}
      <Route path="/about-cmt" element={<AboutCMT />} />

      {/* Old URL - optional */}
      <Route path="/aboutCMT" element={<AboutCMT />} />

      {/* Old standalone paths */}
      <Route
        path="/callForPapers"
        element={<Navigate to="/iqicsa#call-for-paper" replace />}
      />

      <Route
        path="/conferenceTracks"
        element={<Navigate to="/iqicsa#conference-tracks" replace />}
      />

      <Route
        path="/importantDates"
        element={<Navigate to="/iqicsa#important-dates" replace />}
      />

      <Route path="/author" element={<AuthorPage />} />

      <Route
        path="/authorGuidelines"
        element={<Navigate to="/author/guidelines" replace />}
      />

      <Route path="/committee" element={<CommitteePage />} />

      <Route
        path="/advisoryBoard"
        element={<AdvisoryBoard />}
      />

      <Route
        path="/registration"
        element={<Navigate to="/author/registration" replace />}
      />

      <Route
        path="/contactUs"
        element={<ContactUsPage />}
      />

    </Routes>

    <Footer />

  </HashRouter>
);
