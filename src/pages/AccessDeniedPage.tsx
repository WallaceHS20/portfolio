import logoScs from "@/assets/logo-login.png"
import FamilyPatch from "@/assets/dreaming-young-african-businesswoman.jpg"
import { Reveal } from "@/components/Reveal"
import { useNavigate } from "react-router-dom"

export default function AccessDeniedPage() {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen w-full items-stretch overflow-hidden">
      {/* Banner */}
      <section className="login-banner relative hidden flex-1 overflow-hidden md:flex">
        <Reveal animation="fade" delay={0.2} duration={1} distance={90}>
          <img
            src={FamilyPatch}
            alt="Controle de Uniformes"
            className="absolute inset-0 h-full w-full select-none object-cover"
          />
        </Reveal>

        <div className="bg-linear-to-t absolute inset-0 from-black/90 via-black/40 to-transparent" />

        <div className="relative z-10 flex h-full w-full items-end justify-center pb-10">
          <div className="flex flex-col items-center text-center">
            <Reveal animation="fade" delay={0.4} duration={1}>
              <img src={logoScs} alt="Logo Sistema" className="w-70 object-contain" />
            </Reveal>

            <Reveal animation="fade" delay={0.7} duration={1}>
              <span className="mt-2 text-sm font-bold tracking-wide text-white drop-shadow-md">
                Portal Fornecedor
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="flex flex-1 items-center justify-center bg-white">
        <div className="mx-auto flex w-full max-w-md flex-col items-center px-6 py-10 text-center">
          <Reveal animation="zoom" duration={0.5}>
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
              <i className="pi pi-lock" style={{ fontSize: "2.5rem", color: "#dc2626" }} />
            </div>
          </Reveal>

          <Reveal animation="slideLeft" delay={0.2} duration={0.5}>
            <h1 className="text-3xl font-bold text-gray-900">Acesso Negado</h1>
          </Reveal>

          <Reveal animation="fade" delay={0.4} duration={0.6}>
            <p className="mt-4 text-sm leading-6 text-gray-500">
              Sua conta está autenticada, porém você não possui permissão para acessar esta área do
              sistema.
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Caso acredite que isso seja um equívoco, entre em contato com o administrador do
              sistema ou com o setor responsável para solicitar a liberação de acesso.
            </p>
          </Reveal>

          <Reveal animation="slideUp" delay={0.6} duration={0.5}>
            <div className="mt-8 flex w-56 flex-col gap-3">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="h-11 w-full cursor-pointer rounded-md bg-[#2181FF] font-semibold text-white transition hover:bg-[#1766c7]"
              >
                Voltar
              </button>
            </div>
          </Reveal>

          <Reveal animation="fade" delay={0.8} duration={0.8}>
            <div className="mt-8 w-full border-t border-dashed border-gray-200 pt-4">
              <p className="text-xs text-gray-400">
                © 2026 Plano Santa Casa Saúde. Todos os direitos reservados.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
