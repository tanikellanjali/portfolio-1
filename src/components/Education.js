import React from 'react';

const Education = () => {
    const education = [
        {
            Level: "Masters in Science - Data science ",
            Year: "2022-2023",
            Institution: "University at Buffalo , Buffalo , NY",
            link: "https://www.buffalo.edu",
        },
        {
            Level: "Bachelores in technology - Electronics and Communication Engineering",
            Year: "2016-2020",
            Institution: "Hyderabad Institute of Technology and MAnagment , Hyderabad , India",
            link: "https://hitam.org",
        },
        {
            Level: "High School",
            Year: "2014-2016",
            Institution: "Intermediate Board of Education",
            link: "https://www.telangana.gov.in/departments/higher-education/",
        }
        
    ];

    return (
        <div>
            <h2>Education</h2>
            {education.map((exp, index) => (
                <div key={index} className="experience-card">
                    <h3>
                        {exp.Level} | 
                        <a 
                            href={exp.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="custom-link"
                        >
                             {exp.Institution} ⬇
                        </a>
                    </h3>
                    <p>{exp.Year}</p>
                </div>
            ))}
        </div>
    );
};

export default Education;
