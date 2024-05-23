import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/logo.webp'

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-200 p-10 text-stone-900">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-16">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-10">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-300">
            {/* Placeholder for a photo */}
            <img src={ image } alt="Profile" className="w-full h-full object-cover"/>
          </div>
          <div className="p-4">
      <h2 className="text-2xl text-red-700 xl:text-3xl mb-4">Stay up to date</h2>
      <p className="flex items-center xl:text-2xl">
        <a href="mailto:seniorhub24@gmail.com" className="flex items-center hover:text-blue-600 transition-colors duration-300">
          <i className="fas fa-envelope mr-2"></i>seniorhub24@gmail.com
        </a>
      </p>
      <p className="flex items-center xl:text-2xl">
        <a href="https://www.youtube.com/channel/UCxxxxxxxxx" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-red-700 transition-colors duration-300">
          <i className="fab fa-youtube mr-2"></i>Follow our Channel
        </a>
      </p>
      <p className="flex items-center xl:text-2xl">
        <a href="https://www.instagram.com/seniorhub" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-pink-600 transition-colors duration-300">
          <i className="fab fa-instagram mr-2"></i>@seniorhub
        </a>
      </p>
      <p className="flex items-center xl:text-2xl">
        <a href="tel:706-555-4448" className="flex items-center hover:text-green-600 transition-colors duration-300">
          <i className="fas fa-phone mr-2"></i>706-555-4448
        </a>
      </p>
    </div>
        <div>
          <h2 className="text-2xl text-red-700 xl:text-3xl  mb-3">Pages</h2>
          <Link to="/home" className="block xl:text-2xl hover:underline">Home</Link>
          <Link to="/mission" className="block xl:text-2xl hover:underline">Mission</Link>
          <Link to="/aboutus" className="block xl:text-2xl hover:underline">About Us</Link>
          <Link to="/activities" className="block xl:text-2xl hover:underline">Activities</Link>
          <Link to="/events" className="block xl:text-2xl hover:underline">Events</Link>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
            // <form className="space-y-4">
            //   <input type="text" placeholder="First Name" className="block w-full p-2 border border-gray-300 rounded"/>
            //   <input type="text" placeholder="Last Name" className="block w-full p-2 border border-gray-300 rounded"/>
            //   <input type="email" placeholder="Email" className="block w-full p-2 border border-gray-300 rounded"/>
            //   <input type="password" placeholder="Password" className="block w-full p-2 border border-gray-300 rounded"/>
            //   <button type="submit" className="w-full bg-black text-white p-2 rounded">SIGN UP</button>
            // </form>
