import TextRevealByWord from "./ui/text-reveal"

const Mission = () => {
    return (
        <div className="bg-[#111111] w-full py-12 md:py-24 lg:py-32">
            <div className="container max-w-[600px]">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-white via-white to-[#111111] text-transparent bg-clip-text mb-6">
                    Our Mission
                </h2>
                <div>
                    <TextRevealByWord text="At LogiSetu, we aim to digitally transform India's logistics ecosystem by providing a unified, end-to-end transportation pipeline. We leverage real-time government data and AI-powered optimization to streamline load matching, route planning, and vehicle tracking—making logistics easier, faster, and more profitable for operators." />
                </div>
            </div>
        </div>
    )
}

export default Mission