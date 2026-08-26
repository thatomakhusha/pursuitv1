const CTA = () => {
    return ( 
        <section className="py-24 text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold text-text-primary">
                    Ready to take control of your career?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
                    Join the students who use Pursuit to land the opportunities they deserve.
                </p>
                <div className="mt-8">
                    <a
                        href="/signup"
                        className="rounded-xl bg-primary px-7 py-4 font-bold text-white text-[1.1rem] shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98]"
                    >
                        Create your free account
                    </a>
                </div>
                
            </div>
        </section>
     );
}
 
export default CTA;