import React from 'react';
import Introduction from './Introduction';
import Experience from './Experience';
import Projects from './Projects';
import Articles from './Articles';

const MainContent = ({ page }) => {
    const renderPage = () => {
        switch (page) {
            case 'introduction':
                return <Introduction />;
            case 'experience':
                return <Experience />;
            case 'projects':
                return <Projects />;
            case 'articles':
                return <Articles />;
            default:
                return <Introduction />;
        }
    };

    return (
        <div className="main-content">
            {renderPage()}
        </div>
    );
};

export default MainContent;