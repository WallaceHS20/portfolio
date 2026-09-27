import logoScs from "@/assets/logo-login.png"
import FamilyPatch from "@/assets/gen8.png"
import { Reveal } from "@/components/Reveal"
import { useNavigate } from "react-router-dom"

export default function NotFoundPage() {
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
            <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-blue-100">
              <i
                className="pi pi-exclamation-triangle"
                style={{ fontSize: "3rem", color: "#2563eb" }}
              />
            </div>
          </Reveal>

          <Reveal animation="slideLeft" delay={0.2} duration={0.5}>
            <span className="text-6xl font-extrabold text-[#2181FF]">404</span>

            <h1 className="mt-3 text-3xl font-bold text-gray-900">Página não encontrada</h1>
          </Reveal>

          <Reveal animation="fade" delay={0.4} duration={0.6}>
            <p className="mt-4 text-sm leading-6 text-gray-500">
              A página que você está tentando acessar não existe, foi movida ou o endereço informado
              é inválido.
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Verifique o endereço digitado ou utilize uma das opções abaixo para continuar
              navegando.
            </p>
          </Reveal>

          <Reveal animation="slideUp" delay={0.6} duration={0.5}>
            <div className="mt-8 flex w-full flex-col gap-3">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="h-11 w-56 cursor-pointer rounded-md bg-[#2181FF] text-base font-semibold text-white transition hover:bg-[#1766c7]"
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
