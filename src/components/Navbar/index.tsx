// src/components/Navbar.tsx

import { ThemeToggle } from "../ThemeToggle"


export const Navbar = () => {
  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md transition-colors dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#inicio" className="text-xl font-bold text-slate-900 dark:text-white">
          Wallace<span className="text-blue-600 dark:text-blue-400">.dev</span>
        </a>

        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
