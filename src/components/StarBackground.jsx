// import React, { useEffect, useState } from 'react'

// const StarBackground = () => {
//     const [stars, setStars] = useState([]);
//     const [meteors, setMeteors] = useState([]);

//     useEffect(() => {
//         generateStars();
//         generateMeteors();

//         const handleResize = () => {
//             generateStars();
//         }

//         window.addEventListener('resize', handleResize);

//         return () => window.removeEventListener('resize', handleResize)
//     }, []);

//     const generateStars = () => {
//         const numberOfStars = Math.floor(
//             (window.innerWidth * window.innerHeight) / 10000
//         );
//         const newStars = [];

//         for (let i = 0; i < numberOfStars; i++) {
//             newStars.push({
//                 id: i,
//                 size: Math.random() * 3 + 1,
//                 x: Math.random() * 100,
//                 y: Math.random() * 100,
//                 opacity: Math.random() * 0.5 + 0.5,
//                 animationDuration: Math.random() * 4 + 2,
//             })
//         }
//         setStars(newStars);
//     }
    
//     const generateMeteors = () => {
//         const numberOfMeteors = 4;
//         const newMeteors = [];

//         for (let i = 0; i < numberOfMeteors; i++) {
//             newMeteors.push({
//                 id: i,
//                 size: Math.random() * 2 + 1,
//                 x: Math.random() * 100,
//                 y: Math.random() * 20,
//                 delay: Math.random() * 15,
//                 animationDuration: Math.random() * 3 + 3,
//             })
//         }
//         setMeteors(newMeteors);
//     }
    


//     return (
//         <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
//             {stars.map((star) => (
//                 <div
//                     key={star.id}
//                     className='star animate-pulse-subtle'
//                     style={{
//                         width: `${star.size}px`,
//                         height: `${star.size}px`,
//                         left: `${star.x}%`,
//                         top: `${star.y}%`,
//                         opacity: star.opacity,
//                         animationDuration: `${star.animationDuration}s`,
//                 }} />
//             ))}
//             {meteors.map((meteor) => (
//                 <div
//                     key={meteor.id}
//                     className='meteor animate-meteor'
//                     style={{
//                         width: `${meteor.size * 50}px`,
//                         height: `${meteor.size * 2}px`,
//                         left: `${meteor.x}%`,
//                         top: `${meteor.y}%`,
//                         delay: meteor.delay + 's',
//                         animationDuration: `${meteor.animationDuration}s`,
//                 }} />
//             ))}
//         </div>
//     );
// }

// export default StarBackground





const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

import React, { useEffect, useState } from 'react';

const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [snowflakes, setSnowflakes] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // Detect theme
        const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(darkMode);

        generateStars();
        generateMeteors();
        generateSnowflakes();

        const handleResize = () => {
            generateStars();
            generateSnowflakes();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }
        setMeteors(newMeteors);
    };

    const generateSnowflakes = () => {
        const numberOfSnowflakes = Math.floor((window.innerWidth * window.innerHeight) / 15000);
        const newSnowflakes = [];
        for (let i = 0; i < numberOfSnowflakes; i++) {
            newSnowflakes.push({
                id: i,
                size: Math.random() * 4 + 2,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.3,
                animationDuration: Math.random() * 10 + 5,
            });
        }
        setSnowflakes(newSnowflakes);
    };

    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {/* Stars */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className='star animate-pulse-subtle'
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                        backgroundColor: isDarkMode ? '#fff' : '#fffae3', // light mode color
                    }}
                />
            ))}

            {/* Meteors */}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className='meteor animate-meteor'
                    style={{
                        width: `${meteor.size * 50}px`,
                        height: `${meteor.size * 2}px`,
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        animationDelay: meteor.delay + 's',
                        animationDuration: `${meteor.animationDuration}s`,
                        backgroundColor: isDarkMode ? '#fff' : '#8A2BE2', // softer meteor
                    }}
                />
            ))}

            {/* Snowflakes */}
            {snowflakes.map((snow) => (
                <div
                    key={snow.id}
                    className='snowflake animate-fall'
                    style={{
                        width: `${snow.size}px`,
                        height: `${snow.size}px`,
                        left: `${snow.x}%`,
                        top: `${snow.y}%`,
                        opacity: snow.opacity,
                        animationDuration: `${snow.animationDuration}s`,
                        backgroundColor: isDarkMode ? '#fff' : '#8A2BE2', // light blue snow
                    }}
                />
            ))}
        </div>
    );
};

export default StarBackground;
