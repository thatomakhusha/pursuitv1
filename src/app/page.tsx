import { Container } from "@/components/ui/Container"; 
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Strip from "@/components/landing/Strip";
import HowItWorks from "@/components/landing/HowItWorks";
import WhatYouNeed from "@/components/landing/WhatYouNeed";
import WhyPursuit from "@/components/landing/WhyPursuit";
import CTA from "@/components/landing/CTA";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        
          <Hero/>
          <Container>
            <Strip/>
          </Container>
          <HowItWorks/>
          <Container>
            <WhatYouNeed/>
          </Container>
          <WhyPursuit/>
          <Container>
            <CTA/>
          </Container>
      </main>
      

    </>
  )
}