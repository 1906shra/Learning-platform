import { useState } from 'react';
import { FiClock, FiCalendar, FiChevronDown, FiChevronRight } from 'react-icons/fi';
import c1 from '../assets/c1.png';

import { motion, AnimatePresence } from 'framer-motion';


const SidebarSection = ({ title, items }) => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="border rounded-xl shadow-md bg-white overflow-hidden transition-all duration-300">
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer flex items-center justify-between px-5 py-3 text-gray-800 font-semibold hover:bg-gray-50 transition-colors"
        >
          <span className="text-md">{title}</span>
          <span className="text-gray-600">
            {open ? <FiChevronDown size={20} /> : <FiChevronRight size={20} />}
          </span>
        </div>
  
        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 py-2 text-sm text-gray-700 space-y-1 bg-gray-50"
            >
              {items.map((item, index) => (
                <li
                  key={index}
                  className="list-disc ml-4 hover:text-[#612EED] transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  };

const MyComponent = () => {
    return (
        <div className="w-full min-h-screen overflow-y-auto bg-white px-4 py-6">
            <div className="flex gap-6 max-w-7xl mx-auto">
                {/* Left Column */}
                <div className="flex-1">
                    <img
                        src={c1}
                        alt="c1"
                        className="w-full max-w-[620px] h-auto max-h-[390px] rounded-tl-[18px] rounded-tr-[18px] object-cover"
                    />

                    <h1 className="mt-4 text-[#612EEd] text-[32px] font-bold leading-tight">
                        Full Stack Web Development
                    </h1>

                    <div className="flex flex-wrap gap-3 mt-3">
                        {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'].map((tag) => (
                            <div
                                key={tag}
                                className="px-2 py-1 border border-[#612EEd] rounded text-[14px] font-medium text-[#612EEd]"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6 text-[16px] text-gray-700 font-medium">
                        <div className="flex items-center gap-2">
                            <FiClock className="text-[#612EEd]" />
                            <span>3 Months 15 Days</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiCalendar className="text-[#612EEd]" />
                            <span>Starts from May 1st, 2025</span>
                        </div>
                    </div>

                    <div className="mt-6 text-[16px] text-gray-800 leading-relaxed max-w-[620px]">
                    <p className="mb-4">
  Unlock your potential as a full stack web developer by mastering both front-end and back-end technologies. Learn to build dynamic, responsive web applications using modern tools like React, Node.js, MongoDB, and Express. Whether you're aiming for a top tech job or planning to launch your own projects, this course equips you with the skills and confidence to succeed in today's competitive development landscape.
</p>

                        <p className="mb-4">
                            You’ll begin with the fundamentals...
                        </p>
                        <ul className="list-disc pl-5 text-[15px] text-gray-700 space-y-2">
                            <li>Learn core front-end technologies: HTML, CSS, JavaScript</li>
                            <li>Build interactive UIs using React.js</li>
                            <li>Develop scalable back-end services using Node.js and Express</li>
                            <li>Work with MongoDB for database integration</li>
                            <li>Understand RESTful API development and integration</li>
                            <li>Deploy full stack projects using modern tools and workflows</li>
                            <li>Gain hands-on experience with real-world projects</li>
                        </ul>
                    </div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 mb-6">
      Course Overview
    </h3>

    <div className="space-y-5">
      <SidebarSection title="HTML" items={['Basics', 'Tags', 'Forms', 'DOM']} />
      <SidebarSection title="CSS" items={['Selectors', 'Box Model', 'Flexbox', 'Grid']} />
      <SidebarSection title="JavaScript" items={['Variables', 'Functions', 'DOM Manipulation', 'ES6+']} />
      <SidebarSection title="React" items={['JSX', 'State & Props', 'Hooks', 'Routing']} />
      <SidebarSection title="Node.js" items={['Express.js', 'Middleware', 'Routing']} />
      <SidebarSection title="MongoDB" items={['Documents', 'Collections', 'Mongoose Basics']} />

      <SidebarSection title="Git & GitHub" items={['Version Control Basics', 'Git Commands', 'Branches & Merging', 'Using GitHub']} />
<SidebarSection title="Authentication" items={['JWT Basics', 'User Signup/Login', 'Protected Routes', 'Session vs Token']} />
<SidebarSection title="API & HTTP" items={['REST API Concepts', 'HTTP Methods', 'Status Codes', 'API Testing with Postman']} />
<SidebarSection title="Deployment" items={['Frontend Deployment (Vercel)', 'Backend Deployment (Render/Heroku)', 'Environment Variables', 'CI/CD Basics']} />
<SidebarSection title="Advanced React" items={['Context API', 'Custom Hooks', 'React Query', 'Performance Optimization']} />
<SidebarSection title="Testing" items={['Unit Testing', 'Jest Basics', 'React Testing Library', 'API Testing']} />

    </div>
  </div>
        </div>
                        </div>
    );
};

export default MyComponent;
