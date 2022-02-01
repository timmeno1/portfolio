import { MouseEvent } from "react";
import { LinksType } from "../../App";

type NavbarPropsType = {
  links: Array<LinksType>;
};

export const Navbar = (props: NavbarPropsType) => {

const handleClick = (link:string) => {
    const location = document.getElementById(link.slice(1))?.offsetTop 
    window.scrollTo(location? {top:location-64, behavior:"smooth"} : undefined)
}

  return (
    <nav className="-mb-14 md:px-4 text-sm md:text-base lg:text-lg sticky w-full top-0 left-0 z-20 bg-gray-800 shadow-md shadow-teal-200/20">
      <div className=" md:container flex items-center justify-center md:justify-end h-16">
        <ul className="flex items-center gap-4">
          {props.links.map((link) => (
            <li key={link.id}>
              <a
                onClick={(e:MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault()
                    handleClick(link.url)
                }}
                href={link.url}
                className="py-1 px-2 md:py-2 md:px-4 rounded-lg flex items-center select-none transition-all duration-300 hover:bg-indigo-600 hover:shadow-md hover:shadow-indigo-600/40 hover:active:shadow-none hover:active:bg-indigo-700 bg-indigo-500"
              > {link.icon}
              <span className="ml-1">{link.caption}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
