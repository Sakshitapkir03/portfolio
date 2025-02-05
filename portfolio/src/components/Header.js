// import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-darkBlue text-white py-4 shadow-lg fixed w-full z-10">
//       <div className="container mx-auto flex justify-between items-center px-8">
//         {/* Logo */}
//         {/* <div className="text-lightPurple font-bold text-2xl cursor-pointer">
//           Sakshi Portfolio
//         </div> */}
//         <div class="hamburger">
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//         {/* Navigation Links */}
//         <nav className="flex gap-8">
//           <a
//             href="#home"
//             className="hover:text-lightPurple transition duration-300"
//           >
//             Home
//           </a>
//           <a
//             href="#about"
//             className="hover:text-lightPurple transition duration-300"
//           >
//             About
//           </a>
//           <a
//             href="#skills"
//             className="hover:text-lightPurple transition duration-300"
//           >
//             Skills
//           </a>
//           <a
//             href="#projects"
//             className="hover:text-lightPurple transition duration-300"
//           >
//             Projects
//           </a>
//           <a
//             href="#education"
//             className="hover:text-lightPurple transition duration-300"
//           >
//             Education
//           </a>
//           <a
//             href="#experience"
//             className="hover:text-lightPurple transition duration-300"
//           >
//             Experience
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from 'react';

// const Header = () => {
//   // State to manage the menu visibility
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Function to toggle menu visibility
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="bg-darkBlue text-white py-4 shadow-lg fixed w-full z-10">
//       <div className="container mx-auto flex justify-between items-center px-8">
//         {/* Logo */}
//         <div className="text-lightPurple font-bold text-2xl cursor-pointer">
//           Sakshi Portfolio
//         </div>

//         {/* Hamburger Icon */}
//         <div
//           className="hamburger flex flex-col justify-center items-center cursor-pointer md:hidden"
//           onClick={toggleMenu}
//         >
//           <div className="w-6 h-1 bg-white my-1"></div>
//           <div className="w-6 h-1 bg-white my-1"></div>
//           <div className="w-6 h-1 bg-white my-1"></div>
//         </div>

//         {/* Navigation Links */}
//         <nav
//           className={`${
//             menuOpen ? 'flex' : 'hidden'
//           } flex-col md:flex md:flex-row gap-8 absolute md:static top-16 left-0 bg-darkBlue w-full md:w-auto py-4 md:py-0 items-center`}
//         >
//           <a
//             href="#home"
//             className="hover:text-lightPurple transition duration-300"
//             onClick={toggleMenu} // Close menu on link click
//           >
//             Home
//           </a>
//           <a
//             href="#about"
//             className="hover:text-lightPurple transition duration-300"
//             onClick={toggleMenu}
//           >
//             About
//           </a>
//           <a
//             href="#skills"
//             className="hover:text-lightPurple transition duration-300"
//             onClick={toggleMenu}
//           >
//             Skills
//           </a>
//           <a
//             href="#projects"
//             className="hover:text-lightPurple transition duration-300"
//             onClick={toggleMenu}
//           >
//             Projects
//           </a>
//           <a
//             href="#education"
//             className="hover:text-lightPurple transition duration-300"
//             onClick={toggleMenu}
//           >
//             Education
//           </a>
//           <a
//             href="#experience"
//             className="hover:text-lightPurple transition duration-300"
//             onClick={toggleMenu}
//           >
//             Experience
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-background text-white py-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-8">
        {/* Logo */}
        <div className="textwhite font-bold text-2xl cursor-pointer">
          Sakshi Portfolio
        </div>

        {/* Hamburger Icon */}
        <div
          className="hamburger flex flex-col justify-center items-center cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          <div className="w-6 h-1 bg-white my-1"></div>
          <div className="w-6 h-1 bg-white my-1"></div>
          <div className="w-6 h-1 bg-white my-1"></div>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row gap-8 absolute md:static top-16 left-0 bg-background w-full md:w-auto py-4 md:py-0 items-center z-50`}
        >
          <a
            href="#home"
            className="hover:textwhite transition duration-300"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:textwhite transition duration-300"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:textwhite transition duration-300"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:textwhite transition duration-300"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#education"
            className="hover:textwhite transition duration-300"
            onClick={toggleMenu}
          >
            Education
          </a>
          <a
            href="#experience"
            className="hover:textwhite transition duration-300"
            onClick={toggleMenu}
          >
            Experience
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;