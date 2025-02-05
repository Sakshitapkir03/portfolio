// import React from "react";

// const Projects = () => {
//   const projects = [
//     { title: "Portfolio Website", description: "A personal portfolio built with React.", link: "#" },
//     { title: "E-commerce App", description: "A full-stack application for online shopping.", link: "#" },
//   ];

//   return (
//     <section id="projects" className="section">
//       <h2>Projects</h2>
//       <ul>
//         {projects.map((project, idx) => (
//           <li key={idx}>
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Projects;

// import React from 'react';
// // import Header from './Header';

// const projects = [
//   { name: "Developer Oasis", description: "A collaborative platform for developers." },
//   { name: "Stock Portfolio Manager", description: "Manage investments seamlessly." },
//   { name: "Book Store App", description: "Manage a bookstore online." },
//   { name: "Trade Analysis", description: "Analyze trading patterns and metrics." },
// ];

// const Projects = () => (
//   <div className="bg-darkBlue text-white py-20" id="projects">
//     <h2 className="text-center text-4xl font-bold text-lightPurple mb-10">Projects</h2>
//     <div className="flex flex-wrap justify-center gap-10">
//       {projects.map((project, index) => (
//         <div key={index} className="bg-gradient-to-r from-gradientStart to-gradientEnd p-6 rounded-lg shadow-lg w-80">
//           <h3 className="text-xl font-bold mb-2">{project.name}</h3>
//           <p>{project.description}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default Projects;
import React from "react";

const projects = [
  {
    name: "SmartCity Management System",
    description: "A system to efficiently manage urban infrastructure and resources.",
  },
  {
    name: "MaintenanceEase",
    description: "Platform for seamless home maintenance and service management.",
  },
  {
    name: "Expense Tracker using MERN",
    description: "Track and manage expenses effortlessly with a MERN-based solution.",
  },
  {
    name: "Online Goods/Courier Transport Service",
    description: "Streamlined platform for goods and courier transport services.",
  },
];

const Projects = () => (
  <div className="bg-background text-pink py-20" id="projects">
    <h2 className="text-center text-4xl font-bold textPrimary mb-10">
      Projects
    </h2>
    <div className="relative">
      {projects.map((project, index) => (
        <div
          key={index}
          className="sticky top-0 bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden mx-auto"
          style={{
            height: "250px", // Adjusted terminal size
            width: "80%", // Make terminals smaller
            zIndex: index, // Start stacking from the last project
          }}
        >
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-2 bg-gray-800">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="mx-auto text-gray-400 text-sm">
              {project.name} - macOS Terminal
            </div>
          </div>
          {/* Terminal Body */}
          <div
            className="p-6"
            style={{
              opacity: index === projects.length - 1 ? 1 : 0.7, // Deemphasize non-active terminals
            }}
          >
            <p className="text-green-400 font-mono">
              $ {project.name.replace(" ", "-").toLowerCase()}
            </p>
            <p className="text-gray-300 mt-4">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;