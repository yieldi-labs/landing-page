import Link from "next/link";

const NavLink = ({ children, href, ...props }) => (
  <Link
    href={href}
    {...props}
    className={`py-2.5 px-4 text-center rounded-lg duration-150 content-center ${props?.className || ""}`}
  >
    {children}
  </Link>
);

export default NavLink;
