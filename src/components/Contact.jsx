import { GoDotFill } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className='bg-mainBg text-textColor min-h-[calc(100vh-104px)] w-[100%] px-[10%]'>
            <div className="py-32">
                <div className="border border-[#0ef] shadow-md shadow-[#0ef] rounded-xl min-h-[500px] p-5 sm-custom:p-10 px-5px  sm-custom:px-20 grid contact-custom:grid-cols-2 items-center gap-20">

                    <div>
                        <div className="w-52 sm-custom:w-72 rounded-3xl p-2 sm-custom:p-3 sm-custom:text-2xl font-bold bg-black text-[#0ef] flex items-center gap-5"><span><GoDotFill className="text-[#38ff38]" /></span><p>Available for work</p></div>
                        <h1 className="text-[25px] sm-custom:text-[40px] font-bold pb-3 pt-8">Drop me a line or say 👋 on social networks</h1>
                        <p className="text-[18px] sm-custom:text-[22px]">{`Whether you're a web developer in need of support or an early-stage company looking to level up your development, I'd love to talk about your project. If you want to develop your website, let's collaborate and bring your vision to life`}</p>
                    </div>

                    <div className="grid justify-center">
                        <img src="/images/dev1.jpg" alt="developer img" className="rounded-xl" />
                        <div className="py-5">
                            <p className="text-[15px] smtsm-custom:text-[20px] sm-custom:text-2xl font-bold">viranisahil004@gmail.com</p>
                        </div>
                        <div className="flex gap-10">
                            <a target='_blank' href="https://www.linkedin.com/in/sahil-virani-9462b3346/">
                                <FaLinkedinIn className='p-1 text-mainColor hover:bg-mainColor hover:text-mainBg transition-all duration-100' size={45} />
                            </a>
                            <a target='_blank' href="">
                                <MdEmail className='p-1 text-mainColor hover:bg-mainColor hover:text-mainBg transition-all duration-100' size={45} />
                            </a>
                            <a target='_blank' href='https://github.com/virani-sahil'>
                                <FaGithub className='p-1 text-mainColor hover:bg-mainColor hover:text-mainBg transition-all duration-100' size={45} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact