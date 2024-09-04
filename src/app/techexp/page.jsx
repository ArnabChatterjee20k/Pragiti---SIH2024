"use client";
import React from 'react';
import { FaMapMarkerAlt, FaFileAlt, FaUser, FaCube, FaClock } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';
import { SlCalender } from "react-icons/sl";
import { motion } from 'framer-motion';

const ProjectItem = ({ project }) => (
  <motion.div
    className="bg-gray-100 py-4 pl-12 rounded-lg mb-6 shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="grid grid-cols-4 gap-6">
      {/* First Column */}
      <div>
        <div className="flex items-center mb-3">
          <FaFileAlt className="mr-3" size={22} />
          <span className="text-lg font-medium">{project.name}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <FaMapMarkerAlt className="mr-3" size={20} />
          <span>{project.location}</span>
        </div>
      </div>

      {/* Second Column */}
      <div>
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <FaClock className="mr-3" size={20} />
          <span>{project.status}</span>
        </div>
        <div className="text-sm flex items-center text-gray-600 mb-3">
            <SlCalender className="mr-3" size={20} />
          {project.dateRange}
        </div>
      </div>

      {/* Third Column */}
      <div>
        <div className="flex items-center mb-3">
          <FaUser className="mr-3" size={20} />
          <span className="text-sm">{project.authority}</span>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition-colors">
          TRACK PROGRESS
        </button>
      </div>
    </div>
  </motion.div>
);

const PragatiDashboard = () => {
  const projects = [
    {
      name: "Road Construction",
      location: "Palpara More, Mohishila Colony, Asansol",
      authority: "State",
      department: "Public Works Department",
      status: "To be completed soon",
      dateRange: "13/02/24 - 05/08/24",
    },
    {
      name: "Gas Pipe Installation",
      location: "Palpara More, Mohishila Colony, Asansol",
      authority: "State",
      department: "Public Works Department",
      status: "To be completed soon",
      dateRange: "13/02/24 - 05/08/24",
    },
    {
        name: "Gas Pipe Installation",
        location: "Palpara More, Mohishila Colony, Asansol",
        authority: "State",
        department: "Public Works Department",
        status: "To be completed soon",
        dateRange: "13/02/24 - 05/08/24",
      },
  ];

  return (
    <div className="w-full mx-auto p-6">
<header className="flex justify-between items-center mb-20">
<motion.div 
            className="text-4xl font-bold text-[#516774]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            PRAGATI
          </motion.div>
  <nav className="flex-grow flex justify-center">
    <ul className="flex space-x-6">
      <li><a href="#" className="text-gray-600 hover:text-gray-800 text-lg">ABOUT</a></li>
      <li><a href="#" className="text-gray-600 hover:text-gray-800 text-lg">PRIVACY</a></li>
      <li><a href="#" className="flex items-center text-gray-600 hover:text-gray-800 text-lg">
        <GrLanguage className="mr-2" /> ENGLISH
      </a></li>
    </ul>
  </nav>
</header>
      
      <div className="w-full px-10">
          <div className="mb-2 flex flex-row justify-between items-center">
            <div className="flex flex-col">
                <h2 className="text-4xl font-bold text-orange-500 mb-2">Name Surname</h2>
                <p className="text-2xl text-gray-600">Technical Expert | Asansol, Paschim Bardhaman</p>
                <h3 className="text-3xl font-bold text-orange-500 mt-8">Projects</h3>
            </div>
            <div className="text-3xl space-y-5 flex flex-col justify-center items-end">
              <p><span className="text-orange-500 font-bold">Ongoing Projects:</span> 05</p>
              <p><span className="text-orange-500 font-bold">Completed Projects:</span> 22</p>
            </div>
          </div>
          
          <div className="mb-6">
            <button className="bg-orange-200 text-orange-800 px-5 py-2 rounded-lg mr-2">Ongoing</button>
            <button className="bg-white text-gray-600 border border-gray-300 px-5 py-2 rounded-lg">Completed</button>
          </div>
          
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
      </div>
    </div>
  );
};

export default PragatiDashboard;
