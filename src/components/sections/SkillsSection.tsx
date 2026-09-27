import { Tag } from "primereact/tag"
import { Reveal } from "../Reveal"

interface Skill {
  name: string
  level: "Avançado" | "Intermediário" | "Básico"
  percentage: number
}

interface TechBadge {
  name: string
  iconUrl: string
}

export const SkillsSection = () => {
  const frontSkills: Skill[] = [
    { name: "JavaScript", level: "Avançado", percentage: 95 },
    { name: "TypeScript", level: "Avançado", percentage: 90 },
    { name: "React", level: "Avançado", percentage: 92 },
    { name: "Tailwind CSS", level: "Avançado", percentage: 95 },
    { name: "PrimeReact", level: "Avançado", percentage: 88 },
    { name: "Context API", level: "Avançado", percentage: 90 },
    { name: "Git", level: "Avançado", percentage: 85 },
  ]

  const otherSkills: Skill[] = [
    { name: "Docker", level: "Intermediário", percentage: 65 },
    { name: "SQL / OracleDB", level: "Intermediário", percentage: 70 },
    { name: "Vue.js", level: "Básico", percentage: 40 },
    { name: "NestJS / Node", level: "Básico", percentage: 45 },
    { name: "PHP", level: "Básico", percentage: 35 },
  ]

  const techBadges: TechBadge[] = [
    {
      name: "React",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "TypeScript",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Tailwind CSS",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "NestJS",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    },
    {
      name: "Node.js",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Docker",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "OracleDB",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    },
    {
      name: "SQL",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqldeveloper/sqldeveloper-original.svg",
    },
    {
      name: "Git",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Vue.js",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "PHP",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
  ]

  const getBarGradient = (level: Skill["level"]) => {
    switch (level) {
      case "Avançado":
        return "bg-gradient-to-r from-emerald-500 to-teal-400 dark:from-emerald-400 dark:to-teal-300 shadow-sm shadow-emerald-500/20"
      case "Intermediário":
        return "bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-blue-500 dark:to-cyan-300 shadow-sm shadow-blue-500/20"
      case "Básico":
        return "bg-gradient-to-r from-amber-500 to-orange-400 dark:from-amber-400 dark:to-orange-300 shadow-sm shadow-amber-500/20"
    }
  }

  const renderSkillBar = (skill: Skill) => (
    <div key={skill.name} className="group space-y-1.5 sm:space-y-2">
      <div className="flex items-center justify-between gap-2 text-xs sm:text-sm">
        <span className="truncate font-semibold text-slate-800 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
          {skill.name}
        </span>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
          <Tag
            value={skill.level}
            severity={
              skill.level === "Avançado"
                ? "success"
                : skill.level === "Intermediário"
                  ? "info"
                  : "warning"
            }
            className="text-[10px] font-medium sm:text-[11px]"
          />
          <span className="font-mono text-xs font-extrabold text-slate-600 dark:text-slate-300">
            {skill.percentage}%
          </span>
        </div>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200/90 p-0.5 shadow-inner dark:bg-slate-700/70 sm:h-2.5">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-110 ${getBarGradient(
            skill.level
          )}`}
          style={{ width: `${skill.percentage}%` }}
        />
      </div>
    </div>
  )

  return (
    <section
      id="habilidades"
      className="relative overflow-hidden border-t border-slate-200/80 bg-slate-50/50 py-12 dark:border-slate-800/80 dark:bg-slate-900/60 sm:py-20"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* HEADER DA SEÇÃO */}
        <Reveal animation="slideDown">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 sm:text-xs">
              <i className="pi pi-sparkles text-xs"></i> Skills & Metrics
            </div>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
              Nível de Domínio Técnico
            </h2>
            <div className="mx-auto mt-2 h-1 w-12 rounded bg-blue-600 sm:w-16"></div>
          </div>
        </Reveal>

        {/* GRID DE HABILIDADES */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2 md:gap-8">
          {/* FRONT-END CARD */}
          <Reveal animation="slideRight">
            <div className="relative space-y-5 rounded-2xl border border-amber-500/30 bg-white/90 p-5 shadow-lg shadow-amber-500/5 dark:border-amber-500/20 dark:bg-slate-800/90 sm:space-y-6 sm:p-6">
              <div className="absolute -right-2 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-950 shadow-md shadow-amber-500/30 ring-4 ring-slate-50 dark:ring-slate-900 sm:-right-3 sm:-top-4 sm:h-10 sm:w-10">
                <i className="pi pi-crown text-sm sm:text-lg"></i>
              </div>

              <div className="flex items-center gap-3 border-b border-slate-100 pb-3.5 dark:border-slate-700/60 sm:pb-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 sm:h-10 sm:w-10">
                  <i className="pi pi-code text-base sm:text-lg"></i>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                      Front-End Mastery
                    </h3>
                    <Tag value="Core" severity="success" className="text-[10px]" />
                  </div>
                  <p className="truncate text-[11px] text-slate-500 dark:text-slate-400 sm:text-xs">
                    Especialização Principal & UI/UX
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 sm:space-y-4">
                {frontSkills.map((skill) => renderSkillBar(skill))}
              </div>
            </div>
          </Reveal>

          {/* BACK-END CARD */}
          <Reveal animation="slideLeft">
            <div className="space-y-5 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-slate-700/80 dark:bg-slate-800/90 sm:space-y-6 sm:p-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3.5 dark:border-slate-700/60 sm:pb-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 sm:h-10 sm:w-10">
                  <i className="pi pi-database text-base sm:text-lg"></i>
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                    Back-End & Ecossistema
                  </h3>
                  <p className="truncate text-[11px] text-slate-500 dark:text-slate-400 sm:text-xs">
                    Bancos de Dados, DevOps & Linguagens
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 sm:space-y-4">
                {otherSkills.map((skill) => renderSkillBar(skill))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* BADGES / ICON GRID */}
        <Reveal animation="slideUp">
          <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/60 p-5 text-center backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-800/40 sm:mt-12 sm:p-8">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 sm:mb-6 sm:text-xs">
              Tecnologias & Ferramentas Presentes no Meu Stack
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4">
              {techBadges.map((tech) => (
                <div
                  key={tech.name}
                  title={tech.name}
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-400/50 dark:hover:shadow-blue-500/20 sm:h-14 sm:w-14 sm:rounded-2xl sm:p-3"
                >
                  <img
                    src={tech.iconUrl}
                    alt={`${tech.name} logo`}
                    className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}