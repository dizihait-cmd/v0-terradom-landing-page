import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { StagesSection } from "@/components/stages-section"
import { CasesSection } from "@/components/cases-section"
import { GuaranteesSection } from "@/components/guarantees-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <AdvantagesSection />
      <StagesSection />
      <CasesSection />
      <GuaranteesSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
