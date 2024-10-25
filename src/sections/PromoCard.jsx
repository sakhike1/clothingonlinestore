import { Link } from 'react-router-dom';
import AOS from 'aos';

const Hero = () => {
  AOS.init();
  return (
    <section id="hero" className="w-full mt-[-120px] " data-aos="fade-up"
      data-aos-duration="3000" >
      <div className="grid grid-cols-1 gap-4  text-white text-sm text-center  rounded-lg max-w-6xl mx-auto p-4">
        <div className="flex flex-col  justify-center items-start p-2 rounded-lg hover:shadow-xl bg-black  h-32"> {/* Reduced height here */}
          <h1 className="text-2xl ml-4 sm:text-3xl">Sale up to 50% Off</h1> {/* Adjusted text size if needed */}

          <Link to="/Product" className="relative inline-flex items-center justify-start ml-4 px-5 py-3 overflow-hidden rounded-full group">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-gray-500 opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-600">
              Shop now
            </span>
            <span className="absolute inset-0 border-[#81858b86] border rounded-full"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
