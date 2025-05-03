import React from 'react';
import { TypingAnimation } from "@/components/magicui/typing-animation";
import im2 from "@/assets/im2.png";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import CoursesAndInternships from '@/components/home2';
import m1  from "@/assets/m1.png"
import m2  from "@/assets/m2.png"
import m3  from "@/assets/m3.png"
import m4  from "@/assets/m4.png"
import m5 from "@/assets/m5.png"



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
<div className="bg-[#00258B] w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[336px] px-4 sm:px-8 md:px-16">
  <div className="flex flex-col items-start justify-center h-full relative">
    <h2 
      className="text-white font-[500] text-[40px] leading-[100%] tracking-[0%] font-[Rubik] w-[512px] h-[47px] absolute top-[25%] left-[10%]">
      We Have Collaborated With
    </h2>

    {/* Logos Section */}
    <div className="absolute top-[38%] left-[10%] flex gap-x-[100px] mt-[80px]">
      <img src={m5} alt="Partner 5" className="w-[89px] h-[89px]" />
      <img src={m4} alt="Partner 4" className="w-[118.04px] h-[89px]" />
      <img src={m3} alt="Partner 3" className="w-[227.5px] h-[91px]" />
      <img src={m2} alt="Partner 2" className="w-[118.04px] h-[89px]" />
      <img src={m1} alt="Partner 1" className="w-[118.04px] h-[89px]" />
    </div>
  </div>
</div>

   

<div className="h-auto flex flex-col justify-around items-center sm:items-start sm:pl-[40px] mr-28 pt-36 ml-24 mb-16">
  <h3 className="text-[#00258B] font-[500] text-[28px] sm:text-[36px] md:text-[40px] leading-[100%] tracking-[0%] font-[Rubik] w-full sm:w-[512px] h-[47px] text-center sm:text-left sm:ml-[350px]">
    Connect With Us
  </h3>

  <div className="w-full sm:w-[512px] flex flex-col gap-4 mt-6 sm:ml-[350px]">
    <input
      type="email"
      placeholder="Your Email"
      className="border border-gray-300 rounded-[8px] px-4 py-2 h-[50px] w-[509px] focus:outline-none focus:ring-2 focus:ring-blue-500"
      style={{
        height: "50px",
        width: "509px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        marginBottom: "10px",
      }}
    />
    <input
      type="tel"
      placeholder="Phone Number"
      className="border border-gray-300 rounded-[8px] px-4 py-2 h-[50px] w-[509px] focus:outline-none focus:ring-2 focus:ring-blue-500"
      style={{
        height: "50px",
        width: "509px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        marginBottom: "10px",
      }}
    />
    <textarea
      placeholder="Your Message"
      rows={5}
      className="border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      style={{
        width: "509px",
        height: "119px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        marginBottom: "10px",
      }}
    ></textarea>
  <button
  type="submit"
  className="w-[509px] h-[61px] bg-[#612EED] text-white rounded-[8px] border border-gray-300 hover:bg-[#5019c7] transition duration-300 px-6 py-2 self-center sm:self-start"
>
  Submit
</button>


  </div>
</div>





        </>
    );
};

export default Home;
