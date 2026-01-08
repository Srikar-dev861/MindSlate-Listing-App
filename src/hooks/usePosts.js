import { useState, useEffect, useCallback, useRef } from 'react';

export const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const lastFetchTime = useRef(0);

    const fetchPosts = useCallback(async (isRefresh = false) => {
        // Throttle refresh: wait at least 2 seconds between manual refreshes
        if (isRefresh) {
            const now = Date.now();
            if (now - lastFetchTime.current < 2000) {
                console.log('Refresh throttled');
                return;
            }
            lastFetchTime.current = now;
        }

        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) throw new Error('Failed to fetch posts');
            const data = await response.json();
            setPosts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return { posts, loading, error, refresh: () => fetchPosts(true) };
};
