import { assets } from "../assets/assets.js";
import brand_img from "../assets/brand_img.png";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container 
    mx-auto py-14 md:px-20 lg:px-32 w-full overflow-hidden font-semibold"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Pasionate About Properties, Dedicated to Your Vision{" "}
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img src={brand_img} alt="" className="w-full sm:w-1/2 max-w-lg" />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            We are a team of passionate individuals who are dedicated to creating
            properties that are not just homes, but dreams. Our commitment to
            excellence and attention to detail has earned us a reputation for
            delivering high-quality projects that exceed expectations.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg
           hover:bg-blue-800 duration-300">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
