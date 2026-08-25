import { Briefcase, GraduationCap, BookOpen, FileText, School , BriefcaseBusiness } from "lucide-react";

const types = [
  { icon: Briefcase, label: 'Jobs' },
  { icon: GraduationCap, label: 'Graduate Programmes' },
  { icon: BookOpen, label: 'Scholarships' },
  { icon: FileText, label: 'Bursaries' },
  { icon: BriefcaseBusiness, label: 'Internships' },
  { icon: School , label: 'University' },
]

const Strip = () => {
    return ( 
        <section className="py-14 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <p className="text-text-muted text-[0.9rem] text-center font-semibold uppercase tracking-widest mb-8">
                    Manage every type of Application
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    {types.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-[#F5F7FA] text-sm font-medium text-gray-700">
                        <Icon size={14} className="text-[#6FA8DC]" />
                        {label}
                    </div>
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default Strip;