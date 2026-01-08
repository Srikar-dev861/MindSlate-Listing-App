import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { StarredProvider } from './context/StarredContext';
import Layout from './components/Layout';
import PostList from './components/PostList';
import './index.css';

function App() {
    return (
        <ThemeProvider>
            <StarredProvider>
                <Layout>
                    <PostList />
                </Layout>
            </StarredProvider>
        </ThemeProvider>
    );
}

export default App;
