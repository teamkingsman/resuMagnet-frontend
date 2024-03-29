import Logo from "../LogoAnimation/Logo";
import { FaAmazon } from "react-icons/fa6";
import { FaCcAmazonPay } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { FaEbay } from "react-icons/fa";
import { SiIbm } from "react-icons/si";

const AboutUs = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 mt-4 mb-4" >
            <h1 className="text-2xl md:text-3xl font-extrabold py-1 text-sub_color">Welcome to Resumagnet</h1>
            <p className="text-lg md:text-xl mb-4 text-main">Crafting Your Professional Journey Since January 2024</p>
            <hr className="text-highlight_color"/>
            <div className="team-section mt-3">
                <h2 className="text-xl md:text-2xl font-semibold text-sub_color">Meet the Kingsman Team</h2>
                <p className="py-2">
                    We are a dedicated group of professionals passionate about helping individuals create
                    compelling CVs, resumes, and cover letters that stand out in the competitive job market.
                    With a combined experience of several years, our team brings expertise and innovation to
                    the table.
                </p>
                <Logo></Logo>
            </div>

            <div className="mission-section">
                <h2 className="text-xl md:text-2xl font-semibold text-sub_color">Our Mission</h2>
                <p className="py-2">
                    At Kingsman, our mission is to empower you on your professional journey. We understand
                    the importance of a well-crafted CV and cover letter in opening doors to new
                    opportunities. Our platform is designed to simplify the process, allowing you to focus on
                    showcasing your skills and experiences.We offer you the best online resume builder and free professional advice from career experts. We’ll guide you through the entire recruitment process, all the way to your dream job.
                </p>
            </div>
            <div className="mission-section">
                <h2 className="text-xl md:text-2xl font-semibold text-sub_color">Our Team Members</h2>
                <p className="py-2">
                    Meet the brilliant minds behind Kingsman Team - a dynamic ensemble of innovators, creatives, and professionals, each weaving their unique skills into the tapestry of our success.
                    <li className="px-4 py-2 text-sm md:text-lg lg:text-xl">Firoz Ahammad <sub>(MERN Stack Developer)</sub></li>
                    <li className="px-4 py-2 text-sm md:text-lg lg:text-xl">Md Sakib Hossion <sub>(MERN Stack Developer)</sub></li>
                    <li className="px-4 py-2 text-sm md:text-lg lg:text-xl">Syed Abdullah Herra <sub>(MERN Stack Developer)</sub></li>
                    <li className="px-4 py-2 text-sm md:text-lg lg:text-xl">Moin Uddin <sub>(MERN Stack Developer)</sub></li>
                    <li className="px-4 py-2 text-sm md:text-lg lg:text-xl">Barshon Saha Ayon <sub>(MERN Stack Developer)</sub></li>
                    <li className="px-4 py-2 text-sm md:text-lg lg:text-xl">Joy Biswas <sub>(MERN Stack Developer)</sub></li>
                </p>
            </div>

            <div className="timeline-section">
                <h2 className="text-xl md:text-2xl mt-3 font-semibold text-sub_color">We’re Building the World’s Largest and Best Career Site to Help You Find the Job You Want.</h2>
                <p className="py-2">
                    Since our inception in January 2024, we have been committed to providing top-notch
                    services. We continuously evolve our platform, incorporating the latest trends in resume
                    building and ensuring that you have the tools you need to succeed in your career.
                </p>
            </div>

            <div className="vision-section">
                <h2 className="text-xl md:text-2xl mt-3 font-semibold text-sub_color">Our Vision</h2>
                <p className="py-2">
                    We envision a future where every professional has the opportunity to present their
                    achievements in the best light possible. Through innovation and user-centric design, we
                    aim to become the go-to platform for individuals seeking to enhance their professional
                    profiles.
                </p>
            </div>
            <div className="vision-section">
                <h2 className="text-xl md:text-2xl mt-3 font-semibold text-sub_color">Get Hired Faster: Companies Prefer Candidates with Resumes from Resumegnet</h2>
                <div className="max-w-5xl px-2">
                    <marquee behavior="" direction="">
                        <p className="flex gap-5 px-5 py-2">
                            <FaAmazon className="text-2xl md:text-5xl" />
                            <FaCcAmazonPay  className="text-2xl md:text-5xl"/>
                            <FaGoogle className="text-2xl md:text-5xl"/>
                            <FaMicrosoft className="text-2xl md:text-5xl"/>
                            <FaEbay className="text-2xl md:text-5xl"/>
                            <SiIbm className="text-2xl md:text-5xl" />
                            </p>
                        <p></p>
                    </marquee>
                </div>
            </div>

            <div className="contact-section">
                <h2 className="text-xl md:text-2xl mt-3 font-semibold text-sub_color">Get in Touch</h2>
                <p className="py-2">
                    Have questions or suggestions? We would love to hear from you! Contact the Kingsman Team
                    at <a href="team.kingsman2024@gmail.com" className="font-bold">team.kingsman2024@gmail.com</a>.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;