import { Target } from "lucide-react";

const Footer = () => {
    return ( 
        <footer className="bg-sidebar py-10 px-6">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
                <a href="/" className="flex items-center gap-3">
                    <div className="bg-primary p-1.5 text-white rounded-md">
                        <Target size={15}/>
                    </div>
                    <span className="text-white font-bold text-[1rem]">
                        Pursuit
                    </span>
                </a>
                <p className="text-text-secondary text-[0.85rem]">
                    © 2026 Pursuit. Built for students, by students.
                </p>
                <div className="flex gap-4 text-text-secondary text-[0.9rem]">
                    <a href="/privacy"className="hover:text-white">
                        Privacy
                    </a>
                    <a href="/terms" className="hover:text-white">
                        Terms
                    </a>
                    <a href="/contact" className="hover:text-white transition-colors duration-200" >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;