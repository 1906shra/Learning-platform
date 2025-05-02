import React from 'react';
import Card from './Card';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import c4 from '../assets/c4.png';
import c5 from '../assets/c5.png';
import c6 from '../assets/c6.png';

const courses = [
  {
    title: 'Full Stack Web Development',
    description: 'Learn MERN stack with real-world projects.',
    image: c1,
    rating: 4.8,
    price: 4999,
  },
  {
    title: 'Data Structures & Algorithms',
    description: 'Master DSA with problem-solving skills.',
    image: c2,
    rating: 4.6,
    price: 3999,
  },
  {
    title: 'UI/UX Design',
    description: 'Design user-friendly interfaces with Figma.',
    image: c3,
    rating: 4.7,
    price: 4499,
  },
  {
    title: 'Machine Learning',
    description: 'Build ML models using Python and scikit-learn.',
    image: c4,
    rating: 4.5,
    price: 5999,
  },
  {
    title: 'Cloud Computing',
    description: 'Learn AWS and deploy scalable applications.',
    image: c5,
    rating: 4.6,
    price: 5499,
  },
  {
    title: 'Cybersecurity Basics',
    description: 'Understand threats and protect data securely.',
    image: c6,
    rating: 4.4,
    price: 2999,
  },
];

const internships = [
  {
    title: 'Web Developer Intern',
    description: 'Work on live projects using React & Node.js.',
    image: c1,
    rating: 4.7,
    price: 0,
  },
  {
    title: 'Data Analyst Intern',
    description: 'Analyze data and build insightful dashboards.',
    image: c2,
    rating: 4.5,
    price: 0,
  },
  {
    title: 'UI/UX Intern',
    description: 'Contribute to real product design challenges.',
    image: c3,
    rating: 4.6,
    price: 0,
  },
  {
    title: 'ML Intern',
    description: 'Assist in training machine learning models.',
    image: c4,
    rating: 4.5,
    price: 0,
  },
  {
    title: 'DevOps Intern',
    description: 'Automate and monitor deployment pipelines.',
    image: c5,
    rating: 4.4,
    price: 0,
  },
  {
    title: 'Cybersecurity Intern',
    description: 'Work on threat analysis and risk assessments.',
    image: c6,
    rating: 4.3,
    price: 0,
  },
];

const CoursesAndInternships = () => {
  const handleViewDetails = (type, title) => {
    alert(`Viewing details for ${type}: ${title}`);
    // Navigation or modal logic can be added here
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Courses We Provide</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {courses.map((course, index) => (
          <Card
            key={index}
            {...course}
            onViewDetails={() => handleViewDetails('Course', course.title)}
          />
        ))}
      </div>

      <h1 className="text-3xl font-bold mb-6">Internships We Provide</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {internships.map((internship, index) => (
          <Card
            key={index}
            {...internship}
            onViewDetails={() => handleViewDetails('Internship', internship.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesAndInternships;
