const steps = [
    {
        number: "01",
        title: "Create your account",
        description:
            "Sign up in under two minutes. Tell Pursuit about your studies and career interests.",
    },
    {
        number: "02",
        title: "Add your applications",
        description:
            "Log jobs, internships, graduate programmes, bursaries, scholarships, or university applications.",
    },
    {
        number: "03",
        title: "Track your progress",
        description:
            "Move applications through your pipeline and attach documents as you go.",
    },
];

const HowItWorks = () => {
    return ( 
        <section className="bg-background py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-text-primary">
                        How Pursuit works
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-text-secondary"> 
                        From first application to final offer, Pursuit keeps you organised at every step.
                    </p>
                </div>
                
                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {steps.map((step) => (
                            <div key={step.number} className="rounded-3xl border border-gray-200/70 bg-white p-10">
                                <span className="text-primary-light text-[2.5rem] font-bold">{step.number}</span>
                                <h3 className="mt-5 text-xl font-semibold text-text-primary">{step.title}</h3>
                                <p className="mt-3 leading-7 text-text-secondary">{step.description}</p>
                            </div>
                        ))}
                </div>
            </div>
        </section>
     );
}
 
export default HowItWorks;