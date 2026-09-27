import { useState } from "react"

interface Project {
  id: number
  title: string
  company: string
  category: string
  description: string
  technologies: string[]
  image: string
  logo: string
  link?: string
  private?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portal do Cliente",
    company: "Copa Energia",
    category: "Desenvolvimento Web",
    description:
      "Portal desenvolvido para clientes da Copa Energia, integrando diferentes funcionalidades e serviços em uma interface moderna, responsiva e intuitiva.",
    technologies: ["React", "TypeScript", "REST API", "WebSocket"],
    image:
      "https://yt3.googleusercontent.com/kCkMHolr-5z5P7wMLSfhKF2Y5wr4trsregRhkJ4Az670YI1Q8NkeqqMhHjlZ6soWdoE1DEwh=s900-c-k-c0x00ffffff-no-rj",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ8e12cUwWMRDYhuPuajKbSCbZhaWcNQv5GfvuAH7v5FOuVEY_h65QYyA&s=10",
    link: "https://portalmi.copaenergia.com.br/login",
  },
  {
    id: 2,
    title: "Portal RE",
    company: "Plano Santa Casa Saúde",
    category: "Refatoração & Front-end",
    description:
      "Atuação na evolução visual e estrutural de um sistema legado, contribuindo para a modernização da interface e melhoria da experiência de utilização.",
    technologies: ["React", "TypeScript", "CSS", "Refatoração"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn779S3wAOcamEGs8G6OEQ0I9cLkCr1lHEWBQ0ahQwBPAnPLnAv0sPO_gd&s=10",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGXof1NaeqFlA/company-logo_100_100/company-logo_100_100/0/1630590571756?e=1792022400&v=beta&t=ypd9EAE1rh6gf0BH0bX83SL_sZ6VigtqtlIRw3BxkpE",
    link: "https://portalre.santacasasaudesjc.tec.br/login",
  },
  {
    id: 3,
    title: "MILENA-AI",
    company: "Projeto Pessoal",
    category: "AI & EdTech",
    description:
      "[Projeto Estudo] - Plataforma interativa para prática e aprendizado de inglês com IA. Conta com conversação por voz em tempo real, transcrição, tradução instantânea e integração com múltiplos provedores (OpenAI, Gemini e Groq).",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Web Speech API", "OpenAI / Gemini API"],
    image:
      "https://img.freepik.com/premium-photo/beautiful-future-girl-wallpaper-with-cyberpunk-city-background-ai-generated-image_548188-13064.jpg?semt=ais_hybrid&w=740&q=80",
    logo: "https://img.freepik.com/premium-photo/beautiful-future-girl-wallpaper-with-cyberpunk-city-background-ai-generated-image_548188-13064.jpg?semt=ais_hybrid&w=740&q=80",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7431439765008207872/",
    private: false,
  },
  {
    id: 4,
    title: "GihLash",
    company: "Projeto Pessoal",
    category: "E-commerce",
    description:
      "[Projeto estudo] - Aplicação desenvolvida para um negócio de extensão de cílios, com catálogo de produtos e sistema de agendamento integrado.",
    technologies: ["Vue 3", "Vuetify", "Pinia"],
    image: "https://www.bonsfluidos.com.br/wp-content/uploads/2024/06/CAPA-BONS-FLUIDOS-44.jpg",
    logo: "https://www.bonsfluidos.com.br/wp-content/uploads/2024/06/CAPA-BONS-FLUIDOS-44.jpg",
    link: "https://wallacehs20.github.io/gilash/",
  },
  {
    id: 5,
    title: "Controle de Dados",
    company: "Receita Federal",
    category: "Sistema & Dados",
    description:
      "Soluções para monitoramento, consulta e tratamento de dados relacionados aos sistemas da Receita Federal, incluindo automações e visualização de informações.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "APIs"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    logo: "",
  },
]

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0)
  const [imgError, setImgError] = useState(false)

  const project = projects[activeProject]

  const handleProjectAction = () => {
    if (!project.link) return
    window.open(project.link, "_blank", "noopener,noreferrer")
  }

  const handleSelectProject = (index: number) => {
    setActiveProject(index)
    setImgError(false)
  }

  return (
    <section
      id="projetos"
      className="relative overflow-hidden border-t border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-950 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        {/* HEADER */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
          <div>
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400 sm:mb-4 sm:tracking-[0.3em]">
              Projetos selecionados
            </span>

            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Alguns trabalhos que{" "}
              <span className="text-slate-400 dark:text-slate-600">
                fazem parte da minha trajetória.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 sm:gap-3">
            <span className="font-mono text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
              {String(projects.length).padStart(2, "0")}
            </span>
            <span>projetos</span>
          </div>
        </div>

        {/* PROJECT SHOWCASE */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] lg:gap-10">
          {/* IMAGE PREVIEW CARD (Com Altura Fixa) */}
          <div className="min-w-0 lg:sticky lg:top-10 lg:self-start">
            <div
              onClick={handleProjectAction}
              className={`group relative h-[280px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_15px_40px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:h-[380px] sm:rounded-3xl ${
                project.link ? "cursor-pointer" : "cursor-default"
              }`}
            >
              {/* Fallback de erro ou estado sem imagem */}
              {imgError ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                  <div className="text-center">
                    <i className="pi pi-image mb-2 text-3xl text-slate-400 dark:text-slate-600 sm:mb-3 sm:text-4xl" />
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-500 sm:text-sm">
                      Preview Indisponível
                    </p>
                  </div>
                </div>
              ) : (
                <img
                  key={project.id}
                  src={project.image}
                  alt={`Preview do projeto ${project.title}`}
                  onError={() => setImgError(true)}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-[1.035]"
                />
              )}

              {/* Overlay Gradiente */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

              {/* Número ID */}
              <div className="absolute left-4 top-4 flex h-9 min-w-9 items-center justify-center rounded-full border border-white/20 bg-black/25 px-2.5 font-mono text-xs font-semibold text-white backdrop-blur-md sm:left-6 sm:top-6 sm:h-11 sm:min-w-11 sm:px-3 sm:text-sm">
                {String(project.id).padStart(2, "0")}
              </div>

              {/* Detalhes sobre a Imagem */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {project.logo && (
                    <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-white/15 bg-white/90 p-1 backdrop-blur-md sm:h-10 sm:w-10 sm:rounded-xl sm:p-1.5">
                      <img
                        src={project.logo}
                        alt={project.company}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none"
                        }}
                      />
                    </div>
                  )}

                  <span className="rounded-full border border-white/15 bg-black/25 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-xs">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-2 text-xl font-bold text-white sm:mt-4 sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-0.5 text-xs text-white/70 sm:mt-1 sm:text-sm">{project.company}</p>
              </div>
            </div>

            {/* Badges de Tecnologias (Com Altura Fixa) */}
            <div className="mt-4 flex h-12 flex-wrap items-center gap-1.5 overflow-y-auto sm:mt-5 sm:h-14 sm:gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 sm:px-3 sm:py-1.5 sm:text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Descrição e Botão (Com Altura Fixa) */}
            <div className="mt-4 flex flex-col gap-4 border-t border-slate-200 pt-4 dark:border-slate-800 sm:mt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-5 sm:pt-6">
              <div className="h-24 max-w-2xl overflow-y-auto sm:h-28">
                <p className="text-xs leading-6 text-slate-500 dark:text-slate-400 sm:text-sm sm:leading-7">
                  {project.description}
                </p>
              </div>

              {project.link ? (
                <button
                  type="button"
                  onClick={handleProjectAction}
                  className="group inline-flex shrink-0 items-center justify-center gap-2.5 self-start rounded-full bg-slate-950 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white sm:self-auto sm:px-5 sm:py-3 sm:text-sm"
                >
                  Ver projeto
                  <i className="pi pi-arrow-up-right text-xs transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              ) : (
                <span className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full border border-slate-200 px-4 py-2.5 text-xs font-medium text-slate-400 dark:border-slate-800 dark:text-slate-500 sm:self-auto sm:px-5 sm:py-3 sm:text-sm">
                  <i className="pi pi-lock text-xs" />
                  Projeto privado
                </span>
              )}
            </div>
          </div>

          {/* LISTA INTERATIVA */}
          <div className="flex min-w-0 flex-col">
            <div className="mb-3 hidden items-center justify-between border-b border-slate-200 pb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400 dark:border-slate-800 lg:flex">
              <span>Projetos</span>
              <span>Categoria</span>
            </div>

            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {projects.map((item, index) => {
                const isActive = index === activeProject

                return (
                  <button
                    key={item.id}
                    type="button"
                    onPointerEnter={() => {
                      if (index !== activeProject) {
                        handleSelectProject(index)
                      }
                    }}
                    onFocus={() => {
                      if (index !== activeProject) {
                        handleSelectProject(index)
                      }
                    }}
                    onClick={() => {
                      handleSelectProject(index)
                      if (item.link && window.innerWidth >= 1024) {
                        window.open(item.link, "_blank", "noopener,noreferrer")
                      }
                    }}
                    className={`group relative flex w-full min-w-0 items-center gap-3 py-3.5 text-left transition-all duration-300 sm:gap-4 sm:py-5 ${
                      isActive
                        ? "text-slate-950 dark:text-white"
                        : "text-slate-400 hover:text-slate-700 dark:text-slate-600 dark:hover:text-slate-300"
                    }`}
                  >
                    {/* Indicador Ativo */}
                    <span
                      className={`absolute -left-2 h-6 w-0.5 rounded-full bg-blue-600 transition-all duration-300 sm:-left-3 sm:h-8 ${
                        isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                      }`}
                    />

                    {/* Número */}
                    <span
                      className={`w-6 shrink-0 font-mono text-xs transition-colors sm:w-8 ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-slate-400 dark:text-slate-600"
                      }`}
                    >
                      {String(item.id).padStart(2, "0")}
                    </span>

                    {/* Título e Empresa */}
                    <span className="min-w-0 flex-1 overflow-hidden">
                      <span
                        className={`block truncate text-sm font-semibold transition-transform duration-300 sm:text-base ${
                          isActive ? "translate-x-1" : "translate-x-0 group-hover:translate-x-1"
                        }`}
                      >
                        {item.title}
                      </span>

                      <span
                        className={`mt-0.5 block truncate text-[11px] transition-all duration-300 sm:mt-1 sm:text-xs ${
                          isActive
                            ? "text-slate-500 dark:text-slate-400"
                            : "text-slate-400 dark:text-slate-600"
                        }`}
                      >
                        {item.company}
                      </span>
                    </span>

                    {/* Categoria */}
                    <span
                      className={`hidden shrink-0 text-right text-xs transition-colors sm:block ${
                        isActive
                          ? "text-slate-500 dark:text-slate-400"
                          : "text-slate-400 dark:text-slate-600"
                      }`}
                    >
                      {item.category}
                    </span>

                    {/* Ícone Indicador de Ação */}
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-8 sm:w-8 ${
                        isActive
                          ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                          : "bg-transparent text-slate-300 group-hover:bg-slate-100 group-hover:text-slate-700 dark:text-slate-700 dark:group-hover:bg-slate-900 dark:group-hover:text-white"
                      }`}
                    >
                      <i
                        className={`text-[10px] ${item.link ? "pi pi-arrow-up-right" : "pi pi-lock"}`}
                      />
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Aviso Rodapé */}
            <div className="mt-auto hidden pt-8 lg:block">
              <div className="rounded-2xl border border-dashed border-slate-200 p-5 dark:border-slate-800">
                <div className="flex items-start gap-3">
                  <i className="pi pi-info-circle mt-0.5 text-sm text-blue-500" />
                  <p className="text-xs leading-6 text-slate-500 dark:text-slate-500">
                    Projetos marcados com cadeado fazem parte de sistemas corporativos privados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NAVEGAÇÃO MOBILE */}
        <div className="mt-6 flex justify-center gap-2 lg:hidden">
          {projects.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Selecionar projeto ${item.title}`}
              onClick={() => handleSelectProject(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeProject ? "w-8 bg-blue-600" : "w-1.5 bg-slate-300 dark:bg-slate-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}