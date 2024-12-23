import React from 'react';

const Articles = () => {
    const articles = [
        {
            title: "Why GPUs are Essential for Training Large Language Models: Cost, Performance, and Efficiency",
            summary: "This article explores the importance of GPU size and architecture in training large language models (LLMs) like GPT, T5, and BERT. It shares real-world experiences of GPU memory issues and highlights which GPUs are best suited for different model sizes and AI applications.",
            link: "https://medium.com/@anjalitanikella/why-gpus-are-essential-for-training-large-language-models-cost-performance-and-efficiency-22d1b21becf2"
        },
        {
            title: "The AI Chip Wars: NVIDIA, AMD, and Apple’s Innovations in LLM Fine-Tuning",
            summary: "This article compares the AI hardware race among NVIDIA, AMD, and Apple, focusing on LLM fine-tuning, chip performance, and market positioning.",
            link: "https://medium.com/@anjalitanikella/the-ai-chip-wars-nvidia-amd-and-apples-latest-innovations-in-large-language-model-fine-tuning-2b3347ae0415"
        },
        {
            title: "Harnessing Fractal Geometry in AI: The Future of Efficient Computing and Problem Solving",
            summary: "This article explores the application of fractal geometry in AI to enhance computational efficiency, optimize problem-solving algorithms, and improve memory utilization. It discusses the role of logarithmic spirals and tree fractals in revolutionizing machine learning and robotics.",
            link: "https://medium.com/@anjalitanikella/harnessing-fractal-geometry-in-ai-the-future-of-efficient-computing-and-problem-solving-24efcbbe75b2"
        }
    ];

    return (
        <div>
            <h2>Articles</h2>
            {articles.map((article, index) => (
                <div key={index} className="article-card">
                    <h3>{article.title}</h3>
                    <p>{article.summary}</p>
                    <a 
                        href={article.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="custom-link"
                    >
                        View Article ⬇
                    </a>
                </div>
            ))}
            <div className="resume-button">
                <a href="https://medium.com/@anjalitanikella" target="_blank" rel="noopener noreferrer">
                    <button>View All Medium Articles</button>
                </a>
            </div>
        </div>
    );
};

export default Articles;
