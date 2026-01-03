// import React, { useEffect, useState } from 'react'
// import { cn } from '../lib/utils'
// import { Menu, X } from 'lucide-react';
// import ThemeToggle from './ThemeToggle';

// const navItems = [
//   { name: 'Home', href: '#hero' },
//   { name: 'About', href: '#about' },
//   { name: 'Skills', href: '#skills' },
//   { name: 'Projects', href: '#projects' },
//   { name: 'Contact', href: '#contact' },
// ]

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.screenY > 10)
//     }

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [])


//   return (
//     <nav className={cn(
//       'fixed top-0 w-full z-40 transition-all duration-300',
//       isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5'
//     )}>

//       <div className='container flex items-center justify-between mx-auto max-w-7xl px-6 py-4 backdrop-blur-xl bg-white/10 border border-white/10 shadow-lg rounded-xl'>
//         <a href="#hero" className='text-xl font-bold text-primary flex items-center'>
//           <span className='relative z-10'>
//             <span className='text-glow text-foreground'>Emmanuel's</span> Portfolio
//           </span>
//         </a>

//         {/* Desktop nav */}
//         <div className='hidden md:flex space-x-8'>
//           {navItems.map((item, key) => (
//             <a key={key} href={item.href} className='font-medium text-foreground/80 hover:text-violet-500 transition-colors duration-300'>
//               {item.name}
//             </a>
//           ))}
//         </div>




//         {/* Mobile nav */}

//         <button 
//           onClick={() => setIsMenuOpen((prev) => !prev)}
//           className='md:hidden flex p-2 text-foreground z-50'
//           aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         <div className='hidden md:flex'>
//           <ThemeToggle />
//         </div>

//         <div className={cn('fixed top-0 inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
//           'transition-all duration-300 md:hidden',
//           isMenuOpen
//             ? 'opacity-100 pointer-events-auto'
//             : 'opacity-0 pointer-events-none'
//         )}>
//           <div className='flex flex-col space-y-8 text-xl'>
//             {navItems.map((item, key) => (
//               <a
//                 key={key}
//                 href={item.href}
//                 className='font-medium text-foreground/80 hover:text-violet-500 transition-colors duration-300'
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>


//       </div>
//     </nav>
//   )
// }

// export default Navbar


import React, { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll for navbar shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll while preserving scroll position when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      setScrollPosition(window.scrollY); // store current scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // restore scroll position
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPosition);
    }

    return () => {
      // cleanup in case component unmounts while menu open
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen, scrollPosition]);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'py-3 bg-background/70 backdrop-blur-lg shadow-md'
          : 'py-5'
      )}
    >
      <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center space-x-2"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Emmanuel's</span> Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="font-medium text-foreground/80 hover:text-violet-500 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Right Controls */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden',
            isMenuOpen
              ? 'opacity-100 pointer-events-auto translate-y-0'
              : 'opacity-0 pointer-events-none -translate-y-full'
          )}
        >
          <div className="flex flex-col space-y-8 text-2xl font-medium transition-transform duration-300">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-foreground/90 hover:text-violet-500 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

