import { useState, useEffect } from "react"
import { Button } from "primereact/button"
import { Reveal } from "../Reveal"
import curriculo from "@/assets/Wallace_2026.pdf"

const phrases = [
  "Front-End Jr & Full Stack",
  "Gamer de Battlefield 1 nas horas vagas 🎮",
  "Amante de animes e da cultura cyberpunk 🌆",
  "Dono de um Celta invocado 🚗💨",
]

export const HeroSection = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(60)

  useEffect(() => {
    const fullText = phrases[currentPhraseIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1))

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1200)
          setTypingSpeed(30)
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1))

        if (currentText === "") {
          setIsDeleting(false)
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
          setTypingSpeed(60)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentPhraseIndex, typingSpeed])

  return (
    <section
      id="inicio"
      className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 py-16 text-center"
    >
      <Reveal animation="slideDown" duration={0.5}>
        <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Desenvolvedor de Software
        </span>
      </Reveal>

      <Reveal animation="zoomInUp" duration={0.8} distance={40}>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-6xl">
          Olá, eu sou o{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Wallace Honorato
          </span>
        </h1>
      </Reveal>

      <Reveal animation="fade" delay={0.3}>
        <div className="my-2 flex h-12 items-center justify-center">
          <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200 md:text-3xl">
            <span>{currentText}</span>

            <span className="ml-1 inline-block h-6 w-1 animate-pulse bg-blue-600 align-middle dark:bg-blue-400 md:h-8" />
          </h2>
        </div>
      </Reveal>

      <Reveal animation="slideUp" delay={0.4}>
        <p className="mb-8 mt-2 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
          Construindo interfaces performáticas, responsivas, reativas e
          modernas com React, TypeScript e Tailwind CSS.
        </p>
      </Reveal>

      <Reveal animation="slideUp" delay={0.5}>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projetos">
            <Button
              label="Ver Projetos"
              icon="pi pi-briefcase"
              className="p-button-primary p-button-rounded px-6 py-3"
            />
          </a>

          <a href="#contato">
            <Button
              label="Fale Comigo"
              icon="pi pi-envelope"
              className="p-button-outlined p-button-rounded px-6 py-3"
            />
          </a>

          <a
            href={curriculo}
            download="Wallace_Honorato_Curriculo_2026.pdf"
          >
            <Button
              label="Baixar Currículo"
              icon="pi pi-download"
              className="p-button-outlined p-button-rounded px-6 py-3"
            />
          </a>
        </div>
      </Reveal>
    </section>
  )
}

