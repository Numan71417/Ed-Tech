// Icons Import
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";

// Image and Video Import
import Banner from "../assets/Images/banner.mp4";
import homeVid from '../assets/homevid.mp4'
import shoeDesigning from '../assets/shoedesigning.mp4'
// Component Imports
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";
import CTAButton from "../components/core/HomePage/Button";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import HighlightText from "../components/core/HomePage/HighlightText";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div>
      {/* Section 1 */}
      <div className="mt-12 relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white ">
        {/* Become a Instructor Button */}
        {/* <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link> */}

        {/* Heading */}
        <div className="flex flex-row gap-2">

          <div className="ml-20 flex flex-col">
            <div className="text-left text-5xl font-bold">
              Empower Your Future with
              <HighlightText text={"Designing Skills,"} />
            </div>

            {/* Sub Heading */}
            <div className="mt-3 w-[90%]  text-lg  text-richblack-300">
              With our online courses, you can learn at your own pace, from
              anywhere in the world, and get access to a wealth of resources,
              including hands-on projects, notes, and personalized feedback from
              instructors.
            </div>

              {/* Expand your Imagination through{" "}
              <span className="text-[#35ADB2] ">Graphic Designing</span> */}
            <div className="mt-4 w-[90%]  text-sm  text-richblack-300">
            <Typewriter
                options={{
                  strings: ["Expand your Imagination by Graphic Designing" , "Turn your ideas to reality"],
                  autoStart: true,
                  loop: true,
                  delay:75,
                }}
              />
            </div>
          </div>

          <div className="width-200"></div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <div className="flex items-center gap-2  py-1 px-2 bg-black rounded-2xl btn-color1">
            <button className="btn inline-block  ">Start Learning</button>
            <FaChevronCircleRight />
          </div>

          <div className="flex items-center gap-2">
            <button className="btn inline-block  text-[#35ADB2] underline">
              About Us
            </button>
            <FaChevronCircleRight />
          </div>
        </div>

        {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={homeVid} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            videoUrl={shoeDesigning}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"designing potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Embark on a creative journey with our expert-curated Graphic Design, UI/UX courses. Dive into the world of visual excellence and nurture your design skills. Elevate your craft and career prospects through hands-on learning with our dedicated instructors. Join us for a transformative experience tailored to thrive in the dynamic realm of graphic design and user experience."
            }
            ctabtn1={{
              btnText: "Explore Courses",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"grad-text"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        {/* <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div> */}

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="text-pure-greys-5 bg-grays">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore All Courses
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8  ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[65%] text-white ">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 px-3 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}

        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>

        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
