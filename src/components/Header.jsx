import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isDarkMode ,setisDarkMode] = useState(true)
  useEffect (() =>{
    setisDarkMode(document.body.classList.contains("dark"))
  },[])
  const hendleDark = () => {
    document.body.classList.toggle("dark")
    setisDarkMode(!isDarkMode)
  }
  return (
    <header className=" w-full bg-white fixed top-0  dark:bg-gray-900 shadow-md py-6 px-8 flex justify-between items-center">
      <div className=' container mx-auto flex justify-between '>

      {/* Logo - Chap tomonda */}
      <div className="text-xl font-bold text-blue-600 dark:text-white">
        KARIMOV
      </div>

      {/* Center - Navigation */}
      <nav className="space-x-6 text-gray-700 dark:text-gray-300 font-medium">
        <a href="#" className="hover:text-blue-600">Products</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </nav>

      {/* Dark mode tugma - O'ng tomonda */}
      <button
        onClick={hendleDark}
      >
       {isDarkMode ? (
         <Sun className='w-5 h-5'/>
       ) : (
        <Moon className='w-5 h-5'/>
      )
      
       }
      </button>
      </div>
    </header>
  );
};

export default Header;
