import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import WorksHeader from "@/components/WorksHeader";
import { HeroFeatureCard, MetaCard, WorkGridCard, UploadCard } from "@/components/WorkCards";

export default function WorksPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Sidebar />
      
      <div className="lg:ml-20 pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        <WorksHeader />
        
        <div className="grid grid-cols-12 gap-6">
          <HeroFeatureCard />
          <MetaCard />
          <WorkGridCard 
            title="CHROMATIC_DENSITY" 
            sub="POST_PRODUCTION // GRADED" 
            img="https://lh3.googleusercontent.com/aida/ADBb0uhzb8zZmDDtjMX-CeC29KjYrCJlQ-WrdHTJDW8207L1lJ3iWoViV7NweHoZCqcVTK41u1dkAxvNU9EUnLaX54cNDscM_54sNqftsaislnHYTy1wyf1lVRrUMeT39-CVEsf68D6trANgE74JLozQHAwiFMrmAU_ap8kWpnnvuPbiWP7jM9cufWAVTexzuZDOYdQ6fj5yyq5CFVI900uxPpju8PPdk4V7h7j1orsCHlyc9qWWps3qAjHWiz0yWdNTjaU39YY692rthVQ"
            delay={0.2}
          />
          <UploadCard />
          <WorkGridCard 
            title="LENS_METRICS_04" 
            sub="ANAMORPHIC_TEST // 2.39:1" 
            img="https://lh3.googleusercontent.com/aida/ADBb0uhzb8zZmDDtjMX-CeC29KjYrCJlQ-WrdHTJDW8207L1lJ3iWoViV7NweHoZCqcVTK41u1dkAxvNU9EUnLaX54cNDscM_54sNqftsaislnHYTy1wyf1lVRrUMeT39-CVEsf68D6trANgE74JLozQHAwiFMrmAU_ap8kWpnnvuPbiWP7jM9cufWAVTexzuZDOYdQ6fj5yyq5CFVI900uxPpju8PPdk4V7h7j1orsCHlyc9qWWps3qAjHWiz0yWdNTjaU39YY692rthVQ"
            delay={0.6}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
