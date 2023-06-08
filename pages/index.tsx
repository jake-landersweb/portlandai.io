import Header from '@/components/header';
import ServiceCell from '@/components/serviceCell';
import Head from 'next/head';
import Link from 'next/link';
import { TbRobot } from 'react-icons/tb'
import { MdOutlineArticle } from 'react-icons/md'
import { LuLightbulb } from 'react-icons/lu'
import Image from 'next/image';
import FeedbackCell from '@/components/feedbackCell';
import SolutionCell from '@/components/solutionCell';
import Form from '@/components/form';

const Home = () => {
    return <>
        <Head>
            <title>Portland AI</title>
            <meta name="description" content="Explore contemporary discussion of the intersection of AI and other sectors of the world." />
            <link rel="canonical" href="https://portlandai.io" />
        </Head>
        <div className="bg-[url('/background.webp')] bg-cover bg-no-repeat bg-opacity-30 relative top-0 left-0 w-[100%] h-[100vh] x-[-1]">
            <div className="bg-main-950 bg-opacity-70 absolute top-0 left-0 w-[100%] h-[100%]"></div>
            <div className="relative z-10">
                <div className="">
                    <header>
                        <Header />
                    </header>
                    <div data-aos="fade-up" className="max-w-[1200px] px-4 mx-auto min-h-[70vh] md:min-h-[80vh] space-y-8 text-lt mt-8 md:mt-16">
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
                            <div className="space-y-16">
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
                                        title: 'AI SEO Tools',
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
                        <div className="text-lt mt-[-200px] md:pt-0">
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
                    <div className="bg-lt-100 px-4 text-dk py-8 md:py-16">
                        <div className="max-w-2xl mx-auto ">
                            <FeedbackCell props={{
                                author: 'Michelle Labrosse - Cheetah Learning',
                                feedback: 'Kevin has been the primary programmer for our business for the past 15 years. We‘ve gone through numerous technology changes in that time and Kevin has kept up with it all making sure our business is best leveraging the available technology to keep our highly automated business running smoothly. Besides being an astute business man who often leads the changes we need to make to stay viable, he is also very responsive to make the changes we request as well.'
                            }} />
                        </div>
                    </div>
                    <div className="bg-lt-200 px-4 text-dk py-8 md:py-16">
                        <div className="max-w-[1200px] mx-auto">
                            <div className="space-y-16">
                                <h2 className='text-4xl md:text-5xl font-bold'>Featured Offerings</h2>
                                <div className="space-y-16 md:space-y-32">
                                    <SolutionCell props={{
                                        title: 'Consulting Services',
                                        items: [
                                            {
                                                title: "Applied AI Consulting",
                                                content: <p>Our experienced team is committed to helping businesses harness the power of AI to drive efficiency and profitability. We specialize in translating complex AI concepts into real-world applications that add value to your business. From leveraging LLMs for custom chatbots to utilizing AI for data observability and processing, we work closely with our clients to identify their unique needs and tailor our services accordingly.</p>
                                            },
                                            {
                                                title: "Interdisciplinary Expertise",
                                                content: <p>We're not just technologists, but scientists with a deep understanding of molecular biology, medical sciences, and bioethics. Our interdisciplinary expertise allows us to navigate complex ethical questions, especially in sectors like pharmaceuticals, biotech, and healthcare. We can ensure that your AI initiatives are not only profitable but also ethically sound and socially responsible.</p>
                                            },
                                            {
                                                title: "AI Innovation Lab",
                                                content: <p>Our Innovation Lab is where we put our creative thinking into action, experimenting with the latest AI technologies and methodologies. The solutions we develop in our lab are designed to meet the unique challenges and opportunities in your industry. From designing efficient workflows to generating autonomous content, our Lab is committed to pushing the boundaries of what AI can do for your business.</p>
                                            }
                                        ],
                                        src: '/business-plan.svg',
                                        alt: 'People meeting in a room',
                                        linkTitle: 'Schedule a free meeting',
                                        link: 'https://calendly.com/jake-sapphirenw/30min'
                                    }} />
                                    <SolutionCell props={{
                                        title: 'Auto-Blog SEO',
                                        items: [
                                            {
                                                title: "Overview",
                                                content: <p>Meet Auto-blog, the cutting-edge blend of large language models (LLMs) and traditional programming designed to revolutionize your content generation. This tool has been developed to intelligently and autonomously manage your business blog, creating and posting relevant, high-quality content aimed at boosting organic traffic and improving your SEO. With Auto-blog, we take the manual effort out of content creation and management, providing you a seamless, streamlined approach to nurture your digital presence and engage your target audience.</p>
                                            },
                                            {
                                                title: "How It Works",
                                                content: <p>Auto-blog operates on a finely-tuned combination of LLMs and traditional programming techniques. Firstly, it identifies your business niche and extracts key topics based on your business profile and market trends. It then generates content using LLMs, ensuring relevance, readability, and keyword-richness. Following a set schedule, it autonomously posts these articles on your blog, keeping your content fresh and your audience engaged. But that's not all – Auto-blog also monitors the performance of each post, learns from user engagement metrics, and adjusts future content accordingly. This constant learning and adapting process ensures your content stays optimized, relevant, and impactful.</p>
                                            },
                                            {
                                                title: "The Auto-blog Advantage",
                                                content: <ul>
                                                    <li><span className="font-bold">Efficiency:</span> Say goodbye to the time-consuming process of brainstorming, drafting, editing, and posting blog content. Auto-blog handles all these tasks, freeing up your time to focus on your core business.</li>
                                                    <li><span className="font-bold">Consistency:</span> With Auto-blog, you never have to worry about maintaining a consistent posting schedule. It guarantees regular, timely content for your audience, building credibility and a loyal reader base.</li>
                                                    <li><span className="font-bold">SEO Improvement:</span> Auto-blog crafts keyword-optimized content aimed at boosting your site’s visibility on search engines, driving more organic traffic to your blog.</li>
                                                    <li><span className="font-bold">Adaptability:</span> Auto-blog isn't static; it's a learning tool. By analyzing user engagement and feedback, it evolves and adapts, enhancing the effectiveness of your content strategy over time.</li>
                                                    <li><span className="font-bold">Cost-effective:</span> Instead of hiring a dedicated content team, Auto-blog offers a cost-effective solution that does not compromise on quality, making it an ideal choice for businesses of all sizes.</li>
                                                </ul>
                                            }
                                        ],
                                        src: '/autoblog.svg',
                                        alt: 'Autoblog operation flowchat',
                                        linkTitle: 'Check out our live demo',
                                        link: 'https://blog.portlandai.io'
                                    }} />
                                    <SolutionCell props={{
                                        title: 'LLM Integrations',
                                        items: [
                                            {
                                                title: "Chatbot Integration",
                                                content: <p>Utilize the power of Large Language Models (LLMs) to provide round-the-clock assistance and support to your customers. Our custom-built chatbots can mimic human conversation, handle customer inquiries, and provide prompt, accurate responses. Not only will this enhance your customer service, but it will also free up valuable time and resources in your business.</p>
                                            },
                                            {
                                                title: "Vector Databases",
                                                content: <p>Leverage the power of vector databases to facilitate quick and accurate retrieval of information. Our unique AI-powered approach allows businesses to create a semantic search engine that understands the meaning behind the queries, providing highly relevant results. The integration of vector databases can revolutionize your business by providing quicker, more accurate access to the data you need.</p>
                                            },
                                            {
                                                title: "Content Generation & Curation",
                                                content: <p>With our innovative AI technology, create personalized, engaging content on a massive scale. Our AI models are capable of producing content that resonates with your target audience, whether it's for a blog, social media, or customer communication. This approach not only improves engagement but also allows your team to focus on other strategic areas of your business.</p>
                                            }
                                        ],
                                        src: '/chat-tweak.svg',
                                        alt: 'AI Chat-bot tweaking customizing',
                                        linkTitle: 'Check out our live chatbot',
                                        link: 'https://pucknorris.com/chat'
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block h-[200px] bg-lt-200" />
                    <div className="bg-main-950 p-4 text-lt md:py-16">
                        <div className="max-w-[1200px] mx-auto md:mt-[-200px]">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Home;