// import React from "react";

// const Experience = () => {
//   const experiences = [
//     { company: "Rajas Technologies", position: "Software Engineer", duration: "Mar 2024-Jun 2024" },
//     { company: "DigitalPe", position: "Java Programmer intern", duration: "Feb 2024-Mar 2024" },
//     { company: "CodSoft", position: "JavaScript Developer intern", duration: "Nov 2023-Dec 2023" },
//   ];

//   return (
//     <section id="experience" className="section">
//       <h2>Experience</h2>
//       <ul>
//         {experiences.map((exp, idx) => (
//           <li key={idx}>
//             <h3>{exp.position} at {exp.company}</h3>
//             <p>{exp.duration}</p>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Experience;

// Experience.js
// import React from 'react';

// // import Header from './Header';

// const experiences = [
//   { title: "Software Engineer", company: "MRSON EQUIPMENTS PVT LTD", duration: "Mar 2024 - Jun 2024", image: "/images/software_engineer.jpg"},
//   { title: "Java Programming Intern", company: "DigitalPe", duration: "Feb 2024 - Mar 2024", image: "/images/java.jpg"},
//   { title: "Javascript Developer Intern", company: "CodSoft", duration: "Nov 2023 - Dec 2023", image: "/images/java_programming_intern.jpg"}
// ];

// const Experience = () => (
//   <div className="bg-background text-pink py-20" id="experience">
//     <h2 className="text-center text-4xl font-bold textpaleMint mb-10">Experience</h2>
//     <div className="flex flex-col items-center gap-6">
     
//       {experiences.map((exp, index) => (
//         <div key={index} className="bg-gradient-to-r from-gradientStart to-gradientEnd p-6 rounded-lg shadow-lg w-3/4 flex items-center">
//           <img 
//             src={exp.image} 
//             alt={`${exp.title} at ${exp.company}`} 
//             className="w-32 h-32 object-cover rounded-lg shadow-xl mx-6 transform hover:scale-110 transition-transform duration-300"
//           />
//           <div className="text-left flex-1">
//             <h3 className="text-white text-xl font-bold">{exp.title}</h3>
//             <p className='text-codeBlue'>{exp.company}</p>
//             <p>{exp.duration}</p>
//         </div>
//         </div>
//       ))}
      
//     </div>
//   </div>
// );

// export default Experience;

import React from 'react';

// Experience Data
const experiences = [
  { 
    title: "Software Engineer", 
    company: "MRSON EQUIPMENTS PVT LTD", 
    duration: "Mar 2024 - Jun 2024", 
    image: "/images/software_engineer.jpg"
  },
  { 
    title: "Java Programming Intern", 
    company: "DigitalPe", 
    duration: "Feb 2024 - Mar 2024", 
    image: "/images/java.jpg"
  },
  { 
    title: "Javascript Developer Intern", 
    company: "CodSoft", 
    duration: "Nov 2023 - Dec 2023", 
    image: "/images/java_programming_intern.jpg"
  }
];

const Experience = () => (
  <div className="bg-background text-pink py-20" id="experience">
    <h2 className="text-center text-4xl font-bold text-paleMint mb-10">Experience</h2>
    <div className="flex flex-col items-center gap-6">
     
      {experiences.map((exp, index) => (
        <div 
          key={index} 
          className="bg-gradient-to-r from-gradientStart to-gradientEnd p-6 rounded-lg shadow-lg w-3/4 flex items-center"
        >
          {/* Image with Rotation Effect on Hover */}
          <div className="relative w-32 h-32 mx-6 transition-transform duration-700 transform hover:rotate-y-180">
            <img 
              src={exp.image} 
              alt={`${exp.title} at ${exp.company}`} 
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Experience Details */}
          <div className="text-left flex-1">
            <h3 className="text-white text-xl font-bold">{exp.title}</h3>
            <p className='text-codeBlue'>{exp.company}</p>
            <p>{exp.duration}</p>
          </div>
        </div>
      ))}
      
    </div>
  </div>
);

export default Experience;

