import Image from "next/image";
import Link from "next/link";
import HoverMenu from "./hoverMenu/hoverMenu";
import HoverMenuType from "./hoverMenu/hoverMenuType";
import HoverMenuItem, { HoverMenuItemProps } from "./hoverMenu/hoverMenuItem";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const serviceItems: HoverMenuItemProps[] = [
        {
            title: "Consulting Services",
            desc: "Learn what makes our approach to consulting different.",
            href: "/#consulting-services",
            isExternal: false,
        },
        {
            title: "Auto-Blog SEO",
            desc: "Discover our powerful LLM powered auto-blog for your business.",
            href: "/#auto-blog",
            isExternal: false,
        },
        {
            title: "LLM Integrations",
            desc: "Explore the other ways we can use AI to supercharge your workflows.",
            href: "/#llm-integrations",
            isExternal: false,
        }
    ]

    const aboutUsItems: HoverMenuItemProps[] = [
        {
            title: "About Us",
            desc: "Learn more about the team beind Portland AI and it's offerings.",
            href: "/#about",
            isExternal: false,
        },
        {
            title: "Who You Are",
            desc: "Discover if our customer profiles fit your emerging business.",
            href: "/#who-you-are",
            isExternal: false,
        },
        {
            title: "Navigating AI",
            desc: "AI is new, and new can come with uncertainty. Learn to navigate this world.",
            href: "/#navigating-ai",
            isExternal: false,
        },
        {
            title: "Contact",
            desc: "Schedule a free talk to discuss how AI can supercharge your workflows.",
            href: "/#contact",
            isExternal: false,
        },
        {
            title: "Blog",
            desc: "A blog run completely autonomously by AI, check out our demo today.",
            href: "https://blog.portlandai.io",
            isExternal: true,
        },
    ]

    const largeServices = () => {
        const items = []
        for (let i = 0; i < serviceItems.length; i++) {
            items.push(<HoverMenuItem props={serviceItems[i]} />)
        }
        return items
    }

    const smallServices = () => {
        const items = []
        for (let i = 0; i < serviceItems.length; i++) {
            items.push(<SmallMenuItem props={serviceItems[i]} />)
        }
        return items
    }

    const largeAboutUs = () => {
        const items = []
        for (let i = 0; i < aboutUsItems.length; i++) {
            items.push(<HoverMenuItem props={aboutUsItems[i]} />)
        }
        return items
    }

    const smallAboutUs = () => {
        const items = []
        for (let i = 0; i < aboutUsItems.length; i++) {
            items.push(<SmallMenuItem props={aboutUsItems[i]} />)
        }
        return items
    }


    const SmallMenuItem = ({ props }: { props: HoverMenuItemProps }) => {
        return <div className="">
            <a onClick={(_) => closeMenu()} href={props.href}>
                <div className="bg-dk-600 p-2 rounded-md">
                    <h3 className="text-medium">{props.title}</h3>
                    <p className="text-light text-lt-400">{props.desc}</p>
                </div>
            </a>
        </div>
    }

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    };

    return <header>
        <div className="max-w-[2000px] mx-auto">
            <div className="flex justify-between p-4">
                <Link href="/">
                    <div className="flex items-center space-x-2">
                        <div className="">
                            <Image src={"/portlandai.svg"} alt={"PortlandAI Logo"} height={50} width={50} />
                        </div>
                        <h2 className="font-jose text-3xl text-white pt-[6px]">Portland AI</h2>
                    </div>
                </Link>
                <div className="hidden md:flex items-center space-x-4 text-txt-400 font-bold">
                    <HoverMenu props={{
                        title: "Services",
                        defaultLink: "/#offerings",
                        type: HoverMenuType.header,
                        content: <div className=''>
                            {largeServices()}
                        </div>
                    }} />
                    <HoverMenu props={{
                        title: "Our Company",
                        defaultLink: "/#about",
                        type: HoverMenuType.header,
                        content: <div className=''>
                            {largeAboutUs()}
                        </div>
                    }} />
                </div>
                <div className="hidden md:block">
                    <Link href={"/contact"}>
                        <p className="px-6 py-2 border text-lt border-lt hover:border-main-950 hover:bg-gradient-to-r from-main to-acc rounded-md">Contact Us</p>
                    </Link>
                </div>
                {isOpen ? (
                    <button onClick={handleClick} className={`md:hidden text-lt-400 w-10 h-10 focus:outline-none fixed right-4 top-[16px] z-50`}>
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
                    <button onClick={handleClick} className={`md:hidden text-lt-400 w-10 h-10 relative focus:outline-none z-50`}>
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
                    className={`top-0 right-0 w-[75vw] sm:w-[50vw] py-[75px] pb-4 space-y-2 px-4 bg-dk-700 fixed h-screen z-40 ease-in-out duration-300 border-l border-dk-400 overflow-auto ${isOpen ? "translate-x-0 " : "translate-x-full"}`}

                >
                    <div className="my-50 space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-lg font-medium">Services</h2>
                            {smallServices()}
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-lg font-medium">Our Company</h2>
                            {smallAboutUs()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
}