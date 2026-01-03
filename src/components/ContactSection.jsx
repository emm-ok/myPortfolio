import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '../lib/utils'
import { toast } from 'sonner'

const ContactSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            toast.success('message sent successfully');
        }, 1000)

        setIsSubmitting(false);
        setName('');
        setEmail('');
        setMessage('');
    }


    return (
        <section id='contact' className='py-25 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Get In <span className='text-primary'> Touch</span>
                </h2>

                <p className='text-center font-medium text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Have a project in mind or want to collaborate? Feel free to reach out,
                    I'm always open to discussing new opportunities.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

                        <div className='space-y-6 justify-center'>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Mail className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium text-left'>Email</h4>
                                    <a href="mailto:okoosiemmanuel@gmail.com" target='_blank' className='text-muted-foreground hover:text-primary transition-colors'>
                                        okoosiemmanuel@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Phone className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium text-left'>Phone</h4>
                                    <a href="tel:+(234) 805-858-4698" target='_blank' className='text-muted-foreground hover:text-primary transition-colors'>
                                        +(234) 805-858-4698
                                    </a>
                                </div>
                            </div>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <MapPin className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium text-left'>Location</h4>
                                    <a  className='text-muted-foreground hover:text-primary transition-colors'>Nigeria</a>
                                </div>
                            </div>
                        </div>

                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'>Connect with Me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a href="https://www.instagram.com/_jayboy_k/" target='_blank'>
                                    <Linkedin />
                                </a>
                                <a href="https://x.com/EOkoosi77762" target='_blank'>
                                    <Twitter />
                                </a>
                                <a href="https://www.instagram.com/_jayboy_k/" target='_blank'>
                                    <Instagram />
                                </a>
                                <a href="https://web.facebook.com/emmanuel.okoosi.5/photos" target='_blank'>
                                    <Facebook />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='bg-card p-8 rounded-lg shadow-xs'>
                        <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

                        <form onSubmit={handleSubmit} className='space-y-6' action="">
                            <div>
                                <label htmlFor="name" className='text-left block text-sm font-medium mb-2'>Your Name</label>
                                <input 
                                    type="text" 
                                    id='name'
                                    name='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} 
                                    required 
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outlline-hidden focus:ring-2 focus:ring-primary' 
                                    placeholder='Name Example...'
                                    />
                            </div>
                            <div>
                                <label htmlFor="email" className='text-left block text-sm font-medium mb-2'>Your Email</label>
                                <input 
                                    type="email" 
                                    id='email'
                                    name='email' 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required 
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outlline-hidden focus:ring-2 focus:ring-primary' 
                                    placeholder='example@gmail.com'
                                    />
                            </div>
                            <div>
                                <label htmlFor="message" className='text-left block text-sm font-medium mb-2'>Your Message</label>
                                <textarea 
                                    id='message'
                                    name='message'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)} 
                                    required 
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outlline-hidden focus:ring-2 focus:ring-primary resize-none' 
                                    placeholder='Message Example...'
                                    />
                            </div>

                            <button 
                                type='submit' 
                                disabled={isSubmitting}
                                className={cn('cosmic-button w-full flex items-center justify-center gap-2',

                                )}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection