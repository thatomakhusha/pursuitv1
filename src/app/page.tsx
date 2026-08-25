import { Container } from "@/components/ui/Container"; 
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Strip from "@/components/landing/Strip";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        
          <Hero/>
          <Container>
            <Strip/>
          </Container>
      </main>
      

    </>
  )
}