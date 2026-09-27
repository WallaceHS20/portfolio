import { useNavigate } from "react-router-dom"
import { PageRoutesKeys } from "@/Interfaces/Routes"

import logoPath from "../../../assets/logo.png"
import { Button, ButtonSeverity, ButtonVariant } from "@/components/Button"

export const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 p-4 text-center">
      <img src={logoPath} alt="logo" className="mb-2 w-40" />

      <div className="flex flex-col items-center gap-2">
        <h1 className="m-0 text-6xl font-bold text-red-500">404</h1>

        <h2 className="m-0 text-2xl font-semibold text-gray-700">Página não encontrada</h2>
      </div>

      <p className="max-w-[30rem] text-lg leading-relaxed text-gray-600">
        A página que você está tentando acessar pode ter sido movida, removida ou nunca existiu.
        Verifique o endereço ou use as opções abaixo para continuar navegando.
      </p>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <Button
          label="Ir para o início"
          variant={ButtonVariant.OUTLINED}
          severity={ButtonSeverity.SECONDARY}
          onClick={() => navigate(PageRoutesKeys.DASHBOARD)}
        />

        <Button label="Retornar a página anterior" onClick={() => navigate(-1)} />
      </div>

      <div className="mt-4 max-w-[30rem] text-sm text-gray-500">
        Se você acredita que isso é um erro, entre em contato com o suporte do sistema.
      </div>
    </div>
  )
}
