import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import c4 from '../assets/c4.png';
import c5 from '../assets/c5.png';
import c6 from '../assets/c6.png';
import Card from '../components/Card';

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
const Internships = () => {
  const handleViewDetails = (category, title) => {
    console.log(`View details of ${category}: ${title}`);
    // Implement your navigation or logic for viewing details here
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
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

export default Internships;
