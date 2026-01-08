import React, { createContext, useContext, useState, useEffect } from 'react';

const StarredContext = createContext();

export const StarredProvider = ({ children }) => {
    const [starredIds, setStarredIds] = useState(() => {
        const saved = localStorage.getItem('starredPosts');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('starredPosts', JSON.stringify(starredIds));
    }, [starredIds]);

    const toggleStar = (id) => {
        setStarredIds(prev =>
            prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
        );
    };

    return (
        <StarredContext.Provider value={{ starredIds, toggleStar }}>
            {children}
        </StarredContext.Provider>
    );
};

export const useStarred = () => useContext(StarredContext);
