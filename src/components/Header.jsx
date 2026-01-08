import React from 'react';
import { Moon, Sun, Search, RefreshCw, LayoutGrid, List } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Header.css';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header glass">
            <div className="header-inner container">
                <div className="logo-group">
                    <div className="logo-icon-wrapper">
                        <span className="logo-icon">M</span>
                    </div>
                    <div className="logo-text">
                        <span className="logo-main">MindSlate</span>
                        <span className="logo-tagline">Premium Insights</span>
                    </div>
                </div>

                <div className="header-actions">
                    <button
                        className="theme-button"
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                        title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                    >
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                    <button className="cta-button">Join Now</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
