import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Brand from "@components/ui/Brand"
import NavLink from "@components/ui/NavLink"
import { twJoin } from 'tailwind-merge'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [state, setState] = useState(false)
    const { events } = useRouter();

    // Use useEffect to add an event listener for scrolling
    useEffect(() => {
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
        setScrolled(true);
        } else {
        setScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);
    
    const navigation = [
        { title: "ABOUT", path: "#" },
        { title: "SOLUTION", path: "#solution" },
        { title: "COMPONENTS", path: "#components" },
    ]

    useEffect(() => {
        // Close the navbar menu when navigate
        const handleState = () => {
            document.body.classList.remove("overflow-hidden")
            setState(false)
        }
        events.on("routeChangeStart", () => handleState());
        events.on("hashChangeStart", () => handleState());
    }, [])

    const handleNavMenu = () => {
        setState(!state)
        document.body.classList.toggle("overflow-hidden")
    }

    return (
        <header className='fixed top-0 w-full z-40'>
            <nav className={twJoin("w-full md:static md:text-sm flex transition-all duration-150 ease-in-out", state && "fixed z-10 h-full", scrolled && "md:bg-[#F5F1EB] bg-transparent")}>
                <div className="md:custom-screen md:mx-auto gap-2 md:py-5 md:flex flex w-full md:w-auto items-end md:items-center flex-col md:flex-row lg:w-[990px]">
                    <div className={`custom-screen items-center mx-auto p-4 md:p-0 flex justify-between w-full ${scrolled ? 'bg-[#F5F1EB] md:bg-transparent' : ''}`}>
                        <Brand />
                        <div className="md:hidden">
                            <button role="button" aria-label="Open the menu" className="text-gray-500 hover:text-gray-800"
                                onClick={handleNavMenu}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 pb-3 md:pb-0 md:flex ${state ? "" : "hidden"} justify-between align-middle`}>
                        <ul className="text-[#003944] md:flex md:space-x-8 mx-5 md:space-y-0 md:font-medium py-2 md:py-0
                            border border-[#003944] rounded-lg md:bg-transparent bg-[#72BACA] md:border-none md:text-gray-700">
                            {navigation.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <Link href={item.path} key={idx} className="duration-150 hover:text-[#F5F1EB] hover:bg-[#332b29c9] h-10 px-5 py-2.5 md:rounded-[40px] md:border md:border-[#514a47] 
                                            justify-center items-center gap-2.5 inline-flex text-center font-medium text-[16px] leading-normal uppercase text-[#332B29]">
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="flex hidden">
                            <NavLink href="https://discord.gg/8aFPCXPwAd" target="_blank"
                                className="duration-150 hover:text-[#F5F1EB] hover:bg-[#332b29c9] active:bg-gray-900 h-10 w-[159px] px-5 py-2.5 rounded-[40px] 
                                    border  border-[#514a47] justify-center items-center gap-2.5 inline-flex bg-[#332b29] text-[#F5F1EB] 
                                    text-sm font-medium md:inline uppercase">
                                join discord
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar