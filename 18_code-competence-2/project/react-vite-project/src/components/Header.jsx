import { useState } from "react"
import logo from '../assets/logo.svg'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    
    return (
        <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="container">
                <div className="flex flex-wrap items-center justify-between mx-auto py-6">
                    <a href="/" className="flex items-center">
                        <img
                            src={logo}
                            className="h-8 mr-3"
                            alt="Logo"
                        />
                        <span className="self-center text-2xl font-bold text-secondary whitespace-nowrap">
                            DevSolve
                        </span>
                    </a>
                    <div className="flex md:order-2 md:hidden">
                        <button
                            onClick={handleClick}
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? '' : 'hidden'}`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <a
                                    href="/"
                                    className="block py-2 pl-3 pr-4 text-secondary hover:text-white hover:bg-primary transition duration-300 rounded md:hover:bg-transparent md:hover:text-primary md:p-0"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="block py-2 pl-3 pr-4 text-secondary hover:text-white hover:bg-primary transition duration-300 rounded md:hover:bg-transparent md:hover:text-primary md:p-0"
                                    aria-current="page"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#project"
                                    className="block py-2 pl-3 pr-4 text-secondary hover:text-white hover:bg-primary transition duration-300 rounded md:hover:bg-transparent md:hover:text-primary md:p-0"
                                    aria-current="page"
                                >
                                    Project
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="block py-2 pl-3 pr-4 text-secondary hover:text-white hover:bg-primary transition duration-300 rounded md:hover:bg-transparent md:hover:text-primary md:p-0"
                                    aria-current="page"
                                >
                                    Contact
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                
            </div>
        </nav>

    )
}

export default Header