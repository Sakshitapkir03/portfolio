// import React from "react";

// const Skills = () => {
//   const skills = ["React", "NodeJS", "Java", "Python", "C", "ExpressJS", "jQuery"];

//   return (
//     <section id="skills" className="section">
//       <h2>Skills</h2>
//       <ul>
//         {skills.map((skill, idx) => (
//           <li key={idx}>{skill}</li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Skills;

// import React from 'react';
// // import Header from './Header';

// const skills = [
//   { name: "React", icon: "/images/react_icon.png" },
//   { name: "Node.js", icon: "/images/nodejs_icon.png" },
//   { name: "Tailwind", icon: "/images/tailwindcss_icon.jpg" },
//   { name: "MongoDB", icon: "/images/mongoDB_icon.png" },
//   { name: "MySQL", icon: "/images/mysql_icon.jpg" },
//   { name: "PostgreSQL", icon: "/images/postgresql_icon.webp" },
// ];

// const Skills = () => (
//   <div className="bg-darkBlue text-white py-20" id="skills">
//     <h2 className="text-center text-4xl font-bold text-lightPurple mb-10">Skills</h2>
//     <div className="flex flex-wrap justify-center gap-6">
//       {skills.map((skill, index) => (
//         <div key={index} className="bg-gradient-to-r from-gradientStart to-gradientEnd text-center p-4 rounded shadow-lg">
//           <img src={skill.icon} alt={skill.name} className="w-12 h-12 mx-auto mb-2" />
//           <p>{skill.name}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default Skills;

// import React from 'react';

// const skills = [
//   { name: "React", icon: "/images/react_icon.png" },
//   { name: "Node.js", icon: "/images/nodejs_icon.png" },
//   { name: "Tailwind", icon: "/images/tailwindcss_icon.jpg" },
//   { name: "MongoDB", icon: "/images/mongoDB_icon.png" },
//   { name: "MySQL", icon: "/images/mysql_icon.jpg" },
//   { name: "PostgreSQL", icon: "/images/postgresql_icon.webp" },
//   { name: "MaterialUI", icon: "/images/postgresql_icon.webp" },
//   { name: "C++", icon: "/images/postgresql_icon.webp" },
//   { name: "TensorFlow", icon: "/images/postgresql_icon.webp" },
//   { name: "Python", icon: "/images/postgresql_icon.webp" },
// ];

// const Skills = () => (
//   <div className="bg-darkBlue text-white py-20" id="skills">
//     <h2 className="text-center text-4xl font-bold text-lightPurple mb-10">Skills</h2>
//     <div className="flex flex-wrap justify-center gap-8">
//       {skills.map((skill, index) => (
//         <div
//           key={index}
//           className="bg-gradient-to-r from-gradientStart to-gradientEnd text-center p-4 rounded shadow-lg flex flex-col items-center justify-center"
//           style={{ width: "150px", height: "150px" }}
//         >
//           <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
//           <p className="text-lg font-semibold">{skill.name}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default Skills;

// import React from "react";

// const skills = [
//   { name: "React", icon: "/images/react-icon.png" },
//   { name: "Node.js", icon: "/images/nodejs-icon.png" },
//   { name: "Tailwind", icon: "/images/tailwind-icon.png" },
//   { name: "MongoDB", icon: "/images/mongodb-icon.png" },
//   { name: "MySQL", icon: "/images/mysql-icon.png" },
//   { name: "PostgreSQL", icon: "/images/postgresql-icon.png" },
//   { name: "MaterialUI", icon: "/images/postgresql_icon.webp" },
//   { name: "C++", icon: "/images/postgresql_icon.webp" },
//   { name: "TensorFlow", icon: "/images/postgresql_icon.webp" },
//   { name: "Python", icon: "/images/postgresql_icon.webp" },
// ];

// const Skills = () => (
//   <div className="bg-darkBlue text-white py-20" id="skills">
//     <h2 className="text-center text-4xl font-bold text-lightPurple mb-10">Skills</h2>
//     <div className="flex flex-wrap justify-center gap-10">
//       {skills.map((skill, index) => (
//         <div
//           key={index}
//           className="relative group bg-gradient-to-r from-gradientStart to-gradientEnd text-center p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
//           style={{ width: "150px", height: "150px", perspective: "1000px" }}
//         >
//           {/* Icon */}
//           <div
//             className="transform transition-transform duration-500 group-hover:rotateY-180 w-full h-full flex items-center justify-center"
//             style={{ backfaceVisibility: "hidden" }}
//           >
//             <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
//           </div>
//           {/* Backside */}
//           <div
//             className="absolute top-0 left-0 w-full h-full bg-darkBlue text-lightPurple flex items-center justify-center rounded-lg transform rotateY-180 backface-hidden transition-transform duration-500 group-hover:rotateY-0"
//             style={{ backfaceVisibility: "hidden" }}
//           >
//             <p className="text-lg font-semibold">{skill.name}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default Skills;


import React from "react";

const skills = [
  { name: "React", icon: "/images/react_icon.png" },
  { name: "Node.js", icon: "/images/nodejs_icon.png" },
  { name: "Tailwind", icon: "/images/tailwindcss_icon.jpg" },
  { name: "MongoDB", icon: "/images/mongoDB_icon.png" },
  { name: "MySQL", icon: "/images/mysql_icon.jpg" },
  { name: "PostgreSQL", icon: "/images/postgresql_icon.webp" },
  { name: "MaterialUI", icon: "/images/materialui_icon.jpeg" },
  { name: "C++", icon: "/images/c++_icon.png" },
  { name: "TensorFlow", icon: "/images/tensorflow_icon.png" },
  { name: "Python", icon: "/images/python_icon.jpeg" },
];

const Skills = () => (
  <div className="bg-background text-pink py-20 overflow-hidden" id="skills">
    <h2 className="text-center text-4xl font-bold textPrimary mb-10">Skills</h2>
    <div className="relative flex items-center">
      <div className="marquee flex space-x-10">
        {/* Skills list repeated twice for seamless scrolling */}
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-center p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-125 hover:border-4 hover:border-yellow-500"
            style={{ width: "120px", height: "120px" }}
          >
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
        {skills.map((skill, index) => (
          <div
            key={index + skills.length}
            className="text-center p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-125 hover:border-4 hover:border-yellow-500"
            style={{ width: "120px", height: "120px" }}
          >
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Add custom animation styles */}
    <style>
      {`
      .marquee {
        display: flex;
        animation: scroll 20s linear infinite;
        will-change: transform;
      }
      .marquee:hover {
        animation-play-state: paused;
      }
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }
      `}
    </style>
  </div>
);

export default Skills;