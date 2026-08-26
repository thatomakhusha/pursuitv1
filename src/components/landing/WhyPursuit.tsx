import { CheckCircle2 } from "lucide-react";

const applications = [
    {
        org: "Standard Bank",
        role: "Technology Graduate Programme",
        status:
            "Interview",
        color: "bg-purple-500",
    },
    {
        org: "McKinsey & Company",
        role: "Business Analyst Internship",
        status:
            "Applied",
        color: "bg-[#6FA8DC]",
    },
    {
        org: "University of Cape Town",
        role: "MSc Computer Science",
        status:
            "Offer",
        color: "bg-green-500",
    },
    {
        org: "Deloitte",
        role: "Audit Bursary",
        status:
            "Assessment",
        color: "bg-amber-500",
    },
];

const WhyPursuit = () => {
    return ( 
        <section className="bg-sidebar py-24 text-white">
            <div className="grid items-center gap-16 md:grid-cols-2">
                <div className="flex flex-col gap-5 px-6">
                    <div className="inline-flex w-fit rounded-full bg-[#1F2D43] px-3 py-1.5">
                        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                            Why students love Pursuit
                        </span>
                    </div>
                    <h2 className="font-bold text-[1.8rem]">
                        Stop losing track of where you applied
                    </h2>
                    <p className="max-w-xl text-gray-300">
                        Students apply to dozens of opportunities across multiple platforms. Pursuit centralises everything 
                        so you can focus on preparing — not on spreadsheets.
                    </p>
                    <ul className="space-y-4">
                        {[
                        'See all applications and their statuses in one dashboard',
                        "Get reminded of upcoming deadlines before it's too late",
                        'Attach documents to each application for quick access',
                        'Track your interview pipeline with a visual Kanban board',
                        ].map(b => (
                        <li key={b} className="flex items-start gap-3 text-sm text-gray-300">
                            <CheckCircle2 size={16} className="text-[#6FA8DC] shrink-0 mt-0.5" />
                            {b}
                        </li>
                        ))}
                    </ul>
                    <a
                        href="#"
                        className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-primary/90"
                    >
                        Start for free
                        <span>→</span>
                    </a>
                </div>
                <div className="bg-[#1F2937] rounded-2xl p-6">
                     <div className="space-y-3">
                        {applications.map(({ org, role, status, color }) => (
                        <div key={org} className="flex items-center justify-between rounded-xl bg-sidebar px-4 py-4">
                            <div>
                                <p className="text-white text-sm font-semibold">{org}</p>
                                <p className="text-gray-500 text-xs mt-0.5">{role}</p>
                            </div>
                            
                            <span className={`text-xs font-semibold text-white px-2.5 py-1 rounded-full ${color}`}>{status}</span>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default WhyPursuit;