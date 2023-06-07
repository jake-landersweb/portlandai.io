import Image from "next/image";
import Link from "next/link";
import HoverMenu from "./hoverMenu/hoverMenu";
import HoverMenuType from "./hoverMenu/hoverMenuType";
import HoverMenuItem from "./hoverMenu/hoverMenuItem";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    };

    return <div className="max-w-[2000px] mx-auto">
        <div className="flex justify-between p-4">
            <div className="flex items-center space-x-2">
                <div className="">
                    <Image src={"/portlandai.png"} alt={"PortlandAI Logo"} height={50} width={50} />
                </div>
                <h2 className="font-jose text-3xl text-white pt-1">Portland AI</h2>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-txt-400 font-bold">
                <HoverMenu props={{
                    title: "Services",
                    defaultLink: "#services",
                    type: HoverMenuType.header,
                    content: <div className=''>
                        <HoverMenuItem props={{
                            title: 'Schedule Management',
                            desc: "Schedule management makes up the backbone of what Crosscheck gives team owners.",
                            href: '/schedule-management',
                            isExternal: false,
                        }} />
                    </div>
                }} />
                <HoverMenu props={{
                    title: "About Us",
                    defaultLink: "#features",
                    type: HoverMenuType.header,
                    content: <div className=''>
                        <HoverMenuItem props={{
                            title: '',
                            desc: "Schedule management makes up the backbone of what Crosscheck gives team owners.",
                            href: '/schedule-management',
                            isExternal: false,
                        }} />
                    </div>
                }} />
            </div>
            <div className="hidden md:block">
                <Link href={"/contact"}>
                    <p className="px-6 py-2 border border-txt hover:border-main-950 hover:bg-gradient-to-r from-acc1 to-acc3 rounded-md">Login</p>
                </Link>
            </div>
            {isOpen ? (
                <button onClick={handleClick} className={`md:hidden text-txt-400 w-10 h-10 focus:outline-none fixed right-4 top-[14px] z-50`}>
                    <span className="sr-only">Open main menu</span>
                    <div
                        className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                        <span aria-hidden="true" className={`${isOpen ? 'rotate-45' : '-translate-y-1.5'} block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}></span>
                        <span aria-hidden="true"
                            className={`${isOpen ? 'opacity-0' : ''}  block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out`}></span>
                        <span aria-hidden="true"
                            className={`${isOpen ? "-rotate-45" : "translate-y-1.5"}  block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out`}></span>
                    </div>
                </button>
            ) : (
                <button onClick={handleClick} className={`md:hidden text-txt-400 w-10 h-10 relative focus:outline-none z-50`}>
                    <span className="sr-only">Open main menu</span>
                    <div
                        className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                        <span aria-hidden="true" className={`${isOpen ? 'rotate-45' : '-translate-y-1.5'} block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}></span>
                        <span aria-hidden="true"
                            className={`${isOpen ? 'opacity-0' : ''}  block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out`}></span>
                        <span aria-hidden="true"
                            className={`${isOpen ? "-rotate-45" : "translate-y-1.5"}  block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out`}></span>
                    </div>
                </button>
            )}
            <div
                className={`top-0 right-0 w-[75vw] sm:w-[50vw] py-[75px] pb-4 space-y-2 px-4 bg-bg fixed h-screen z-40 ease-in-out duration-300 border-l border-bg-400 overflow-auto ${isOpen ? "translate-x-0 " : "translate-x-full"}`}
            > </div>
        </div>
    </div>
}