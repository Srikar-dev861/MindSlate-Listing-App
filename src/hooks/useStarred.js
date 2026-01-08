import { useState, useEffect } from 'react';

export const useStarred = () => {
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

    return { starredIds, toggleStar };
};
