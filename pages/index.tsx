import Header from '@/components/header';
import ServiceCell from '@/components/serviceCell';
import Head from 'next/head';
import Link from 'next/link';
import { TbRobot } from 'react-icons/tb'
import { MdOutlineArticle } from 'react-icons/md'
import { LuLightbulb } from 'react-icons/lu'
import Image from 'next/image';

const Home = () => {
    return <>
        <Head>
            <title>Portland AI</title>
            <meta name="description" content="Explore contemporary discussion of the intersection of AI and other sectors of the world." />
            <link rel="canonical" href="https://portlandai.io" />
        </Head>
        <div className="bg-custom relative">
            <div className="tint-blue absolute"></div>
            <div className="relative z-10">
                <div className="">
                    <header>
                        <Header />
                    </header>
                    <div data-aos="fade-up" className="max-w-[1200px] p-[65px] px-4 space-y-8 min-h-screen mx-auto text-lt">
                        <h1 className='text-5xl md:text-7xl font-bold text-center max-w-3xl mx-auto'>Unleashing the Power of AI for Your Business</h1>
                        <p className='text-xl md:text-2xl text-center max-w-3xl mx-auto'>Practical, Pioneering AI Solutions, Merging Interdisciplinary Expertise for Niche Industry Success, Crafted in the Pacific Northwest</p>
                        <div className="grid place-items-center">
                            <Link href={"/contact"}>
                                <p className="px-6 py-4 border border-txt hover:border-main-950 hover:bg-gradient-to-r from-acc1 to-acc3 rounded-md font-medium tracking-wider">LEARN HOW WE CAN HELP</p>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-lt-100 text-dk py-16 md:py-32 md:space-y-32">
                        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                            <div data-aos="fade-up" className="space-y-16">
                                <h2 className='text-4xl md:text-5xl font-bold'>What We Offer</h2>
                                <div className="grid lg:grid-cols-3 gap-4">
                                    <ServiceCell props={{
                                        icon: <LuLightbulb size={50} />,
                                        title: 'Innovations',
                                        description: 'Portland AI goes beyond traditional consulting services, offering a suite of innovative products and services designed to empower businesses in unique and impactful ways. Our goal is to help you unlock the full potential of AI, whether that means creating efficient workflows, driving customer engagement, or leveraging data for actionable insights.',
                                        href: '#consulting'
                                    }} />
                                    <ServiceCell props={{
                                        icon: <MdOutlineArticle size={50} />,
                                        title: 'Auto Blog',
                                        description: "Seamlessly combine AI prowess and traditional programming expertise: the Autonomous AI-Powered Blog Management Platform. Our platform is a testament to the creative potential of AI, offering a fully automated, AI-run blog operation that can create, manage, and grow your online presence. It's not just a tool—it's a dynamic partner that can take your content strategy to the next level.",
                                        href: '#consulting'
                                    }} />
                                    <ServiceCell props={{
                                        icon: <TbRobot size={50} />,
                                        title: 'LLM Integrations',
                                        description: "Embrace the future of content strategy with PortlandAI's innovative solutions designed to harness the power of AI for unparalleled content amalgamation and utilization. Our unique approach integrates advanced AI technologies such as chatbots and vector databases, offering a transformational content experience.",
                                        href: '#consulting'
                                    }} />
                                </div>
                            </div>
                        </div>
                        <div className="text-lt">
                            <div className="md:grid grid-cols-7">
                                <div className="col-span-3 overlap p-4 md:p-0">
                                    <Image src={'/portland.jpg'} alt={'Portland, OR city skyline'} height={1000} width={1500} />
                                </div>
                                <div className="bg-main-900 pt-[300px] col-span-4 p-8 md:p-16 md:pl-32 space-y-4 md:z-[1] md:relative">
                                    <h2 className='text-4xl md:text-5xl font-bold'>About Portland AI</h2>
                                    <div className="space-y-4 md:max-w-xl">
                                        <p>Situated in the vibrant Pacific Northwest, Portland AI is a pioneering AI consulting firm focused on transforming businesses through the strategic application of AI technologies. We blend our interdisciplinary expertise in genetics, molecular biology, and computer science to create bespoke AI solutions, particularly for niche industries within the pharmaceutical, biotechnical, and medical fields.</p>
                                        <p>Our team is not just about offering expert services; we believe in fostering partnerships. From crafting your business's AI strategy to developing tailored AI applications, we're with you at every step, empowering your business to thrive in this AI-driven era.</p>
                                        <p>Portland AI was born from a vision to be the leading AI consulting firm in the Pacific Northwest. Today, we're proud to work with diverse businesses, leveraging our unique AI solutions to shape an empowered future.</p>
                                        <p>Welcome to Portland AI – where innovation meets practicality, and businesses meet their AI potential. Let's embark on this AI journey together.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Home;