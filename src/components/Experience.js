import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: "NVIDIA",
            role: "AI Engineer",
            duration: "2022 - Present",
            tools: "Python, PyTorch, LLaMA",
            link: "https://www.nvidia.com",
            description: "Worked on large-scale AI models and distributed computing pipelines."
        },
        {
            company: "Google",
            role: "Machine Learning Intern",
            duration: "2021 - 2022",
            tools: "TensorFlow, Kubernetes",
            link: "https://www.google.com",
            description: "Built machine learning models for search optimization."
        }
    ];

    return (
        <div>
            <h2>Experience</h2>
            {experiences.map((exp, index) => (
                <div key={index} className="experience-card">
                    <h3>{exp.role} - <a href={exp.link} target="_blank">{exp.company}</a></h3>
                    <p>{exp.duration}</p>
                    <p><strong>Tools:</strong> {exp.tools}</p>
                    <p>{exp.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Experience;
