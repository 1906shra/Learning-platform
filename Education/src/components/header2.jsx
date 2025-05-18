import { FiChevronLeft } from 'react-icons/fi';
import { FiHelpCircle } from 'react-icons/fi';
import { InteractiveHoverButton } from './magicui/interactive-hover-button';

const Header1 = () => {
    return (
      <div className="flex items-center justify-between px-4 py-6 bg-white shadow-md relative z-10 overflow-visible">
      <div className="flex items-center text-xl font-bold text-[#612EED] ">
  <FiChevronLeft className="mr-2 text-2xl cursor-pointer" />
  Course Details
</div>

        <div className="flex items-center gap-3">
          <InteractiveHoverButton className="bg-white text-[#612EED] px-4 transition duration-300 border-[#612EED]">
            Enroll Now
          </InteractiveHoverButton>
          <InteractiveHoverButton className="bg-[#612EED] text-white hover:bg-[#4b24c7] transition duration-300">
            Start Course
          </InteractiveHoverButton>
          <FiHelpCircle className="text-2xl text-gray-600 cursor-pointer hover:text-gray-800" />
        </div>
      </div>
    );
  };
  
  export default Header1;
  