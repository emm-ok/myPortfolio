import { ArrowUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='mx-8 py-12 px-4 bg-card relative shadow-md flex justify-center items-center rounded-full mt-12 pt-8 flex flex-wrap justify-between items-center'>
        <p className='textsm text-muted-foreground font-medium'>
            &copy;   {new Date().getFullYear()} EmmyDev, All rights reserved 
        </p>

        <a href="#hero" className='fixed bottom-2 right-2 bg-primary p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'>
            <ArrowUp size={25} color='white' />
        </a>
    </footer>
  )
}

export default Footer