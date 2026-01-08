import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section animate-reveal">
            <div className="hero-content">
                <h1 className="hero-title">
                    Discover <span className="gradient-text">Exceptional</span> Stories
                </h1>
                <p className="hero-subtitle">
                    Explore high-quality insights and narratives from the MindSlate community.
                    A premium experience for curious minds.
                </p>
                <div className="hero-stats glass">
                    <div className="stat-item">
                        <span className="stat-value">100+</span>
                        <span className="stat-label">Posts</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-value">Active</span>
                        <span className="stat-label">Community</span>
                    </div>
                </div>
            </div>
            <div className="hero-visual">
                <div className="glow-sphere"></div>
            </div>
        </section>
    );
};

export default HeroSection;
