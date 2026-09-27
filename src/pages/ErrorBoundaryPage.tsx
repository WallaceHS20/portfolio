import logoScs from "@/assets/gen1.png"
import FamilyPatch from "@/assets/gen1.png"
import { Reveal } from "@/components/Reveal"

interface Props {
  error?: Error
  onReload: () => void
  onTryAgain: () => void
}

export function ErrorBoundaryPage({ error, onReload, onTryAgain }: Props) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <section className="relative hidden flex-1 md:flex">
        <Reveal animation="fade" delay={0.2} duration={1}>
          <img
            src={FamilyPatch}
            alt="Plano Santa Casa Saúde"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </Reveal>

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="relative z-10 flex h-full w-full items-end justify-center pb-10">
          <div className="text-center">
            <img src={logoScs} alt="Logo" className="mx-auto w-72 object-contain" />

            <p className="mt-3 text-sm font-semibold text-white">Portal Fornecedor</p>
          </div>
        </div>
      </section>

      <section className="flex flex-1 items-center justify-center bg-white">
        <div className="w-full max-w-lg px-8 text-center">
          <Reveal animation="zoom">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
              <i
                className="pi pi-times-circle"
                style={{
                  fontSize: "3rem",
                  color: "#dc2626",
                }}
              />
            </div>
          </Reveal>

          <Reveal animation="slideLeft" delay={0.2}>
            <h1 className="text-3xl font-bold text-gray-900">Ocorreu um erro inesperado</h1>
          </Reveal>

          <Reveal animation="fade" delay={0.4}>
            <p className="mt-4 text-sm leading-6 text-gray-500">
              Algo inesperado aconteceu durante a execução da aplicação. Você pode tentar novamente
              ou recarregar a página.
            </p>
          </Reveal>

          {import.meta.env.DEV && error && (
            <div className="mt-6 rounded-lg bg-gray-100 p-4 text-left">
              <pre className="overflow-auto text-xs text-red-600">{error.stack}</pre>
            </div>
          )}

          <Reveal animation="slideUp" delay={0.6}>
            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={onTryAgain}
                className="h-11 rounded-md bg-[#2181FF] font-semibold text-white transition hover:bg-[#1766c7]"
              >
                Tentar novamente
              </button>

              <button
                onClick={onReload}
                className="h-11 rounded-md border border-gray-300 bg-white font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Recarregar página
              </button>
            </div>
          </Reveal>

          <div className="mt-8 border-t border-dashed border-gray-200 pt-4">
            <p className="text-xs text-gray-400">
              © 2026 Plano Santa Casa Saúde. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
