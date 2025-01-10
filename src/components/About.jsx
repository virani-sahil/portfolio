const About = () => {
    return (
        <div className='bg-secondaryBg text-textColor w-[100%] px-[10%]'>
            <div className='flex flex-col py-20 min-[1000px]:flex-row items-center justify-center  min-h-[calc(100vh-104px)] gap-24'>
                <img src="/images/dev2.jpg" alt="" className='rounded-3xl shadow-black shadow-xl hover:shadow-mainColor w-[600px]' />
                <div className='font-bold'>
                    <h1 className='text-4xl lg-custom:text-7xl'>About <span className='text-mainColor'>Me</span></h1>
                    <h2 className='text-2xl lg-custom:text-4xl pt-3 pb-6'>Full stack Developer!</h2>
                    <p className=' max-w-[600px] lg-custom:text-2xl'>I am a passionate Full Stack Developer skilled in building dynamic and user-friendly web applications. Proficient in front-end technologies like HTML, CSS, and JavaScript, as well as back-end frameworks such as Node.js and databases like MongoDB. I enjoy solving complex problems, optimizing performance, and delivering seamless user experiences. Continuously learning and adapting to new technologies, I strive to create innovative and impactful solutions.</p>
                </div>
            </div>
        </div>
    )
}

export default About