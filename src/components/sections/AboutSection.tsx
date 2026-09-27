import { Carousel } from "primereact/carousel"
import { Tag } from "primereact/tag"

interface SlideItem {
  id: string
  tag: string
  title: string
  text: string
  highlight?: string
  imageSrc: string
  imageAlt: string
}

export const AboutSection = () => {
  const slides: SlideItem[] = [
    {
      id: "1",
      tag: "Especialidade Principal",
      title: "Especialista em Front-End & UI/UX de Alta Performance",
      text: "Desenvolvedor especialista em arquiteturas front-end modernas, reativas e acessíveis. Transformo requisitos complexos e fluxos de dados em interfaces fluidas, utilizando React, TypeScript e Tailwind CSS com foco total na melhor experiência do usuário e otimização de performance.",
      imageSrc:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Código front-end moderno na tela de desenvolvimento",
    },
    {
      id: "2",
      tag: "Atuação Atual",
      title: "Sistemas Críticos no Plano Santa Casa Saúde",
      text: "Lidero a criação de ecossistemas front-end modernos para a instituição, consumindo e otimizando a integração com APIs e serviços vitais de alta disponibilidade.",
      highlight:
        "Domínio técnico: React, TypeScript, Tailwind, PrimeReact, Node.js, NestJS e OracleDB.",
      imageSrc:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Dashboards e interfaces de alta densidade de dados",
    },
    {
      id: "3",
      tag: "Diferencial Estratégico",
      title: "Visão Full-Cycle & Base em Dados (Fatec)",
      text: "Graduado em Banco de Dados pela Fatec, uno o domínio absoluto do Front-End a uma compreensão profunda de arquitetura de dados e APIs. Essa bagagem me permite projetar interfaces perfeitamente integradas com o Back-End, sem gargalos.",
      imageSrc:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Arquitetura de dados e desenvolvimento de software",
    },
  ]

  const slideTemplate = (slide: SlideItem) => {
    return (
      <div className="px-2 py-3 md:px-4">
        <article className="group relative mx-auto min-h-[380px] sm:min-h-[420px] md:min-h-[440px] max-w-5xl overflow-hidden rounded-[2rem] border border-white/20 bg-slate-950 shadow-2xl shadow-blue-950/10">
          <img
            src={slide.imageSrc}
            alt={slide.imageAlt}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/20" />

          <div className="relative flex min-h-[380px] sm:min-h-[420px] md:min-h-[440px] items-center p-6 sm:p-8 md:p-10">
            <div className="max-w-2xl">
              <div className="mb-3">
                <Tag
                  value={slide.tag}
                  severity="info"
                  className="border border-blue-400/30 bg-blue-500/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-blue-300 backdrop-blur-md"
                />
              </div>

              <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                {slide.title}
              </h3>

              <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-28" />

              <p className="mt-4 max-w-xl text-xs leading-6 text-slate-300 sm:text-sm sm:leading-7 md:text-base">
                {slide.text}
              </p>

              {slide.highlight && (
                <div className="mt-4 flex max-w-xl items-center gap-3 rounded-xl border border-blue-400/20 bg-blue-500/10 p-3 backdrop-blur-md">
                  <div className="h-6 w-1 shrink-0 rounded-full bg-blue-500" />
                  <p className="text-xs font-semibold leading-relaxed text-blue-200 sm:text-sm">
                    {slide.highlight}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="absolute top-6 right-6 hidden rounded-full border border-white/20 bg-black/20 px-4 py-2 font-mono text-xs font-bold text-white/70 backdrop-blur-md sm:block">
            0{slide.id} / 03
          </div>

          <div className="pointer-events-none absolute -right-32 -bottom-32 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
        </article>
      </div>
    )
  }

  return (
    <section
      id="sobre"
      className="relative overflow-hidden border-t border-slate-200/80 bg-slate-50/50 py-12 md:py-16 dark:border-slate-800/80 dark:bg-slate-900/60"
    >

      <div className="pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mb-6 text-center">
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
            Sobre mim
          </span>

          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-3xl">
            Minha trajetória
          </h2>

          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />

          <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">
            Experiência profissional, especialização técnica e evolução na
            carreira como desenvolvedor.
          </p>
        </div>

        <div className="relative">
          <Carousel
            value={slides}
            numVisible={1}
            numScroll={1}
            itemTemplate={slideTemplate}
            autoplayInterval={6000}
            circular
            showIndicators
            showNavigators
            className="about-carousel"
          />
        </div>
      </div>
    </section>
  )
}