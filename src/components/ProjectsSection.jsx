import { ArrowRight, ExternalLinkIcon, GitBranchIcon, Github } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id: 1,
        title: 'CasualsHub',
        description: 'Casualshub is a modern e-commerce platform designed to provide customers with a seamless shopping experience for casual apparel, accessories, and lifestyle products. The website combines intuitive design, responsive functionality, and a visually appealing interface to ensure effortless navigation and a smooth purchasing journey across devices.',
        image: '/projects/project1.png',
        tags: ['React', 'Tailwind'],
        demoUrl: 'https://casuals-hub-landing-page.vercel.app/',
        githubUrl: 'https://github.com/emm-ok/CasualsHub_Landing_Page'
    },
    {
        id: 2,
        title: 'Verto',
        description: 'LaunchBoard is a modern web application designed to serve as a central hub for startups to showcase their products, services, and innovative ideas. The platform empowers entrepreneurs to create profiles, share updates, and connect with potential investors, collaborators, and customers, fostering a dynamic ecosystem for early-stage ventures.',
        image: '/projects/project2.png',
        tags: ['NextJs', 'TypeScript', 'Tailwind', 'Sanity CMS', 'OAuth', ],
        demoUrl: 'https://startup-web-app-beta.vercel.app/',
        githubUrl: 'https://github.com/emm-ok/Startup-Web-App'
    },
    {
        id: 3,
        title: 'Casuals Hub',
        description: 'C is a modern e-commerce web application designed to provide customers with a seamless and engaging online shopping experience for clothing and fashion accessories. The platform combines clean, intuitive design with robust functionality to help users easily browse, select, and purchase their favorite apparel.',
        image: '/projects/project3.png',
        tags: ['HTML', 'CSS', 'JavaScript'],
        demoUrl: 'https://clothing-store-web-smoky.vercel.app/',
        githubUrl: 'https://github.com/emm-ok/ClothingStoreWeb'
    },
    {
        id: 4,
        title: 'Nike',
        description: 'This project is a high-fidelity clone of the Nike landing page, designed to replicate the look, feel, and interactivity of the iconic Nike website. Built as a responsive web application, it demonstrates expertise in modern frontend development, UI/UX design, and e-commerce presentation without the backend e-commerce functionality. The project showcases attention to detail, smooth animations, and a professional layout, making it an excellent example of modern web design skills.',
        image: '/projects/project4.png',
        tags: ['React', "Tailwind"],
        demoUrl: 'https://nike-app-five.vercel.app/',
        githubUrl: 'https://github.com/emm-ok/NikeApp'
    },

]

const ProjectsSection = () => {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Featured <span className='text-primary'> Projects </span>
                </h2>
                <p className='text-center font-medium text-muted-foreground max-w-2xl mx-auto mb-4'>
                    Here are some of my recent project.
                    Each project was carefully crafted with attention to detail,
                    performance, and user experience
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, key) => (
                        <div key={key} className='group flex flex-col justify-between p-4 shadow-md border border-gray-300/10 rounded-lg overflow-hidden card-hover'>
                            <a href={project.demoUrl} target='_blank' className='h-48 overflow-hidden border border-gray-500/50 rounded-md'>
                                <img
                                    src={project.image}
                                    alt="project# image"
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                            </a>

                            <div className='p-6'>
                                <div className='flex flex-wrap gap-2'>
                                    {project.tags.map((tag, key) => (
                                        <span key={key} className='px-2 py-1 text-x font-medium border-b-2 rounded-lg bg-secondary text-secondary-foreground'>{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                            <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                            <div className='flex justify-between items-center'>
                                    <a
                                        href={project.githubUrl}
                                        target='_blank'
                                        className='flex items-center gap-2 font-medium text-foreground/80 hover: text-primary transition-colors duration-300'>
                                        <p>Github</p>
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href={project.demoUrl}
                                        target='_blank'
                                        className='flex items-center gap-2 font-medium text-foreground/80 hover: text-primary transition-colors duration-300'>
                                        <p>View Page</p>
                                        <ExternalLinkIcon size={20} />
                                    </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='text-center mt-12'>
                    <a
                        href='https://github.com/emm-ok'
                        target='_blank'
                        className='cosmic-button w-fit flex items-center mx-auto gap-2'
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection