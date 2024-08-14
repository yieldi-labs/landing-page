import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Brand from '../Brand'
import NavLink from '../NavLink'
import styles from '../../../styles/navbar.module.css'

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
        { title: "ABOUT", path: "#about" },
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
            <nav className={`w-full md:static md:text-sm ${state ? "fixed z-10 h-full" : ""} ${scrolled ? 'bg-[#F5F1EB]' : ''}`}>
                <div className="custom-screen items-center mx-auto py-3 md:py-5 md:flex flex justify-center">
                    <div className="custom-screen items-center mx-auto md:flex flex justify-center">
                    {/* <div className="flex items-center justify-between py-3 md:py-5 md:block"> */}
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
                    <div className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:flex ${state ? "" : "hidden"} justify-between align-middle`}>
                        <ul className='text-gray-700 space-y-6 md:flex md:space-x-8 md:ml-5 md:space-y-0 md:text-gray-600 md:font-medium'>
                            {navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className={styles.btn + ' duration-150 hover:text-gray-900 h-10 px-5 py-2.5 rounded-[40px] border border-[#514a47] justify-center items-center gap-2.5 inline-flex'}>
                                        <Link href={item.path} className="block">
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className='flex'>
                            <NavLink
                                href="/get-started"
                                className={styles.btn + ' ' + styles.btnLaunch + ' font-medium text-sm text-white hover:bg-gray-600 active:bg-gray-900 md:inline w-[159px] h-10 px-5 py-2.5 bg-[#332b29] rounded-[40px] justify-center items-center gap-2.5 inline-flex'}
                            >
                                Launch App
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar