// import React from 'react';

// const About = () => (
//   <div className="bg-darkBlue text-white py-20 px-4">
//     <h2 className="text-center text-4xl font-bold text-lightPurple mb-10">WHO AM I?</h2>
//     <p className="text-center max-w-2xl mx-auto text-lg">
//       My name is [Your Name], a passionate developer with enthusiasm for learning new technologies. I focus on creating web and mobile applications that incorporate cutting-edge solutions, including AI and machine learning integrations.
//     </p>
//   </div>
// );

// export default About;

// import React from 'react';
// // import Header from './Header';
// import { Highlight, themes } from 'prism-react-renderer';

// const About = () => {
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
//     <div className="bg-darkBlue text-white py-20 px-10" id="about">
//       <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
//         {/* Left Section: About Content */}
//         <div className="about-content flex-1 text-left">
//           <h3 className="text-4xl font-bold mb-6 text-lightPurple">Who Am I?</h3>
//           <p className="text-lg leading-8">
//             My name is <span className="text-lightPurple">Sakshi Tapkir</span>, a passionate developer with a strong
//             enthusiasm for problem-solving and learning new technologies. I focus on creating web and mobile
//             applications that incorporate cutting-edge solutions, including AI and machine learning integrations.
//           </p>
//         </div>

//         {/* Right Section: Code Block */}
//         <div className="code-block flex-1 bg-gradient-to-r from-darkBlue to-darkBlueDarker p-6 rounded-lg shadow-lg w-full max-w-full overflow-x-auto">
//           <Highlight theme={themes.nightOwl} code={codeSnippet.trim()} language="javascript">
//             {({ className, style, tokens, getLineProps, getTokenProps }) => (
//               <pre className={`${className}`} style={{ ...style, padding: '20px', borderRadius: '10px' }}>
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

// export default About;

import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';

const About = () => {
  const codeSnippet = `
  const coder = {
    name: 'Sakshi Tapkir',
    skills: ['React', 'NodeJS', 'Java', 'Python', 'MySQL', 'MongoDB', 'C', 'Express'],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function () {
      return (
        this.hardWorker &&
        this.problemSolver &&
        this.skills.length >= 5
      );
    }
  };
  `;

  return (
    <div className="bg-background text-white py-20 px-6 lg:px-10" id="about">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        {/* Left Section: About Content */}
        <div className="about-content flex-1 text-left">
          <h3 className="text-4xl font-bold mb-6 textPrimary">Who Am I?</h3>
          <p className="text-lg leading-8">
            My name is <span className="textPrimary">Sakshi Tapkir</span>, a passionate developer with a strong
            enthusiasm for problem-solving and learning new technologies. I focus on creating web and mobile
            applications that incorporate cutting-edge solutions, including AI and machine learning integrations.
          </p>
        </div>

        {/* Right Section: Code Block */}
        <div className="code-block flex-1 bg-gradient-to-r from-darkBlue to-darkBlueDarker p-6 rounded-lg shadow-lg w-full max-w-full overflow-x-auto">
          <Highlight theme={themes.nightOwl} code={codeSnippet.trim()} language="javascript">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={`${className}`} style={{ ...style, padding: '20px', borderRadius: '10px', overflowX: 'auto' }}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  );
};

export default About;
