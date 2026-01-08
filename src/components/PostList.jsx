import React, { useState, useMemo } from 'react';
import PostCard from './PostCard';
import SkeletonGrid from './SkeletonGrid';
import { Search, RefreshCw, ChevronLeft, ChevronRight, XCircle, LayoutGrid, List } from 'lucide-react';
import { usePosts } from '../hooks/usePosts';
import { useDebounce } from '../hooks/useDebounce';
import { useStarred } from '../context/StarredContext';
import '../styles/PostList.css';

const POSTS_PER_PAGE = 9;

const PostList = () => {
    const { posts, loading, error, refresh } = usePosts();
    const { starredIds, toggleStar } = useStarred();

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUser, setSelectedUser] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

    const debouncedSearch = useDebounce(searchTerm, 300);

    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(debouncedSearch.toLowerCase());
            const matchesUser = selectedUser === 'all' || post.userId === parseInt(selectedUser);
            return matchesSearch && matchesUser;
        });
    }, [posts, debouncedSearch, selectedUser]);

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const paginatedPosts = useMemo(() => {
        const start = (currentPage - 1) * POSTS_PER_PAGE;
        return filteredPosts.slice(start, start + POSTS_PER_PAGE);
    }, [filteredPosts, currentPage]);

    const uniqueUsers = useMemo(() => {
        return [...new Set(posts.map(post => post.userId))].sort((a, b) => a - b);
    }, [posts]);

    React.useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearch, selectedUser]);

    if (error) return (
        <div className="status-container error animate-reveal">
            <XCircle size={48} color="#ef4444" />
            <h3 style={{ marginTop: '16px' }}>Network Error</h3>
            <p>{error}</p>
            <button onClick={refresh} className="cta-button" style={{ marginTop: '20px' }}>Try Again</button>
        </div>
    );

    return (
        <div className="post-list-container">
            <div className="controls-bar glass animate-reveal">
                <div className="search-wrapper">
                    <Search className="search-icon" size={18} />
                    <input
                        type="text"
                        placeholder="Search posts by title..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="filters-wrapper">
                    <select
                        value={selectedUser}
                        onChange={(e) => setSelectedUser(e.target.value)}
                        className="user-select"
                    >
                        <option value="all">All Authors</option>
                        {uniqueUsers.map(uid => (
                            <option key={uid} value={uid}>Author {uid}</option>
                        ))}
                    </select>

                    <button
                        className="refresh-btn"
                        onClick={refresh}
                        title="Refresh stories"
                        disabled={loading}
                    >
                        <RefreshCw size={18} className={loading ? 'spinning' : ''} />
                    </button>
                </div>

                <div className="layout-switcher glass">
                    <button
                        className={`layout-btn ${viewMode === 'grid' ? 'active' : ''}`}
                        onClick={() => setViewMode('grid')}
                        title="Grid View"
                    >
                        <LayoutGrid size={18} />
                    </button>
                    <button
                        className={`layout-btn ${viewMode === 'list' ? 'active' : ''}`}
                        onClick={() => setViewMode('list')}
                        title="List View"
                    >
                        <List size={18} />
                    </button>
                </div>
            </div>

            {loading && posts.length === 0 ? (
                <SkeletonGrid />
            ) : paginatedPosts.length === 0 ? (
                <div className="empty-state animate-reveal">
                    <Search size={48} strokeWidth={1} style={{ opacity: 0.3 }} />
                    <p>No stories found matching your criteria.</p>
                </div>
            ) : (
                <div className={`posts-container ${viewMode}-view`}>
                    {paginatedPosts.map((post, index) => (
                        <div key={post.id} style={{ animationDelay: `${index * 0.1}s` }}>
                            <PostCard
                                post={post}
                                isStarred={starredIds.includes(post.id)}
                                onToggleStar={toggleStar}
                            />
                        </div>
                    ))}
                </div>
            )}

            {totalPages > 1 && (
                <div className="pagination animate-reveal">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(p => p - 1)}
                        aria-label="Previous page"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <span className="page-info">
                        {currentPage} <span style={{ opacity: 0.4 }}>/</span> {totalPages}
                    </span>
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(p => p + 1)}
                        aria-label="Next page"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default PostList;
