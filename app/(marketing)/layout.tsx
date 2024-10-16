import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const MarketingLayout = ({ 
    children 
}: { 
    children: React.ReactNode // ReactNode est un type de données qui accepte n'importe quel type de données
}) => {
    return (
        <div className="h-full bg-slate-100">
            <Navbar />
            <main className="pt-40 pb-20 bg-slate-100">
                {children}
            </main>
            <Footer />
        </div>
    )
    
    };

export default MarketingLayout;