import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const CTA = () => {
    return (
        <div className='pb-[250px] pt-[120px] relative overflow-clip'>
            <div className="container relative">

                <div className="max-w-4xl lg:max-w-7xl mx-auto bg-blue-600 rounded-3xl p-16 md:p-20 lg:p-28 text-center relative overflow-hidden">

                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_top_right,#4dedff,transparent_75%)] opacity-50"></div>

                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_bottom_left,#4dedff,transparent_75%)] opacity-50"></div>


                    <div className="relative z-10 mx-auto">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-12">
                            Drive India's Logistics Revolution with Us.
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                            <button className="flex items-center justify-center group w-full sm:w-auto px-4 py-2.5 sm:py-3 bg-white text-blue-600 font-semibold rounded-md transition text-sm sm:text-base">
                                Book Now
                                <MdKeyboardArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                            </button>
                            <button className="flex items-center justify-center group w-full sm:w-auto px-3 py-2.5 text-white font-semibold border border-white rounded-md transition text-sm sm:text-base">
                                Contact Us
                                <MdKeyboardArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[3200px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-white/15 bg-[radial-gradient(closest-side,#000_95%,#222222)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]">
            </div>
        </div>
    )
}

export default CTA

//[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#a46EDB_82%)]
//[radial-gradient(closest-side,#000_82%,#9560EB)]