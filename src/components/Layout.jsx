import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import { useTheme } from '../context/ThemeContext';
import '../styles/Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="app-container">
            <Header />
            <main className="main-content container">
                <HeroSection />
                {children}
            </main>
            <footer className="footer container">
                <p>&copy; 2026 MindSlate. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
