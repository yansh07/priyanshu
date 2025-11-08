// 'use client';
// import React from 'react';
// import { Mail, Moon, Sun } from 'lucide-react';
// import ThemeToggle from './ThemeToggle'; 
// import { motion } from 'framer-motion';

// function Navbar() {
//   return (
//     <motion.nav 
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
//       className="relative bg-transparent z-20 w-full px-6 flex justify-between items-center max-w-7xl mx-auto"
//     >
//       {/* Left Section (Email and Logo) */}
//       <div className="flex items-center space-x-4">
//         <motion.a
//           href="mailto:pksingh69313@gmail.com"
//           className="text-sm font-mono text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Mail className="w-4 h-4 text-cyan-500" />
//           <span className="hidden sm:inline">pksingh69313@gmail.com</span>
//         </motion.a>
//         {/* <motion.div className="font-bold text-xl text-white">Priyanshu</motion.div> */}
//       </div>

//       {/* Right Section (Home, Blog, Theme Toggle) */}
//       <div className="flex items-center space-x-6 md:space-x-10">
//         <motion.a
//           href="#home"
//           className="text-lg font-semibold text-gray-300 hover:text-white transition-colors relative"
//           whileHover={{ y: -2 }}
//           transition={{ type: "spring", stiffness: 400, damping: 10 }}
//         >
//           Home
//           <span className="absolute left-0 bottom-0 h-[2px] bg-cyan-500 w-0 hover:w-full transition-all duration-300 ease-out" />
//         </motion.a>
//         <motion.a
//           href="https://medium.com/@yansh08"
//           className="text-lg font-semibold text-gray-300 hover:text-white transition-colors relative"
//           whileHover={{ y: -2 }}
//           transition={{ type: "spring", stiffness: 400, damping: 10 }}
//         >
//           Blog
//           <span className="absolute left-0 bottom-0 h-[2px] bg-cyan-500 w-0 hover:w-full transition-all duration-300 ease-out" />
//         </motion.a>

//         <ThemeToggle /> 
//       </div>
//     </motion.nav>
//   );
// }

// export default Navbar;