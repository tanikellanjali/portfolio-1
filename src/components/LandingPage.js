import React from 'react';
import './LandingPage.css';

const LandingPage = ({ setPage }) => {
    return (
        <div className="landing-container">
            <div className="profile-section">
                <img 
                    src="https://media.licdn.com/dms/image/v2/D5603AQGAk3vdv-cwIg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731378006897?e=1740614400&v=beta&t=sylL-lcz_Y9CstiS5-Z0d_MJ4bvzFRCV5uCxngRtess"
                    alt="Profile"
                    className="profile-pic clickable"
                    onClick={() => setPage('introduction')}
                />
                <h1>Anjali Tanekella</h1>
                <p>AI Developer | Aspiring PhD Candidate</p>
            </div>

            <div className="nav-buttons-row">
                <button onClick={() => setPage('introduction')}>Introduction</button>
                <button onClick={() => setPage('experience')}>Experience</button>
                <button onClick={() => setPage('projects')}>Sample Projects</button>
                <button onClick={() => setPage('articles')}>Articles</button>
            </div>

            <div className="landing-links">
                <a href = "https://www.ijser.org/researchpaper/Performance-analysis-of-QUIC-protocol-in-comparison-with-HTTP-and-HTTPS-servers.pdf">Published paper</a>
                <a href="mailto:tanikellaanjali@gmail.com">Email</a>
                <a href="https://www.linkedin.com/in/tanekellaanjali/">LinkedIn</a>
                <a href="https://github.com/tanikellanjali">GitHub</a>
                <a href="https://medium.com/@anjalitanikella">Medium</a>
            </div>
            <div className="resume-button">
                <a href="/resume.docx" download="Anjali_Resume.docx">
                    <button>Download Resume</button>
                </a>
            </div>
        </div>
    );
};

export default LandingPage;
