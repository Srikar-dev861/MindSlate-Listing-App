import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import PostList from './components/PostList';
import './index.css';

function App() {
    return (
        <ThemeProvider>
            <Layout>
                <PostList />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
