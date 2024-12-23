import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "JARVIS – Chatbot",
            client: "Verizon",
            Status: "Delivered on Dec 6 2024",
            description: "JARVIS is a web-based tool designed to enable users to interact with multiple databases using natural language queries related to VSAD. The front end is built with React.js, while the backend utilizes Node.js and Express.js. PostgreSQL serves as the primary database, with an additional Flask NLP service for query processing. The application employs prompt engineering and fine-tunes LLM models for enhanced query interpretation. A metadata table containing schema, table names, and column details was created for model training."
        },
        {
            title: "JENGA - AI-based Project Management Platform",
            client: " Verizon",
            Status: "Inprogress since Nov 11 2024",
            description: "An interactive project management tool inspired by Jenga, where management can post project ideas, and teams bid to take on tasks. The platform offers project visualization, resource planning, and competitive bidding. Projects are represented as bricks in a virtual stack, enhancing engagement and transparency."
        },
        {
            title: "Loan Prediction System",
            client: "University at Buffalo",
            Status: "Educational Project in 2023",
            description: "A system to predict loan approvals using Random Forest classifiers. The project preprocesses loan application datasets, encodes categorical variables, and scales numerical features. The model identifies patterns in applicant income, education, and other features to make predictions."
        }
    ];

    return (
        <div>
            <h2>Sample Projects</h2>
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <h3>{project.title}</h3>
                    <p><strong>Client:</strong> {project.client}</p>
                    <p><strong>Status:</strong> {project.Status}</p>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;
