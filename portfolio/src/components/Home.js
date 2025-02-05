// import React from 'react';

// const Home = () => (
//   <div className="bg-background text-white text-center py-20">
//     <h1 className="text-5xl font-bold mb-4">Hello, I'm <span className="text-lightPurple">[Your Name]</span></h1>
//     <p className="text-xl mb-6">A Professional Software Developer</p>
//     <div className="flex justify-center gap-4">
//       <a href="#contact" className="bg-gradient-to-r from-gradientStart to-gradientEnd py-2 px-6 rounded text-white">Contact Me</a>
//       <a href="/resume.pdf" className="py-2 px-6 rounded border border-lightPurple text-lightPurple">Get Resume</a>
//     </div>
//   </div>
// );

// export default Home;

// import React from 'react';
// import { Highlight, themes } from 'prism-react-renderer';
// const theme = themes.nightOwl;

// const Home = () => {
//   const codeSnippet = `
//     const coder = {
//       name: 'Sakshi Tapkir',
//       skills: ['React', 'NodeJS', 'Java', 'Python', 'MySQL', 'MongoDB', 'C', 'Express'],
//       hardWorker: true,
//       quickLearner: true,
//       problemSolver: true,
//       hireable: function() {
//         return (
//           this.hardWorker &&
//           this.problemSolver &&
//           this.skills.length >= 5
//         );
//       }
//     };
//   `;

//   return (
//     <div className="home-container bg-background text-white py-20" id="home">
//       <div className="intro-section text-center mb-10">
//         <h1 className="text-4xl font-bold text-lightPurple mb-4">Hello,</h1>
//         <h2 className="text-3xl font-semibold">
//           This is <span className="text-lightPurple">Your Name</span>, <br />
//           I'm a Professional <span className="text-pink">Software Developer</span>.
//         </h2>
//         <div className="flex justify-center gap-4 mt-6">
//           <a
//             href="#contact"
//             className="px-6 py-2 bg-gradient-to-r from-gradientStart to-gradientEnd rounded shadow-lg hover:opacity-80"
//           >
//             Contact Me
//           </a>
//           <a
//             href="https://drive.google.com/file/d/1PeCL04RcMqPjP8tTpFgAxOQDIFpWiWkq/view?usp=drive_link"
//             className="px-6 py-2 bg-background text-lightPurple border border-lightPurple rounded shadow-lg hover:opacity-80"
//           >
//             Get Resume
//           </a>
//         </div>
//       </div>

//       <div className="code-block-container p-8 rounded-lg bg-gradient-to-r from-darkBlue to-darkBlueDarker">
//         <Highlight theme={themes.nightOwl} code={codeSnippet.trim()} language="javascript">
//           {({ className, style, tokens, getLineProps, getTokenProps }) => (
//             <pre className={`${className} overflow-auto`} style={{ ...style, padding: '20px', borderRadius: '10px' }}>
//               {tokens.map((line, i) => (
//                 <div {...getLineProps({ line, key: i })}>
//                   {line.map((token, key) => (
//                     <span {...getTokenProps({ token, key })} />
//                   ))}
//                 </div>
//               ))}
//             </pre>
//           )}
//         </Highlight>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import { Highlight, themes } from 'prism-react-renderer';

// const Home = () => {
//   const codeSnippet = `
//   const coder = {
//     name: 'Sakshi Tapkir',
//     skills: ['React', 'NodeJS', 'Java', 'Python', 'MySQL', 'MongoDB', 'C', 'Express'],
//     hardWorker: true,
//     quickLearner: true,
//     problemSolver: true,
//     hireable: function () {
//       return (
//         this.hardWorker &&
//         this.problemSolver &&
//         this.skills.length >= 5
//       );
//     }
//   };
//   `;

//   return (
//     <div className="bg-background text-white py-20 px-10" id="home">
//       {/* Header Section */}
//       <div className="intro-section text-center mb-12">
//         <h1 className="text-5xl font-bold text-lightPurple mb-4">Hello,</h1>
//         <h2 className="text-3xl font-semibold">
//           This is <span className="text-lightPurple">Your Name</span>, <br />
//           I'm a Professional <span className="text-pink">Software Developer</span>.
//         </h2>
//         <div className="flex justify-center gap-6 mt-6">
//           <a
//             href="#contact"
//             className="px-6 py-3 bg-gradient-to-r from-gradientStart to-gradientEnd rounded shadow-lg hover:opacity-80 text-white"
//           >
//             Contact Me
//           </a>
//           <a
//             href="https://drive.google.com/file/d/1PeCL04RcMqPjP8tTpFgAxOQDIFpWiWkq/view?usp=drive_link"
//             className="px-6 py-3 border border-lightPurple text-lightPurple rounded shadow-lg hover:bg-lightPurple hover:text-darkBlue"
//           >
//             Get Resume
//           </a>
//         </div>
//       </div>

//       {/* Main Section: Flexbox */}
//       <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
//         {/* Left Section: Who am I */}
//         <div className="who-am-i flex-1 text-left">
//           <h3 className="text-4xl font-bold mb-6 text-lightPurple">Who Am I?</h3>
//           <p className="text-lg leading-8">
//             My name is <span className="text-lightPurple">Your Name</span>, a passionate developer and student with a
//             strong enthusiasm for problem-solving and learning new technologies. I work extensively with web and
//             application development, integrating Machine Learning and Artificial Intelligence into my projects. Dedicated
//             to making the digital world more accessible, I am eager to find job opportunities that align with my diverse
//             skills and interests.
//           </p>
//         </div>

//         {/* Right Section: Code Block */}
//         <div className="code-block flex-1 bg-gradient-to-r from-darkBlue to-darkBlueDarker p-6 rounded-lg shadow-lg">
//           <Highlight theme={themes.nightOwl} code={codeSnippet.trim()} language="javascript">
//             {({ className, style, tokens, getLineProps, getTokenProps }) => (
//               <pre className={`${className} overflow-auto`} style={{ ...style, padding: '20px', borderRadius: '10px' }}>
//                 {tokens.map((line, i) => (
//                   <div {...getLineProps({ line, key: i })}>
//                     {line.map((token, key) => (
//                       <span {...getTokenProps({ token, key })} />
//                     ))}
//                   </div>
//                 ))}
//               </pre>
//             )}
//           </Highlight>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
// import Header from './Header';

const Home = () => {
  return (
    <div className="bg-background textPrimary py-20 px-10" id="home">
      {/* Header Section */}
      <div className="intro-section text-center mb-12">
        <h1 className="text-5xl font-bold textPrimary mb-4">Hello,</h1>
        <h2 className="text-3xl font-semibold">
          This is <span className="textPrimary">Sakshi Tapkir</span>, <br />
          I'm a Professional <span className="textPrimary">Software Developer</span>.
        </h2>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-gradientStart to-gradientEnd rounded shadow-lg hover:opacity-80 text-paleMint"
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1cDVMNtvVpQ4XMSdyyznlb46R2iiDv54N/view?usp=sharing"
            className="px-6 py-3 border border-lightPurple text-paleMint rounded shadow-lg hover:bg-lightPurple hover:text-darkBlue"
          >
            Get Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <h1>Malhar Parikh</h1>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/experience">Experience</Link></li>
//           <li><Link to="/skills">Skills</Link></li>
//           <li><Link to="/education">Education</Link></li>
//           <li><Link to="/projects">Projects</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;