import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, image, rating, price }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate('/full-stack'); // Navigate to the full-stack page
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />}
      
      <div className="flex-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-yellow-500 font-semibold">⭐ {rating}</span>
          <span className="text-[#612EED] font-bold text-lg">₹{price}</span>
        </div>
      </div>

      <button
        onClick={handleViewDetails} // Navigate to full-stack page on click
        className="mt-6 bg-[#612EED] text-white px-4 py-2 rounded-[7px] hover:bg-[#613EEE] transition"
      >
        View Details
      </button>
    </div>
  );
};

export default Card;
