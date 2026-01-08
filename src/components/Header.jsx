import React from 'react';
import { Moon, Sun, Search, RefreshCw, LayoutGrid, List, Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useStarred } from '../hooks/useStarred';
import '../styles/Header.css';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { starredIds } = useStarred();

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
                    <div className="reading-list-badge glass">
                        <Star size={14} fill="#fbbf24" stroke="#fbbf24" />
                        <span className="badge-text">{starredIds.length} Stories in Hub</span>
                    </div>
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
