import React from 'react';
import { MdVerifiedUser, MdDashboard } from 'react-icons/md';
import { TbPigMoney } from "react-icons/tb";

interface AdvantageCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const Advantage = () => {
    return (
        <div className="w-full py-12 md:py-24 lg:py-32">
            <div className="container">
                <h2 className="text-4xl text-center md:text-5xl font-bold pb-1.5 mb-1.5 tracking-tight bg-gradient-to-b from-white via-white to-[#111111] text-transparent bg-clip-text">
                    Competitive Advantage
                </h2>
                <p className="mb-16 text-center text-zinc-400 text-md md:text-lg font-medium">
                    LogiSetu is the first ULIP Integrator in the Logistics Space, Offering:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-between">
                    <AdvantageCard
                        icon={<MdVerifiedUser className="text-4xl text-zinc-400" />}
                        title="Real-Time, Government-Verified Data"
                        description="For accurate loads, routes, and compliance."
                    />
                    <AdvantageCard
                        icon={<MdDashboard className="text-4xl text-zinc-400" />}
                        title="Unified Platform"
                        description="Simplifying logistics for operators and shippers alike."
                    />
                    <AdvantageCard
                        icon={<TbPigMoney className="text-4xl text-zinc-400" />}
                        title="Cost-Effective Solutions"
                        description="Affordable for small and medium operators, giving us a competitive edge."
                    />
                </div>
            </div>
        </div>
    );
};

const AdvantageCard: React.FC<AdvantageCardProps> = ({ icon, title, description }) => {
    return (
        <div>
            <div className="mb-6">{icon}</div>
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
            <p className="text-zinc-400">{description}</p>
        </div>
    );
};

export default Advantage;
