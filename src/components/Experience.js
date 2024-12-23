import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: "Infinite Computer Solutions",
            role: "AI/ML Engineer",
            duration: "March2024 - Present",
            tools: "Airflow , Pgadmin , DBeaver , Gitlab , juypeter  python , ML , genAI , prompt engineering , API ,  SQL, Cron  , Pandas, NumPy, TensorFlow, PyTorch, Scikit-learn,  MapReduce, Spark, Plotly, Hugging Face, Llama, NLP, Looker, Grafana, Excel, React JS , Node JS , ExpressJS , Flask JS , Java script ",
            link: "https://www.infinite.com",
            description: "Spearheaded development of AI-powered JARVIS chatbot with NLP and LLM fine-tuning, cutting MTTR by 15% and enhancing database query efficiency.Built WARMACHINE, a Reinforcement Learning-driven code prediction system boosting developer productivity by 20% through auto-completion and debugging.Designed JENGA, an AI project management platform integrating predictive analytics for resource allocation and bidding, streamlining project workflows.Automated reporting pipelines for PostgreSQL, accelerating reporting cycles by 30% and improving alert summarization with Meta Llama 3, increasing analyst productivity by 30%.Engineered GPU-accelerated algorithms for large dataset analysis, boosting alert handling speed by 75% and reducing manual effort by up to 90"
        },
        {
            company: "Thermo Fisher",
            role: "Data Scientist",
            duration: "Feb 2024 – March 2024",
            tools: "Big Query , Data warehousing , Airflow , ETL , Python , SQL , ML ",
            link: "https://www.thermofisher.com/us/en/home.html",
            description: "Utilized BigQuery to extract, transform, and load (ETL) over 5TB of data from various sources (databases, APIs, file storage) for data warehousing and analysis.Developed and maintained data pipelines for migrating, verifying, cleaning, and loading nearly 10,000 attribute data points into an Oracle Cloud data warehouse, ensuring data integrity and efficient data flow. Utilized Apache Airflow to orchestrate and schedule these pipelines for reliable data warehousing automation. Developed 18 machine learning models leveraging techniques like linear regression, random forest, and neural networks (Compared model performance using evaluation metrics to select optimal models for data warehousing, considering factors like interpretability and explain ability. Created data validation checks, unit tests, and monitoring dashboards covering data quality, model performance, and platform reliability."
        },
        {
            company: "University at Buffalo ",
            role: "Database Engineer Assistant ",
            duration: "Nov , 2022 – April, 2023	",
            tools: "BigQuery , ETL , SQL , python , oracle 	",
            link: "https://www.buffalo.edu",
            description: "Designed and implemented over 10 relational database schemas adhering to 3NF principles, ensuring data integrity for seamless migration to BigQuery's scalable data warehouseMigrated 4 on-prem SQL Server databases to BigQuery, reducing latency by 40% and enabling unlimited scalability. Utilized Airflow to orchestrate and automate the data pipeline for reliable data movement. Built 5 production ETL pipelines with Python and BigQuery, processing over 10 TB of transaction data daily. These pipelines ensured efficient data ingestion, transformation, and loading into the cloud data warehouse.Wrote over 50 stored procedures and 100+ complex SQL queries, contributing to a 30% reduction in grading calculation reporting time. This experience translates well to writing and optimizing queries for BigQueryImproved database query performance in Oracle DBMS by 45% on average through indexing, partitioning, and optimization techniques. This proficiency in database optimization is transferable to optimizing BigQuery queries for efficient data retrieval. "
        },
        {
            company: "DXC Technology",
            role: "Data Scientist ",
            duration: "June , 2020 –  December , 2021",
            tools: "BigData processing , pyspark , SQL , CI/CD , JSON , VBA , excel , Service Now , data warehousing , Dashboard building , budget reporting , Agile , resource allocation , ETL pipeline , data modeling ",
            link: "https://dxc.com/us/en",
            description: "Built 2 analytical datasets on 5 TB of financial data enabling 30+ business users to perform ad-hoc analysis with sub-second query speeds.Applied machine learning on over 100 million daily IoT events to classify customer usage patterns (PySpark Random Forest models).Automated the generation of 15+ financial variance reports through Excel VBA macros, providing insights into budget vs. actuals.Designed optimized JSON data integration flows linking 3 critical finance platforms, through requirements gathering with 6 stakeholder groups.Maintained 99.99% uptime for 10+ ETL pipelines spanning source systems like ServiceNow to cloud data warehouses.Democratized data science across the organization by building self-serve Power BI dashboards on top of BigQuery SQL analytics.Handled CI/CD processes for data pipelines, ensuring rigorous validation before deployment to production"
        },
        {
            company: "TCS e-Serve International Ltd ",
            role: "Internship Trainee ",
            duration: "May ,2019 – Nov, 2019 ",
            tools: "NLP, PyTorch, AWS",
            link: "https://www.tcs.com",
            description: "Performance Analysis of QUIC Protocol: Conducted in comparison with HTTPS and HTTP servers, focusing on speed and security aspects.HTTPS Technology: Explored SSL integration with HTTP, emphasizing authentication, security certificates, and its reliance on TCP (Transmission Control Protocol) for reliable delivery.TCP and UDP Protocols: Highlighted TCP as a reliable, ordered delivery protocol in contrast to UDP (User Datagram Protocol) which does not ensure delivery order.QUIC Protocol Basis: Described QUIC protocol's foundation on UDP, acknowledged for its speed and potential enhanced security, as discovered by Google..Java Implementation: Mentioned the usage of Java for the study, indicating its role in the practical analysis of the QUIC protocol's performance."
        }
    ];

    return (
        <div>
            <h2>Experience</h2>
            {experiences.map((exp, index) => (
                <div key={index} className="experience-card">
                    <h3>
                        {exp.role} | 
                        <a 
                            href={exp.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="custom-link"
                        >
                             {exp.company} ⬇
                        </a>
                    </h3>
                    <p>{exp.duration}</p>
                    <p><strong>Tools:</strong> {exp.tools}</p>
                    <p>{exp.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Experience;
