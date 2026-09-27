import { PageRoutesKeys } from "@/Interfaces/Routes"
import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom"

import logoPath from "../../../assets/logo.png"
import { Button, ButtonSeverity, ButtonVariant } from "../../Button"

export const ErrorBoundary = () => {
  const error = useRouteError()
  const navigate = useNavigate()

  let title = "Erro inesperado"
  let message = "Algo deu errado. Tente novamente mais tarde."

  if (isRouteErrorResponse(error)) {
    title = `Erro ${error.status}`
    message = error.statusText
  } else if (error instanceof Error) {
    message = error.message
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="flex w-full max-w-md flex-col items-center gap-6 text-center">
        <img src={logoPath} alt="Logo" className="w-32 object-contain sm:w-40" />

        <h1 className="text-3xl font-semibold text-red-500 sm:text-4xl">{title}</h1>

        <p className="text-sm leading-relaxed text-gray-500 sm:text-base">{message}</p>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button
            label="Voltar para o início"
            variant={ButtonVariant.OUTLINED}
            severity={ButtonSeverity.SECONDARY}
            onClick={() => navigate(PageRoutesKeys.HOME)}
            className="w-full sm:w-auto"
          />

          <Button
            label="Recarregar"
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </div>
  )
}
