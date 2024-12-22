import React from 'react';

const Introduction = () => {
    return (
        <div className="introduction">
            <h2>Introduction</h2>
            <p>
                I'm an AI developer with experience in React, Node.js, and data science. 
                I specialize in NLP, distributed systems, and optimization techniques.
            </p>
            <p>
                <strong>Interests:</strong> Game theory, LLMs, transporter problems, and operations research.
            </p>
            <div className="resume-button">
                <a href="/resume.csv" download="Anjali_Resume.csv">
                    <button>Download Resume</button>
                </a>
            </div>
        </div>
    );
};

export default Introduction;
