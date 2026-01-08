import React from 'react';
import './SkeletonGrid.css';

const SkeletonCard = () => (
    <div className="skeleton-card glass animate-pulse">
        <div className="skeleton-header">
            <div className="skeleton-id"></div>
            <div className="skeleton-star"></div>
        </div>
        <div className="skeleton-title"></div>
        <div className="skeleton-title short"></div>
        <div className="skeleton-body"></div>
        <div className="skeleton-body"></div>
        <div className="skeleton-body short"></div>
        <div className="skeleton-footer">
            <div className="skeleton-badge"></div>
            <div className="skeleton-link"></div>
        </div>
    </div>
);

const SkeletonGrid = () => {
    return (
        <div className="posts-grid">
            {[...Array(6)].map((_, i) => (
                <SkeletonCard key={i} />
            ))}
        </div>
    );
};

export default SkeletonGrid;
