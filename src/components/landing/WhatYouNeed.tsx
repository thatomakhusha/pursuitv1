import { LayoutDashboard, Bell, FileText, Book } from "lucide-react";

const needs = [
    {
        icon: LayoutDashboard,
        title: "Unified Dashboard",
        description:
            "See all your applications at a glance. Track statuses, deadlines, and progress from a single command centre.",
    },
    {
        icon: Bell,
        title: "Document Vault",
        description:
            "Store your CV, transcripts, cover letters, and certificates securely. Attach them to applications instantly.",
    },
    {
        icon: FileText,
        title: "Deadline Tracking",
        description:
            "Never miss a closing date. Pursuit surfaces upcoming deadlines so you can prioritise what matters most.",
    },
    {
        icon: Book,
        title: "Kanban Pipeline",
        description:
            "Visualise your application journey from Saved through to Offer. Move cards as you progress.",
    },
];

const WhatYouNeed = () => {
    return ( 
        <section className="bg-white py-24">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-text-primary">
                        Everything you need
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-text-secondary"> 
                        Powerful tools designed around the real challenges students face during their career search.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {needs.map((need) => {
                        const Icon = need.icon;

                        return (
                            <div
                                key={need.title}
                                className="flex gap-5 rounded-3xl border border-transparent bg-background px-8 py-6 transition-all duration-500 ease-in-out hover:border-primary-hover-mid"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                                    <Icon className="h-5 w-5 text-primary" />
                                </div>
                                

                                <div>
                                    <h3 className="text-[1rem] font-semibold text-text-primary">
                                        {need.title}
                                    </h3>

                                    <p className="mt-3 text-[0.9rem] text-text-secondary">
                                        {need.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
        </section>
     );
}
 
export default WhatYouNeed;