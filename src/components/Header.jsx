import { useState } from "react"
import { Link, NavLink } from "react-router"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <div  className="top-0 bg-mainBg left-0 w-[100%] text-white flex justify-between sticky z-10 items-center py-7 font-serif font-extrabold px-[10%]">
            <div>
                <Link to="/" className="max-[425px]:text-3xl text-5xl"><span className="hover:text-mainColor">Port</span><span className="hover:text-mainColor">folio</span></Link>
            </div>
            {/* Desktop Menu */}
            <div className="flex header-custom:gap-16 text-2xl max-header-custom:hidden">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/project">Project</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <button className="header-custom:hidden min-[425px]:text-2xl hover:underline" onClick={() => { setIsMenuOpen(!isMenuOpen) }}><span className="hover:text-[#0ef]">M</span><span className="hover:text-[#0ef]">E</span><span className="hover:text-[#0ef]">N</span><span className="hover:text-[#0ef]">U</span></button>

            {/* Mobile Menu */}
            {
                isMenuOpen && (
                    <div className="shadow-lg shadow-black z-10 grid gap-y-5 left-0 w-full text-center justify-center top-24 bg-white text-black absolute header-custom:gap-28 min-[425px]:text-2xl header-custom:hidden">
                        <NavLink to="/" className="hover:underline">Home</NavLink>
                        <NavLink to="/about" className="hover:underline">About</NavLink>
                        <NavLink to="/skills" className="hover:underline">Skills</NavLink>
                        <NavLink to="/project" className="hover:underline">Project</NavLink>
                        <NavLink to="/contact" className="hover:underline">Contact</NavLink>
                    </div>
                )
            }
        </div>
    )
}

export default Header