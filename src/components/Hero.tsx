import { cn } from "@/lib/utils"
import AnimatedShinyText from "./ui/animated-shiny-text"
import { MdKeyboardArrowRight } from "react-icons/md"

const Hero = () => {
  return (
    <div className="relative py-36">
      <div className="container">

        <div className="z-10 flex mb-12 items-center justify-center">
          <div
            className={cn(
              "group rounded-md border text-base text-white bg-white/5 border-white/20 backdrop-blur"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-5 py-2">
              <span>Introducing LogiSetu</span>
            </AnimatedShinyText>
          </div>
        </div>

        <h1 className="text-center text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-tight lg:leading-tight md:font-medium max-w-[1200px] mx-auto mb-3 md:mb-6 bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text text-transparent">
          Transforming the Future of <span className="p-1 bg-gradient-to-l from-[#3B82F6] via-[#4dedff] to-white text-transparent bg-clip-text"> Transportation.</span>
        </h1>
        <p className="mb-6 md:mb-12 text-center text-zinc-400 text-lg md:text-xl font-medium">
            Revolutionizing India's Logistics with Digital Efficiency on LogiSetu.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button className="flex items-center justify-center group w-full sm:w-auto px-3 py-2.5 sm:py-3 bg-white text-black font-semibold rounded-md transition text-sm sm:text-base shadow-lg">
            Invest in Our Vision
            <MdKeyboardArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button className="flex items-center justify-center group w-full sm:w-auto px-3 py-2.5 text-white font-semibold border border-white rounded-md transition text-sm sm:text-base shadow-lg">
            Contact Us
            <MdKeyboardArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent opacity-10"></div> */}

    </div>
  )
}

export default Hero