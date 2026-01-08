import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import '../styles/PostCard.css';

const PostCard = ({ post, isStarred, onToggleStar }) => {
    return (
        <div className="post-card glass glass-hover animate-reveal">
            <div className="post-card-header">
                <span className="post-id">CASE #{post.id}</span>
                <button
                    className={`star-button ${isStarred ? 'starred' : ''}`}
                    onClick={() => onToggleStar(post.id)}
                    aria-label={isStarred ? "Remove from favorites" : "Add to favorites"}
                >
                    <Star size={18} fill={isStarred ? "currentColor" : "none"} />
                </button>
            </div>

            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body}</p>

            <div className="post-footer">
                <div className="user-badge">
                    <div className="user-avatar">
                        {post.userId}
                    </div>
                    <span>Writer {post.userId}</span>
                </div>
                <div className="read-more">
                    Read Post <ChevronRight size={14} />
                </div>
            </div>
        </div>
    );
};

export default React.memo(PostCard);
