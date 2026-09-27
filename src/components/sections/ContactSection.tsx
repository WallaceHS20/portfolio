// src/sections/ContactSection.tsx
import { Button } from "primereact/button"

export const ContactSection = () => {
  const phone = "5512996141491"
  const whatsappUrl = `https://wa.me/${phone}`

  const contacts = [
    {
      label: "E-mail",
      value: "wallacehonorato67@gmail.com",
      icon: "pi pi-envelope",
      href: "mailto:wallacehonorato67@gmail.com",
      external: false,
    },
    {
      label: "WhatsApp",
      value: "(12) 99614-1491",
      icon: "pi pi-whatsapp",
      href: whatsappUrl,
      external: true,
    },
    {
      label: "LinkedIn",
      value: "/wallace-honorato",
      icon: "pi pi-linkedin",
      href: "https://www.linkedin.com/in/wallace-honorato-b15a3b1a2/",
      external: true,
    },
    {
      label: "GitHub",
      value: "@WallaceHS20",
      icon: "pi pi-github",
      href: "https://github.com/WallaceHS20",
      external: true,
    },
    {
      label: "Steam",
      value: "wallacehonorato67",
      customIcon: (
        <svg
          className="h-4 w-4 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.03 4.524 4.524s-2.03 4.524-4.524 4.524h-.105l-4.076 2.911c0 .052.005.105.005.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zM8.542 14.82l-2.025-.837c.182.443.493.818.892 1.071.867.55 2.012.287 2.563-.58.219-.345.312-.741.282-1.127a2.23 2.23 0 0 0-1.712 1.473zm7.412-8.303a2.383 2.383 0 0 0-2.38 2.382 2.383 2.383 0 0 0 2.38 2.381 2.383 2.383 0 0 0 2.382-2.381 2.383 2.383 0 0 0-2.382-2.382zm0 3.811a1.43 1.43 0 1 1 0-2.858 1.43 1.43 0 0 1 0 2.858z" />
        </svg>
      ),
      href: "https://steamcommunity.com/search/users/#text=wallacehonorato67",
      external: true,
    },
  ]

  return (
    <section
      id="contato"
      className="relative overflow-hidden border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-950 sm:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/10" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Vamos conversar
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Entre em <span className="text-blue-600 dark:text-blue-400">contato.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400 sm:mt-5 sm:text-lg sm:leading-7">
            Estou sempre aberto a novas oportunidades, projetos e conexões. Se quiser trocar uma
            ideia sobre tecnologia, desenvolvimento ou oportunidades profissionais, fique à vontade
            para me chamar.
          </p>
        </div>

        {/* Main contact card */}
        <div className="w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_25px_80px_rgba(0,0,0,0.25)]">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left */}
            <div className="relative overflow-hidden bg-slate-950 p-6 sm:p-10 lg:p-12">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-blue-500/20 bg-blue-500/10" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-white/5" />

              <div className="relative">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 sm:mb-8 sm:h-14 sm:w-14">
                  <i className="pi pi-send text-lg sm:text-xl" />
                </div>

                <h3 className="text-xl font-bold text-white sm:text-3xl">
                  Vamos construir algo juntos?
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-400 sm:mt-4 sm:leading-7">
                  Seja para uma oportunidade profissional, um projeto ou simplesmente trocar
                  experiências, minhas portas estão abertas.
                </p>

                <div className="mt-6 flex items-center gap-3 text-xs text-slate-400 sm:mt-8 sm:text-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5">
                    <i className="pi pi-map-marker text-xs" />
                  </span>
                  <span className="truncate">São José dos Campos — SP</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="p-4 sm:p-8 lg:p-10">
              <div className="grid gap-3 sm:grid-cols-2">
                {contacts.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noreferrer" : undefined}
                    className="group flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-950/50 dark:hover:border-blue-900 dark:hover:bg-blue-950/20 sm:gap-4 sm:p-4"
                  >
                    {/* Icon */}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-500 shadow-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-slate-900 dark:text-slate-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white sm:h-11 sm:w-11">
                      {contact.customIcon ? (
                        contact.customIcon
                      ) : (
                        <i className={`${contact.icon} text-base`} />
                      )}
                    </span>

                    {/* Text */}
                    <span className="min-w-0 flex-1 overflow-hidden">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-[11px]">
                        {contact.label}
                      </span>

                      <span className="mt-0.5 block truncate text-xs font-medium text-slate-700 transition-colors group-hover:text-blue-600 dark:text-slate-300 dark:group-hover:text-blue-400 sm:mt-1 sm:text-sm">
                        {contact.value}
                      </span>
                    </span>

                    <i className="pi pi-arrow-up-right shrink-0 text-xs text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500 dark:text-slate-700" />
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-950 dark:bg-blue-950/20 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white sm:h-10 sm:w-10">
                    <i className="pi pi-whatsapp" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white sm:text-sm">
                      Prefere uma conversa rápida?
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400 sm:text-xs">
                      Me chame diretamente pelo WhatsApp.
                    </p>
                  </div>
                </div>

                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <Button
                    label="Chamar no WhatsApp"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    className="w-full rounded-full border-none bg-blue-600 px-5 py-2.5 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 sm:w-auto sm:py-3 sm:text-sm"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-slate-400 sm:mt-10 sm:flex-row">
          <span>© {new Date().getFullYear()} Wallace Honorato</span>

          <div className="flex items-center gap-2">
            <span>Desenvolvido com</span>
            <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 font-medium text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
              React + TypeScript
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}