import React from 'react';
import Introduction from './Introduction';
import Experience from './Experience';
import Projects from './Projects';
import Articles from './Articles';

const MainContent = ({ page }) => {
    return (
        <div className="main-content">
            {page === 'introduction' && <Introduction />}
            {page === 'experience' && <Experience />}
            {page === 'projects' && <Projects />}
            {page === 'articles' && <Articles />}
        </div>
    );
};

export default MainContent;
