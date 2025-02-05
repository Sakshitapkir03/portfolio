// import React from "react";

// const Education = () => {
//   const education = [
//     { degree: "B.Sc. in Computer Science", institution: "Savitribai Phule Pune University", year: "2020-2023" },
//   ];

//   return (
//     <section id="education" className="section">
//       <h2>Education</h2>
//       <ul>
//         {education.map((edu, idx) => (
//           <li key={idx}>
//             <h3>{edu.degree}</h3>
//             <p>{edu.institution} ({edu.year})</p>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Education;

// Education.js
import React from 'react';
// import Header from './Header';

const educations = [
  { degree: "Master's of Science in Information Systems", school: "Northeastern University", year: "2024 - Present" },
  { degree: "Bachelor's of Science in Computer Science", school: "Savitribai Phule Pune Univ.", year: "2020 - 2023" },
];

const Education = () => (
  <div className="bg-background py-20" id="education">
    <h2 className="text-center text-4xl font-bold textPrimarye mb-10">Education</h2>
    <div className="text-white flex flex-col items-center gap-6">
      {educations.map((edu, index) => (
        <div key={index} className="bg-gradient-to-r from-gradientStart to-gradientEnd p-6 rounded-lg shadow-lg w-3/4">
          <h3 className="text-xl font-bold">{edu.degree}</h3>
          <p className='text-codeBlue'>{edu.school}</p>
          <p className='textPrimary'>{edu.year}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Education;