import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Brand from "@components/ui/Brand"
import { twMerge } from 'tailwind-merge'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { events } = useRouter();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const navigation = [
        { title: "ABOUT", path: "#" },
        { title: "SOLUTION", path: "#solution" },
        { title: "COMPONENTS", path: "#components" },
    ]

    useEffect(() => {
        const handleRouteChange = () => {
            document.body.classList.remove("overflow-hidden")
            setIsMenuOpen(false)
        }
        events.on("routeChangeStart", handleRouteChange);
        events.on("hashChangeStart", handleRouteChange);
        return () => {
            events.off("routeChangeStart", handleRouteChange);
            events.off("hashChangeStart", handleRouteChange);
        }
    }, [events])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        document.body.classList.toggle("overflow-hidden")
    }

    const navClasses = twMerge(
        "w-full md:static md:text-sm flex transition-all duration-150 ease-in-out px-0 md:px-10",
        isMenuOpen && "fixed z-10 h-full",
        scrolled && "md:bg-secondary bg-transparent"
    )

    const headerClasses = twMerge(
        "custom-screen items-center mx-auto p-4 md:p-0 flex justify-between w-full",
        scrolled && 'bg-secondary md:bg-transparent'
    )

    return (
        <header className='fixed top-0 w-full z-40'>
            <nav className={navClasses}>
                <div className="md:custom-screen md:mx-auto gap-2 md:py-5 md:flex flex items-end md:items-center flex-col md:flex-row w-full">
                    <div className={headerClasses}>
                        <Brand />
                        <button
                            className="text-gray-500 hover:text-gray-800 md:hidden"
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className={`flex-1 pb-3 md:pb-0 md:flex ${isMenuOpen ? "" : "hidden"} justify-between align-middle`}>
                        <div className="flex flex-1 justify-end">
                            <ul className="text-dark md:flex md:space-x-8 md:space-y-0 md:font-medium py-2 md:py-0
                                border border-dark rounded-lg md:bg-transparent bg-accent md:border-none md:text-gray-700">
                                {navigation.map((item, idx) => (
                                    <li key={idx}>
                                        <Link href={item.path} className="duration-150 hover:text-secondary hover:bg-primary/80 h-10 px-5 py-2.5 md:rounded-nav md:border md:border-primary-light 
                                            justify-center items-center gap-2.5 inline-flex text-center font-medium text-nav leading-normal uppercase text-primary">
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar