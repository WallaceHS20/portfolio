import { useState, useEffect } from "react"
import { Timeline } from "primereact/timeline"

interface Experience {
  company: string
  role: string
  period: string
  description: string
  highlights: string[]
  logo?: string
  featured?: boolean
}

export const ExperienceSection = () => {
  const [isMobile, setIsMobile] = useState(false)

  // Monitora o tamanho da tela para chavear o alinhamento da Timeline do PrimeReact
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const experiences: Experience[] = [
    {
      company: "Plano Santa Casa Saúde - SJC",
      role: "Analista de Desenvolvimento de Software Jr",
      period: "Abr 2026 - Atualmente",
      description:
        "Atuação como desenvolvedor Full Stack no desenvolvimento e evolução de sistemas internos e externos da organização.",
      highlights: [
        "Desenvolvimento de APIs e endpoints utilizando Node.js, NestJS e Oracle Database.",
        "Maior foco e eficiência no desenvolvimento de interfaces modernas, performáticas e intuitivas utilizando React e TypeScript.",
        "Participação no desenvolvimento de protótipos e soluções para novos projetos, desde a concepção das ideias até a implementação.",
        "Atuação em equipes utilizando metodologias ágeis, especialmente Scrum.",
        "Participação ativa em discussões técnicas, contribuindo com opiniões sobre arquitetura, tecnologias, stacks e melhorias das soluções.",
      ],
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGXof1NaeqFlA/company-logo_100_100/company-logo_100_100/0/1630590571756?e=1792022400&v=beta&t=ypd9EAE1rh6gf0BH0bX83SL_sZ6VigtqtlIRw3BxkpE",
    },
    {
      company: "Tecsus - SJC",
      role: "Desenvolvedor Front-End Jr",
      period: "Dez 2024 - Abr 2026",
      description:
        "Atuação no desenvolvimento de soluções web para projetos de grande porte, com destaque para um sistema desenvolvido para a Copa Energia.",
      highlights: [
        "Participação em um projeto de grande porte desenvolvido para a Copa Energia, empresa de referência no segmento de energia.",
        "Atuação no desenvolvimento de um sistema de gestão de gás voltado para condomínios e indústrias.",
        "Desenvolvimento de interfaces a partir de protótipos e requisitos de negócio.",
        "Integração de aplicações com APIs REST e implementação de atualizações em tempo real utilizando WebSocket.",
        "Participação em um ambiente de desenvolvimento de sistemas de alta complexidade e grande volume de funcionalidades.",
      ],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ8e12cUwWMRDYhuPuajKbSCbZhaWcNQv5GfvuAH7v5FOuVEY_h65QYyA&s=10",
      featured: true,
    },
    {
      company: "Universal Armazéns Gerais - Jacareí",
      role: "Analista de TI",
      period: "2023 - 2024",
      description:
        "Atuação no desenvolvimento e manutenção de soluções voltadas ao monitoramento, análise de dados e automação de processos.",
      highlights: [
        "Desenvolvimento e evolução de sistemas de monitoramento relacionados a processos da Receita Federal.",
        "Migração e modernização de interfaces utilizando React e Tailwind CSS.",
        "Desenvolvimento de dashboards e análises de dados utilizando Power BI.",
        "Criação de automações e processos ETL utilizando Python.",
        "Atuação com georreferenciamento e integração de diferentes fontes de dados.",
      ],
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGHPoI8L9vh9Q/company-logo_200_200/company-logo_200_200/0/1630560797105?e=2147483647&v=beta&t=8z97UtueXcH9xPCcmNjzUUjD6Di6caGpfrJcL3y3HpY",
    },
  ]

  const timelineMarker = (item: Experience) => {
    return (
      <div
        className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white shadow-md dark:border-slate-950 sm:h-12 sm:w-12 sm:border-4 sm:shadow-lg ${
          item.featured
            ? "bg-gradient-to-br from-purple-600 to-blue-600 shadow-purple-500/30"
            : "bg-gradient-to-br from-blue-600 to-cyan-500 shadow-blue-500/30"
        }`}
      >
        {item.logo ? (
          <img
            src={item.logo}
            alt={`Logo ${item.company}`}
            className="h-5 w-5 rounded-md object-contain sm:h-7 sm:w-7"
            onError={(e) => {
              e.currentTarget.style.display = "none"
            }}
          />
        ) : (
          <span className="text-xs font-black text-white sm:text-sm">
            {item.company.charAt(0)}
          </span>
        )}

        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-blue-500/20" />
      </div>
    )
  }

  const timelineContent = (item: Experience) => {
    return (
      <article
        className={`group relative mb-8 min-w-0 overflow-hidden rounded-2xl border bg-white/90 p-5 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-900/90 sm:p-6 md:mb-12 md:p-7 ${
          item.featured
            ? "border-purple-400/50 shadow-purple-500/10 hover:border-purple-400/80"
            : "border-slate-200/80 hover:border-blue-400/50 dark:border-slate-800"
        }`}
      >
        {/* Glow decorativo */}
        <div
          className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
            item.featured ? "bg-purple-500/15 opacity-60" : "bg-blue-500/10 opacity-0"
          }`}
        />

        {/* Barra lateral */}
        <div
          className={`absolute left-0 top-6 h-12 w-1 rounded-r-full sm:h-14 ${
            item.featured
              ? "bg-gradient-to-b from-purple-500 to-blue-500"
              : "bg-gradient-to-b from-blue-500 to-cyan-400"
          }`}
        />

        <div className="relative min-w-0">
          {/* Header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div className="flex items-start gap-3 sm:gap-4 min-w-0">
              {/* Espaço reservado para logo */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-1.5 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:h-14 sm:w-14 sm:p-2">
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={`Logo ${item.company}`}
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                    }}
                  />
                ) : (
                  <span className="text-xs font-black text-slate-400 dark:text-slate-600 sm:text-sm">
                    {item.company.slice(0, 3).toUpperCase()}
                  </span>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white sm:text-xl md:text-2xl">
                    {item.role}
                  </h3>

                  {item.featured && (
                    <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-300">
                      Destaque
                    </span>
                  )}
                </div>

                <p className="truncate text-xs font-semibold text-blue-600 dark:text-blue-400 sm:text-sm">
                  {item.company}
                </p>
              </div>
            </div>

            {/* Período */}
            <span className="w-fit shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 sm:px-3 sm:py-1.5 sm:text-xs">
              {item.period}
            </span>
          </div>

          {/* Descrição */}
          <p className="mt-4 text-xs leading-6 text-slate-600 dark:text-slate-300 sm:mt-5 sm:text-sm sm:leading-7 md:text-base">
            {item.description}
          </p>

          {/* Destaque especial Tecsus */}
          {item.featured && (
            <div className="mt-4 overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-transparent p-3.5 sm:mt-5 sm:p-4">
              <div className="flex gap-2.5 sm:gap-3">
                <div className="mt-0.5 shrink-0 text-purple-500">
                  <i className="pi pi-star-fill text-xs sm:text-sm" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900 dark:text-white sm:text-sm">
                    Projeto Copa Energia
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300 sm:text-sm sm:leading-6">
                    Experiência em um projeto de grande porte voltado à gestão de gás para
                    condomínios e indústrias, envolvendo um ecossistema com alto nível de
                    complexidade e requisitos de negócio.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Highlights */}
          <div className="mt-5 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3">
            {item.highlights.map((highlight, index) => (
              <div
                key={index}
                className="group/item flex gap-2.5 rounded-xl border border-slate-100 bg-slate-50/80 p-2.5 transition-colors duration-300 hover:border-blue-200 hover:bg-blue-50/50 dark:border-slate-800 dark:bg-slate-800/50 dark:hover:border-blue-900 dark:hover:bg-blue-950/20 sm:gap-3 sm:p-3"
              >
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500 sm:h-5 sm:w-5">
                  <i className="pi pi-check text-[8px] sm:text-[9px]" />
                </div>

                <span className="text-[11px] leading-4 text-slate-600 dark:text-slate-300 sm:text-xs sm:leading-5">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          {/* Linha inferior decorativa */}
          <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700 sm:mt-6" />

          <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-slate-400 sm:mt-4 sm:text-xs">
            <i className="pi pi-briefcase text-xs" />
            <span>Experiência profissional</span>
          </div>
        </div>
      </article>
    )
  }

  return (
    <section
      id="experiencia"
      className="relative overflow-hidden border-t border-slate-200 bg-slate-50/50 py-12 dark:border-slate-800 dark:bg-slate-950/50 sm:py-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="mb-10 text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 sm:text-xs">
            <i className="pi pi-briefcase text-xs" />
            Carreira
          </span>

          <h2 className="mt-3 text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            Experiência Profissional
          </h2>

          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 sm:w-16" />

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-500 dark:text-slate-400 sm:mt-4 sm:text-sm sm:leading-6 md:text-base">
            Minha trajetória profissional, projetos relevantes e evolução na área de desenvolvimento
            de software.
          </p>
        </div>

        {/* CSS auxiliar para ajustar as margens do PrimeReact no modo 'left' */}
        <style>{`
          .p-timeline-left .p-timeline-event-content {
            padding-left: 1rem !important;
          }
          .p-timeline-left .p-timeline-event-opposite {
            display: none !important;
          }
          @media (min-width: 768px) {
            .p-timeline-alternate .p-timeline-event-opposite {
              display: block !important;
            }
          }
        `}</style>

        {/* Timeline */}
        <Timeline
          value={experiences}
          align={isMobile ? "left" : "alternate"}
          marker={timelineMarker}
          content={timelineContent}
          className="experience-timeline"
        />
      </div>
    </section>
  )
}