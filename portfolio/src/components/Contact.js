// import React from "react";
// import Highlight, { defaultProps } from "prism-react-renderer";
// import theme from "prism-react-renderer/themes/nightOwl";

// const CodeBlock = () => {
//   const code = `
// const coder = {
//   name: 'Malhar Parikh',
//   skills: ['React', 'NodeJS', 'Java', 'C++', 'Go', 'Python', 'MySQL', 'MongoDB', 'Docker', 'AWS'],
//   hardWorker: true,
//   quickLearner: true,
//   problemSolver: true,
//   hireable: function () {
//     return this.hardWorker && this.problemSolver && this.skills.length >= 5;
//   }
// };
//   `;

//   return (
//     <div className="code-block">
//       <Highlight {...defaultProps} theme={theme} code={code} language="javascript">
//         {({ className, style, tokens, getLineProps, getTokenProps }) => (
//           <pre className={className} style={style}>
//             {tokens.map((line, i) => (
//               <div {...getLineProps({ line, key: i })}>
//                 {line.map((token, key) => (
//                   <span {...getTokenProps({ token, key })} />
//                 ))}
//               </div>
//             ))}
//           </pre>
//         )}
//       </Highlight>
//     </div>
//   );
// };

// export default CodeBlock;

// import React from "react";
// import { Highlight, themes } from "prism-react-renderer";

// const CodeBlock = () => {
//   const code = `
// const coder = {
//   name: 'Malhar Parikh',
//   skills: ['React', 'NodeJS', 'Java', 'C++', 'Go', 'Python', 'MySQL', 'MongoDB', 'Docker', 'AWS'],
//   hardWorker: true,
//   quickLearner: true,
//   problemSolver: true,
//   hireable: function () {
//     return this.hardWorker && this.problemSolver && this.skills.length >= 5;
//   }
// };
//   `;

//   return (
//     <div className="code-block">
//       <Highlight theme={themes.nightOwl} code={code} language="javascript">
//         {({ className, style, tokens, getLineProps, getTokenProps }) => (
//           <pre className={className} style={{ ...style, padding: "20px" }}>
//             {tokens.map((line, i) => (
//               <div {...getLineProps({ line, key: i })}>
//                 {line.map((token, key) => (
//                   <span {...getTokenProps({ token, key })} />
//                 ))}
//               </div>
//             ))}
//           </pre>
//         )}
//       </Highlight>
//     </div>
//   );
// };

// export default CodeBlock;

// import React, { useState } from 'react';
// // import Header from './Header';
// import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you for contacting me. I will get back to you soon!');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <div className="bg-background text-pink py-20" id="contact">
//       <h2 className="text-center text-4xl font-bold textPrimary mb-10">Contact With Me</h2>
//       <div className="flex flex-wrap justify-center items-start gap-10 px-4">
//         {/* Contact Form */}
//         <div className="bg-gradient-to-r from-gradientStart to-gradientEnd p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label htmlFor="name" className="block text-sm mb-2">Your Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 rounded bg-background text-white border border-gray-600 focus:outline-none"
//               />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="email" className="block text-sm mb-2">Your Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 rounded bg-background text-white border border-gray-600 focus:outline-none"
//               />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="message" className="block text-sm mb-2">Your Message:</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows="4"
//                 className="w-full p-2 rounded bg-background text-white border border-gray-600 focus:outline-none"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="text-yellow py-2 px-4 rounded hover:bg-gradientEnd transition"
//             >
//               Send Message ✉️
//             </button>
//           </form>
//         </div>

//         {/* Contact Information */}
//         <div className="text-center w-full md:w-1/2 lg:w-1/3">
//           <div className="flex items-center gap-4 mb-6">
//             <FaEnvelope className="textPrimary text-2xl" />
//             <p>tapkir.s@northeastern.edu</p>
//           </div>
//           {/* <div className="flex items-center gap-4 mb-6">
//             <FaPhone className="text-lightPurple text-2xl" />
//             <p>+1 (123) 456-7890</p>
//           </div> */}
//           <div className="flex items-center gap-4 mb-6">
//             <FaMapMarkerAlt className="textPrimary text-2xl" />
//             <p>9 Chilcott Pl, Jamaica Plain, Boston 02130</p>
//           </div>
//           <div className="flex justify-center gap-4">
//             <a href="https://github.com/Sakshitapkir03?tab=repositories" target="_blank" rel="noopener noreferrer" className="textPrimary text-2xl">
//               <FaGithub />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="textPrimary text-2xl">
//               <FaLinkedin />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
// import Header from './Header';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting me. I will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-background text-pink py-20" id="contact">
      <h2 className="text-center text-4xl font-bold textPrimary mb-10">Contact With Me</h2>
      <div className="flex flex-wrap justify-center items-start gap-10 px-4">
        {/* Contact Form */}
        <div className="bg-gradient-to-r from-gradientStart to-gradientEnd p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm mb-2">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-background text-white border border-gray-600 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm mb-2">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-background text-white border border-gray-600 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm mb-2">Your Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-2 rounded bg-background text-white border border-gray-600 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-yellow py-2 px-4 rounded hover:bg-gradientEnd transition"
            >
              Send Message ✉️
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="text-center w-full md:w-1/2 lg:w-1/3">
          <div className="flex items-center gap-4 mb-6">
            <a href="mailto:tapkir.s@northeastern.edu" className="textPrimary text-2xl">
              <FaEnvelope />
            </a>
            <p>tapkir.s@northeastern.edu</p>
          </div>
          {/* <div className="flex items-center gap-4 mb-6">
            <FaPhone className="text-lightPurple text-2xl" />
            <p>+1 (123) 456-7890</p>
          </div> */}
          <div className="flex items-center gap-4 mb-6">
            <FaMapMarkerAlt className="textPrimary text-2xl" />
            <p>9 Chilcott Pl, Jamaica Plain, Boston 02130</p>
          </div>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/Sakshitapkir03?tab=repositories" target="_blank" rel="noopener noreferrer" className="textPrimary text-2xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="textPrimary text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/_sakshitapkir/" target="_blank" rel="noopener noreferrer" className="textPrimary text-2xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
