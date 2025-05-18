import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import c4 from '../assets/c4.png';
import c5 from '../assets/c5.png';
import c6 from '../assets/c6.png';

export const courses = [
  {
    slug: 'full-stack-web-development',
    title: 'Full Stack Web Development',
    description:
      'Become a proficient full stack developer by building dynamic, database-driven websites using the MERN stack (MongoDB, Express.js, React.js, and Node.js).',
    details: `This course is perfect for those who want to master both front-end and back-end development using JavaScript and modern frameworks. You'll learn to:
- Structure projects using modular architecture.
- Create interactive UIs with React, including hooks and context.
- Build RESTful APIs using Node.js and Express.
- Store and manage data with MongoDB.
- Implement user authentication (JWT, sessions).
- Deploy apps on platforms like Vercel or Heroku.
Includes hands-on capstone projects like a blog site, e-commerce store, and real-time chat app.`,
    image: c1,
    rating: 4.8,
    price: 4999,
  },
  {
    slug: 'data-structures-algorithms',
    title: 'Data Structures & Algorithms',
    description:
      'Master foundational programming concepts to solve complex problems efficiently, with a strong emphasis on coding interviews.',
    details: `Whether you're preparing for tech interviews or aiming to level up your coding skills, this course covers:
- Arrays, strings, stacks, queues, linked lists
- Trees (binary, BST, heaps), graphs, and recursion
- Sorting and searching algorithms
- Greedy, backtracking, and dynamic programming
- Time & space complexity analysis (Big-O)
- Practice with LeetCode-style problems and mock interview sessions.`,
    image: c2,
    rating: 4.6,
    price: 3999,
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'Learn how to design user-friendly, accessible digital interfaces with a focus on user experience and usability testing.',
    details: `This course guides you through the full design process, from research to prototyping:
- Principles of user-centered design
- Wireframing and mockups using Figma
- Design systems, color theory, and typography
- User research and persona creation
- Usability testing and feedback iterations
- Portfolio-ready design case studies for real-world apps`,
    image: c3,
    rating: 4.7,
    price: 4499,
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning',
    description:
      'Dive into machine learning algorithms and techniques using Python, scikit-learn, and essential libraries.',
    details: `This course is built for aspiring ML engineers and data enthusiasts. You will:
- Understand supervised vs unsupervised learning
- Build models for regression and classification
- Work with decision trees, SVM, k-means, and PCA
- Perform feature engineering and model tuning
- Evaluate performance using confusion matrix, ROC
- Use real datasets like Iris, Titanic, Housing, etc.
Capstone project: Predictive model for stock prices or customer churn.`,
    image: c4,
    rating: 4.5,
    price: 5999,
  },
  {
    slug: 'cloud-computing',
    title: 'Cloud Computing',
    description:
      'Understand cloud infrastructure and services, focusing on AWS deployment, DevOps basics, and scalability.',
    details: `Ideal for developers and system admins, this course explores:
- Introduction to cloud computing models (IaaS, PaaS, SaaS)
- Core AWS services: EC2, S3, Lambda, RDS, IAM
- Setting up servers, storage, and networking
- Serverless applications with AWS Lambda
- Monitoring, security, and cost optimization
- Deploying web apps and automating workflows
Includes hands-on labs on AWS and project deployment.`,
    image: c5,
    rating: 4.6,
    price: 5499,
  },
  {
    slug: 'cybersecurity-basics',
    title: 'Cybersecurity Basics',
    description:
      'Get introduced to the world of digital security, threat modeling, and basic tools to secure applications and networks.',
    details: `Great for beginners and IT professionals, this course covers:
- Core security principles: CIA triad, access control
- Types of cyber threats: malware, phishing, DoS
- Cryptography basics (symmetric, asymmetric, hashing)
- Network security, firewalls, VPNs
- Security best practices and ethical hacking intro
- Hands-on practice with tools like Wireshark, Burp Suite
Capstone project: Conduct a vulnerability assessment of a web app.`,
    image: c6,
    rating: 4.4,
    price: 2999,
  },
 
];
