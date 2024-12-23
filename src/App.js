import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
    const [page, setPage] = useState('landing');

    return (
        <div className="container">
            {page === 'landing' ? (
                <LandingPage setPage={setPage} />
            ) : (
                <>
                    <Sidebar setPage={setPage} />
                    <MainContent page={page} />
                </>
            )}
        </div>
    );
}

export default App;
