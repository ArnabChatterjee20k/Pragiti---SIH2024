"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHandPointRight, FaUser } from 'react-icons/fa';
import { BsTranslate } from "react-icons/bs";
import InputBox from '@/components/InputBox';

const Button = ({ children, className, onClick }) => (
  <motion.button
    className={`${className} transition-colors duration-300`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export default function RegisterLoginPage() {
  const [activeForm, setActiveForm] = useState('councillor');
  const [departmentalStep, setDepartmentalStep] = useState(1);

  const renderRegistrationForm = () => {
    switch (activeForm) {
      case 'councillor':
        return (
          <motion.form
            className="space-y-4"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <InputBox type="text" placeholder="Full Name" />
            <InputBox type="tel" placeholder="Contact No" />
            <InputBox type="email" placeholder="Email Address" />
            <div className="flex space-x-4">
              <InputBox type="text" placeholder="Locality" className="w-1/2" />
              <InputBox type="text" placeholder="Municipality" className="w-1/2" />
              <InputBox type="text" placeholder="PIN Code" className="w-1/2" />
            </div>
            <div className="flex gap-0">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Govt. Issued ID
                </label>
                <InputBox type="file" accept="image/*" placeholder="Upload Govt Issued ID" />
            </div>
            <div className="flex space-x-4">
              <InputBox type="password" placeholder="Password" className="w-1/2" />
              <InputBox type="password" placeholder="Confirm Password" className="w-1/2" />
            </div>
            <Button className="w-full bg-[#FF5900] text-white py-3 rounded-full flex items-center justify-center hover:bg-[#FF7A33]">
              <FaUser className="mr-2" /> REGISTER AS COUNCILLOR
            </Button>
          </motion.form>
        );
      case 'contractor':
        return (
          <motion.form
            className="space-y-4"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <InputBox type="text" placeholder="Full Name" />
            <InputBox type="tel" placeholder="Contact No" />
            <InputBox type="email" placeholder="Email Address" />
            <div className="flex space-x-4">
              <InputBox type="text" placeholder="Locality" className="w-1/2" />
              <InputBox type="text" placeholder="PIN Code" className="w-1/2" />
            </div>
            <div className='flex flex-row space-x-4'>
            <div className="flex flex-col gap-1">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Govt. Issued ID
                </label>
                <InputBox type="file" accept="image/*" placeholder="Upload Govt Issued ID" />
            </div>
            <div className="flex flex-col gap-1">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Contractor License
                </label>
                <InputBox type="file" accept="image/*" placeholder="Upload Contractor License" />
            </div>
            </div>
            <div className="flex space-x-4">
              <InputBox type="password" placeholder="Password" className="w-1/2" />
              <InputBox type="password" placeholder="Confirm Password" className="w-1/2" />
            </div>
            <Button className="w-full bg-[#FF5900] text-white py-3 rounded-full flex items-center justify-center hover:bg-[#FF7A33]">
              <FaUser className="mr-2" /> REGISTER AS CONTRACTOR
            </Button>
          </motion.form>
        );
      case 'departmental':
        return (
          <motion.form
            className="space-y-4"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            {departmentalStep === 1 && (
              <>
                <InputBox type="text" placeholder="Full Name" />
                <InputBox type="email" placeholder="Email Address" />
                <div className="flex space-x-4">
                  <InputBox type="tel" placeholder="Contact Number" className="w-full" />
                  <InputBox type="text" placeholder="Employee Number" className="w-full" />
                </div>
                <InputBox type="text" placeholder="Location" />
                <div className="flex space-x-4">
                  <InputBox type="text" placeholder="Address" className="w-full" />
                  <InputBox type="text" placeholder="PIN Code" className="w-full" />
                </div>
                <Button className="w-full bg-[#FF5900] text-white py-3 rounded-full hover:bg-[#FF7A33]" onClick={() => setDepartmentalStep(2)}>
                  Next
                </Button>
              </>
            )}
            {departmentalStep === 2 && (
              <>
            <div className="flex gap-0">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Govt. Issued ID
                </label>
                <InputBox type="file" accept="image/*" placeholder="Upload Govt Issued ID" />
            </div>
            <div className="flex gap-0">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Departmental Authenticated Letter
                </label>
                <InputBox type="file" accept="image/*" placeholder="Upload Departmental Auth Letter" />
            </div>
            <div className="flex gap-0">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Previous Projects
                </label>
                <InputBox type="file" accept="image/*" placeholder="Upload Previous Projects" />
            </div>
                <select className="w-full p-2 border rounded">
                  <option value="">Select Department Level</option>
                  {/* Add options here */}
                </select>
                <select className="w-full p-2 border rounded">
                  <option value="">Select Department</option>
                  {/* Add options here */}
                </select>
                <select className="w-full p-2 border rounded">
                  <option value="">Select Role</option>
                  <option value="councillor">Councillor</option>
                  <option value="contractor">Contractor</option>
                  {/* Add options here */}
                </select>
                <div className="flex space-x-4">
                  <Button className="w-full bg-[#FF5900] text-white py-3 rounded-full hover:bg-[#FF7A33]" onClick={() => setDepartmentalStep(1)}>
                    Back
                  </Button>
                  <Button className="w-full bg-[#FF5900] text-white py-3 rounded-full hover:bg-[#FF7A33]" onClick={() => setDepartmentalStep(3)}>
                    Next
                  </Button>
                </div>
              </>
            )}
            {departmentalStep === 3 && (
              <>
                <InputBox type="password" placeholder="Password" />
                <InputBox type="password" placeholder="Confirm Password" />
                <div className="flex space-x-2">
                  <Button className="w-32 bg-[#FF5900] text-white py-3 rounded-full hover:bg-[#FF7A33]" onClick={() => setDepartmentalStep(2)}>
                    Back
                  </Button>
                  <Button className="w-full bg-[#FF5900] text-white py-3 rounded-full hover:bg-[#FF7A33] flex items-center justify-center">
                    <FaUser className="mr-2" /> REGISTER AS DEPARTMENTAL
                  </Button>
                </div>
              </>
            )}
          </motion.form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-white p-2">
        <motion.nav
          className="container mx-auto px-4 flex justify-between h-20 items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-4xl font-bold text-[#516774]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            PRAGATI
          </motion.div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-10 mr-10">
              <Button className="flex flex-row items-center justify-center font-semibold">
                <BsTranslate className="mr-1" /> ENGLISH
              </Button>
            </div>
            <Button className="text-[#FF5900] border border-[#FF5900] px-4 py-2 rounded-full flex items-center hover:bg-[#FF5900] hover:text-white">
              <FaHandPointRight className="mr-2" /> COMPLAINT
            </Button>
          </div>
        </motion.nav>
      </header>

      <main className="container mx-auto mt-10 px-4 flex justify-center">
        <div className="w-full flex justify-between items-start">
          <motion.div
            className="w-1/2 px-10 flex flex-col items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#516774] mb-6">REGISTER</h2>
            <div className="flex space-x-2 mb-4">
              <Button 
                className={`px-4 py-2 rounded-2xl ${activeForm === 'councillor' ? 'bg-[#FDE8DD] text-[#516774]' : 'bg-white text-[#516774] border border-[#516774]'}`}
                onClick={() => setActiveForm('councillor')}
              >
                Councillor
              </Button>
              <Button 
                className={`px-4 py-2 rounded-2xl ${activeForm === 'contractor' ? 'bg-[#FDE8DD] text-[#516774]' : 'bg-white text-[#516774] border border-[#516774]'}`}
                onClick={() => setActiveForm('contractor')}
              >
                Contractor
              </Button>
              <Button 
                className={`px-4 py-2 rounded-2xl ${activeForm === 'departmental' ? 'bg-[#FDE8DD] text-[#516774]' : 'bg-white text-[#516774] border border-[#516774]'}`}
                onClick={() => {setActiveForm('departmental'); setDepartmentalStep(1);}}
              >
                Departmental
              </Button>
            </div>
            <motion.div
              className="w-[60%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {renderRegistrationForm()}
            </motion.div>
          </motion.div>
          <motion.div
            className="w-1/2 px-10 flex flex-col items-center border-l-2 border-dashed border-[#516774]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#516774] text-white p-10 rounded-3xl mb-4 w-2/4">
              <p className='text-xl mb-4'>Note:</p>
              <p className='text-md mb-4'>You can only "Log In" after the approval by your department.</p>
              <p className='text-md'>Use your Login ID to continue</p>
            </div>
            <h2 className="text-4xl font-bold text-[#516774] mb-6">LOG IN</h2>
            <motion.form
              className="space-y-4 w-2/4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <InputBox type="text" placeholder="Login ID" />
              <InputBox type="password" placeholder="Password" />
              <Button className="w-full bg-[#FF5900] text-white py-3 rounded-full hover:bg-[#FF7A33]">
                SECURE LOGIN
              </Button>
            </motion.form>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
