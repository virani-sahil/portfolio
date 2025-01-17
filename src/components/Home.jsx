import { useEffect } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    useEffect(() => {
        // Initialize Typed.js after the DOM is loaded
        const options = {
            strings: ["Frontend Developer", "Web Developer", "Full Stack Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        };
        /*global Typed*/
        /*eslint no-undef: ["error", { "typeof": true }] */

        const typed = new Typed(".textanimation", options);

        // Cleanup on unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div id='home' className="scroll-mt-28">
            <div className='bg-mainBg text-textColor min-h-[calc(100vh-104px)] w-[100%] px-[10%]'>
                <div className='flex flex-col-reverse gap-y-40 py-40 lg-custom:flex-row items-center justify-between gap-x-5'>
                    <div className='text-2xl font-bold '>
                        <h2><span className='text-mainColor'>Hello</span>, {`it's me`} <span className='text-mainColor'>.</span></h2>
                        <h1 className='max-[500px]:text-5xl text-7xl py-2'>Sahil Virani</h1>
                        <h2 className='min-[500px]:text-4xl'>And {`i'm`} a <span className='text-mainColor max-[500px]:text-3xl text-5xl textanimation'>Full stack Developer</span></h2>
                        <p className='pt-8 text-[20px] max-w-[750px]'>I am a passionate <span className='text-[#0ef]'>Full Stack Developer</span> skilled in building dynamic and user-friendly web applications. Proficient in front-end technologies like <span className='text-[#0ef]'>HTML</span>, <span className='text-[#0ef]'>CSS</span>, and <span className='text-[#0ef]'>JavaScript</span>, as well as back-end frameworks such as <span className='text-[#0ef]'>Node.js</span> and databases like <span className='text-[#0ef]'>MongoDB</span>.</p>

                        <div className=' pt-10'>
                            <div className='flex gap-12 '>
                                <a target='_blank' href="https://www.linkedin.com/in/sahil-virani-9462b3346/">
                                    <FaLinkedinIn className='contact3 border-2 border-mainColor p-1 rounded-full text-mainColor hover:bg-mainColor hover:text-mainBg transition-all duration-100' size={45} />
                                </a>
                                <a target='_blank' href='https://github.com/virani-sahil'>
                                    <FaGithub className='contact2 border-2 border-mainColor rounded-full p-1 text-mainColor hover:bg-mainColor hover:text-mainBg transition-all duration-100' size={45} />
                                </a>
                                <a target='_blank' href="mailto:viranisahil004@gmail.com">
                                    <MdEmail className='contact1 border-2 border-mainColor p-1 rounded-full text-mainColor hover:bg-mainColor hover:text-mainBg transition-all duration-100' size={45} />
                                </a>
                            </div>
                            <div className='pt-10'>
                                <a href="SAHIL_VIRANI.pdf" download="SAHIL_VIRANI.pdf">
                                    <button className='bg-mainColor text-secondaryBg rounded-3xl  px-4 py-2 text-center shadow-sm shadow-mainColor hover:bg-mainBg hover:text-mainColor transition-all duration-300'>Download cv</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src="/images/dev3.jpg" alt="main image" className='rounded-full max-[400px]:w-[230px] max-[400px]:h-[230px] max-[550px]:w-[300px] max-[550px]:h-[300px] w-[400px] h-[400px] ' />
                        <div className='anime max-[400px]:w-[230px] max-[400px]:h-[230px] max-[550px]:w-[300px] max-[550px]:h-[300px] w-[400px] h-[400px] absolute  top-0 rounded-full' />
                    </div>
                </div>
            </div>
            <About />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home