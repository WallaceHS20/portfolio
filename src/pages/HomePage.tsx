import { AboutSection } from "@/components/sections/AboutSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { HeroSection } from "@/components/sections/HeroSection"
import { ParallaxSection } from "@/components/sections/ParallaxSection"
import { PersonalSection } from "@/components/sections/PersonalSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { Navbar } from "@/components/Navbar"
import { Reveal } from "@/components/Reveal"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <HeroSection />

        {/* SOBRE MIM */}
        <ParallaxSection offset={30}>
          <Reveal animation="fade" delay={0.2}>
            <AboutSection />
          </Reveal>
        </ParallaxSection>

        {/* HABILIDADES */}
        <ParallaxSection offset={40}>
          <Reveal animation="fade" delay={0.2}>
            <SkillsSection />
          </Reveal>
        </ParallaxSection>

        {/* EXPERIÊNCIA */}
        <ParallaxSection offset={30}>
          <Reveal animation="fade" delay={0.2}>
            <ExperienceSection />
          </Reveal>
        </ParallaxSection>

        {/* PROJETOS */}
        <ParallaxSection offset={40}>
          <Reveal animation="fade" delay={0.2}>
            <ProjectsSection />
          </Reveal>
        </ParallaxSection>

        {/* LADO HUMANO / ALÉM DO CÓDIGO */}
        <ParallaxSection offset={30}>
          <Reveal animation="fade" delay={0.2}>
            <PersonalSection />
          </Reveal>
        </ParallaxSection>

        {/* CONTATO (CALL TO ACTION FINAL) */}
        <ParallaxSection offset={20}>
          <Reveal animation="fade" delay={0.2}>
            <ContactSection />
          </Reveal>
        </ParallaxSection>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/80 bg-white py-6 text-center text-xs font-medium text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 sm:text-sm">
        <p>© {new Date().getFullYear()} Wallace Honorato. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}