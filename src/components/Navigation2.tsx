import React from "react";
import { Menu } from "lucide-react"
import { useNavigate } from "react-router-dom";
import FullScreenMenu from "./FullScreenMenu";
import { useMenu } from './MenuContext';
import clsx from 'clsx';
//import { ThemeToggle } from "@/components/ThemeToggle";

// interface Navigation2Props {
//   setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   isMenuOpen: boolean;
// }


const Navigation2: React.FC = () => {
  const { isMenuOpen, openMenu, closeMenu, isSubMenuOpen } = useMenu();

  

  const navigate = useNavigate();

  return (
    <nav className={clsx(
      "absolute top-0 left-0 right-0 z-30 flex items-center justify-between p-2 md:p-3 transition-colors duration-300",
      isMenuOpen && isSubMenuOpen ? "bg-[#02032d]" : "bg-transparent"
    )}>
      {/* Logo */}
      <div className="flex items-center">
        <img 
          src="/ps.png" 
          alt="Logo" 
          className="h-20 w-auto mx-6 my-6 cursor-pointer brightness-105" 
          onClick={() => navigate('/')} 
        /> <h2 className="text-l md:text-6xl font-bold mb-4 text-[#c5c4c4]" >Pioneer School</h2>
      </div>
    
      {/* Desktop nav items */}
      <div className="hidden md:flex items-center space-x-3">
        <div
          className="text-white text-sm hover:text-[#E4AF23] font-semibold px-3 py-1.5 bg-gradient-to-r from-[#E4AF23] to-[#0C356A] rounded-md "
          onClick={() => navigate('/')}
        >
          HOME
        </div>
        <button
          className="bg-[#E4AF23] hover:bg-white/20 text-[#F2F2F2] hover:text-[#E4AF23] font-semibold px-3 py-1.5 rounded-md text-sm shadow-2xl"
          onClick={() => navigate('/contact')}
        >
          <span className="mr-1">?</span> ENQUIRE
        </button>
        <button
          className="bg-[#E4AF23] hover:bg-white/20 text-[#F2F2F2] hover:text-[#E4AF23] font-semibold px-3 py-1.5 rounded-md text-sm"
          onClick={() => navigate('/admissions')}
        >
          JOIN US
        </button>
      {/*  <ThemeToggle />*/}
        <button
          className="flex items-center gap-1 px-3 py-1.5 text-sm text-white hover:text-[#f4b24a] bg-gradient-to-r from-[#E4AF23] to-[#0C356A] rounded-md shadow"
          onClick={openMenu}
        >
          MENU <Menu className="w-4 h-4" />
        </button>
      </div>
    
      {/* Mobile menu */}
      <div className="flex items-center gap-2 md:hidden">
         {/*  <ThemeToggle />*/}
        <button
          className="text-white flex items-center px-2 py-1 text-sm hover:text-[#f4b24a] bg-gradient-to-r from-[#f4b24a] to-[#02032d] rounded-md shadow"
          onClick={openMenu}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
    
      {isMenuOpen && <FullScreenMenu onClose={closeMenu} />}
    </nav>
    
  );
};

export default Navigation2;