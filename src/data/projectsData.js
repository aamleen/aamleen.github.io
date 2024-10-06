import nsc from '../assets/svg/projects/nsc.svg'
import course_bucket from '../assets/svg/projects/coursera.svg'
import hallucination from '../assets/svg/projects/hallucination.svg'
import quizzle from '../assets/svg/projects/quizzle.svg'
import cloud from '../assets/svg/projects/cloud.svg'
import recommender from '../assets/svg/projects/recommender.svg'
import dsc from '../assets/svg/projects/data_sc.svg'
import game_dev from '../assets/svg/projects/game_dev.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Hallucination Detection',
        projectDesc: 'Developed a novel architecture using LLMs, cross-attention, and Meta-Modeling to boost hallucination detection accuracy in natural language generation tasks.',
        tags: ['NLP, Gen AI', 'RL, Transformers', 'Research'],
        code: 'https://github.com/Natural-Language-Processing-Winter-2024/SHROOM-NLP-2024',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: hallucination
    },
    {
        id: 2,
        projectName: 'Quizzle - Contextual Quiz Generator',
        projectDesc: 'Created an NLP-based quiz generator using advanced LLMs like T5 and LLAMA for dynamic, context-driven quizzes across diverse subjects.',
        tags: ['NLP AI LLMs', 'DL OCR','Neural Graphs'],
        code: 'https://github.com/aamleen/QUIZZLE',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: quizzle
    },
    {
        id: 3,
        projectName: 'Distributed Cloud Applications',
        projectDesc: 'Built and deployed scalable distributed systems, including messaging and e-commerce platforms, using Docker and Google Cloud for seamless multi-client interaction.',
        tags: ['Google Cloud', 'Dockers', 'DevOps'],
        code: 'https://github.com/Distributed-System-Concepts-and-Design',
        demo: '',
        image: cloud
    },
    {
        id: 4,
        projectName: 'Network Security',
        projectDesc: 'Built security applications including Transposition cipher, DES encryption, RSA-based CA, and a Digital Signature system for an application like Pan India RTO DL verification.',
        tags: ['Encrypt Decrypt', 'Network Ciphers', 'RSA, Certificates', 'DES, SSLs, Digital Sign'],
        code: 'https://github.com/aamleen/Network-Security',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: nsc
    },
    {
        id: 5,
        projectName: 'Will Hero Game',
        projectDesc: 'Created a multi-threaded, Java-based replica of the Mario game with multiplayer functionality and complex game mechanics.',
        tags: ['Object Oriented (OOPS)', 'JAVA FXML', 'Game Dev'],
        code: 'https://github.com/aamleen/Will-Hero-Game',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: game_dev
    },
    {
        id: 6,
        projectName: 'Sensor Data Analysis',
        projectDesc: 'Analyzed time-series sensor data (PAMAP2) using classifiers, PCA, and hypothesis testing to extract insights from large datasets and predict the correct sensor placement locations on body.',
        tags: ['Data Science', 'Data Analysis', 'Visualisation', 'ML, Hypothesis Testing'],
        code: 'https://github.com/aamleen/Physical-Activity-Recognition-using-Sensors',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: dsc
    },
    {
        id: 7,
        projectName: 'Course Bucket',
        projectDesc: 'Built a course aggregator app that compares e-learning platforms, leveraging advanced DBMS queries and data warehousing for course recommendations.',
        tags: ['Database Systems', 'Information Integration', 'Advanced SQLs', 'Data Warehouse', 'ETL'],
        code: 'https://github.com/aamleen/Course-Bucket',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: course_bucket
    },
    {
        id: 8,
        projectName: 'Career Advisory System',
        projectDesc: 'Developed AI mini-projects using Prolog and A* algorithms to predict career paths and suggest relevant courses based on user data.',
        tags: ['AI Algorithms', 'Prolog, Logic', 'AO* Algorithm'],
        code: 'https://github.com/aamleen/Career_Advisory_System__AI-ML',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: hallucination
    },
    {
        id: 9,
        projectName: 'Collaborative Filtering',
        projectDesc: 'Developed and tested recommender systems using KNN, ALS, Nuclear Norm Minimization, and Schatten-p Norm algorithms to improve recommendation accuracy.',
        tags: ['Recommender Systems', 'Netflix', 'AI, Algorithms'],
        code: 'https://github.com/aamleen/Collaborative-Filtering',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: recommender
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/