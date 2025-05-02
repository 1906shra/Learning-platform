import React from 'react';
import { TypingAnimation } from "@/components/magicui/typing-animation";
import im2 from "@/assets/im2.png";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import CoursesAndInternships from '@/components/home2';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative -mt-6 px-4 flex flex-col lg:flex-row items-start lg:items-start">
                {/* Left Content */}
                <div className="lg:absolute top-[123px] left-[113px] max-w-[665px] bg-white px-4">
                    <h1 className="font-inter font-bold text-[2.5rem] leading-none tracking-tight text-black text-left">
                        <TypingAnimation>Choose your path. Grow your career.</TypingAnimation>
                    </h1>

                    <div className="mt-6 max-w-[452px]">
                        <p className="font-inter text-[1.125rem] sm:text-[1.25rem] font-medium text-gray-800 leading-snug text-left">
                            Expert-led programs. Job-ready certification. 10,000+ ways to Grow.
                        </p>
                    </div>

                    <div className="mt-6 flex gap-4">
                        <InteractiveHoverButton className="bg-[#612EED] text-white hover:bg-[#4b24c7] transition duration-300">
                            Enroll Now
                        </InteractiveHoverButton>
                        <InteractiveHoverButton className="bg-white text-[#612EED] px-4 transition duration-300 border-[#612EED]">
                            Explore Courses
                        </InteractiveHoverButton>
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:absolute top-[123px] right-[50px] w-[470px] h-[313px] hidden lg:block">
                    <img src={im2} alt="Decorative" className="w-full h-full object-contain" />
                </div>

                {/* Responsive fallback for smaller screens */}
                <div className="mt-10 lg:hidden w-full flex justify-center">
                    <img src={im2} alt="Decorative" className="w-[90%] max-w-[470px] h-auto object-contain" />
                </div>
            </div>

            {/* Courses and Internships Section at Bottom */}
            <div className="mt-[450px] mb-40 w-full px-4 flex flex-col lg:flex-row items-start lg:items-start ml-[-75px]">
    <CoursesAndInternships />
</div>



        </>
    );
};

export default Home;
