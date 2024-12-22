import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setPage }) => {
    return (
        <div className="sidebar">
            <div className="profile-section">
                <img 
                    src="https://media.licdn.com/dms/image/v2/D5603AQGAk3vdv-cwIg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731378006897?e=1740614400&v=beta&t=sylL-lcz_Y9CstiS5-Z0d_MJ4bvzFRCV5uCxngRtess"  // Replace with your LinkedIn image URL
                    alt="LinkedIn Profile"
                    className="profile-pic"
                />
                <h1>Anjali Tanekella</h1>
            </div>
            <p>AI Developer | Data Scientist</p>

            <div className="nav-buttons">
                <button onClick={() => setPage('introduction')}>Introduction</button>
                <button onClick={() => setPage('experience')}>Experience</button>
                <button onClick={() => setPage('projects')}>Sample Projects</button>
                <button onClick={() => setPage('articles')}>Articles</button>
            </div>

            <div className="links">
                <a href="mailto:dtgubbala.99@gmail.com">Email</a>
                <a href="https://www.linkedin.com/in/durga-tejaswi/">LinkedIn</a>
                <a href="https://github.com/">GitHub</a>
                <a href="https://medium.com/">Medium</a>
            </div>
        </div>
    );
};

export default Sidebar;
