import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
    const [page, setPage] = useState('introduction');

    return (
        <div className="container">
            <Sidebar setPage={setPage} />
            <MainContent page={page} />
        </div>
    );
}

export default App;
