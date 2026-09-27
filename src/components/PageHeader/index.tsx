import { ReactNode } from "react"
import { Button } from "primereact/button"
import { useLocation, useNavigate } from "react-router-dom"
import { Reveal } from "@/components/Reveal"

interface PageHeaderProps {
  title: string
  subtitle?: string
  overline?: string
  showBackButton?: boolean
  actions?: ReactNode
  bgImage?: string
  positionCenter?: number
  delay?: number
  duration?: number
  animation?: "fade" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "zoom" | "zoomInUp"
}

export const PageHeader = ({
  title,
  subtitle,
  overline,
  showBackButton = true,
  actions,
  bgImage,
  positionCenter = 15,
  delay = 0,
  duration = 0.8, // 👈 Aumentado para 0.8s para uma animação mais lenta e fluida
  animation = "fade", // 👈 Alterado para "fade" para um efeito de esvanecimento mais suave
}: PageHeaderProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  // Verifica se a rota anterior foi /login
  const isFromLogin =
    location.state?.from === "/login" ||
    document.referrer.endsWith("/login") ||
    document.referrer.includes("/login")

  // Exibe o botão apenas se showBackButton for true E a página anterior não for o /login
  const canShowBackButton = showBackButton && !isFromLogin

  return (
    <Reveal animation={animation} delay={delay} duration={duration}>
      <div
        className="min-h-37.5 relative flex w-full items-center overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900 p-6 shadow-sm transition-all duration-500 sm:p-8"
        style={
          bgImage
            ? {
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: `center ${positionCenter}%`,
              }
            : undefined
        }
      >
        <div className="bg-linear-to-r absolute inset-0 from-slate-950 via-slate-950/80 to-slate-950/20" />

        <div className="bg-linear-to-b absolute inset-0 from-black/30 via-transparent to-black/40" />

        <div className="relative z-10 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            {canShowBackButton && (
              <Button
                icon="pi pi-arrow-left"
                onClick={() => navigate(-1)}
                className="border-white/15! h-10! w-10! rounded-xl! bg-white/10! text-white! shrink-0 backdrop-blur-md transition-all duration-300 hover:!bg-white/20 active:scale-95"
              />
            )}

            <div className="flex flex-col gap-1">
              {overline && (
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-300">
                  {overline}
                </span>
              )}

              <h1 className="text-2xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-3xl">
                {title}
              </h1>

              {subtitle && (
                <p className="text-sm font-medium leading-relaxed text-slate-200/90">{subtitle}</p>
              )}
            </div>
          </div>

          {/* Área de Ações */}
          {actions && (
            <div className="flex shrink-0 items-center gap-2 pt-2 sm:pt-0">{actions}</div>
          )}
        </div>
      </div>
    </Reveal>
  )
}
