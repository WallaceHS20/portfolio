import { useNavigate } from "react-router-dom"
import { PageRoutesKeys } from "@/Interfaces/Routes"

import logoPath from "../../../assets/logo.png"
import { Button, ButtonSeverity, ButtonVariant } from "@/components/Button"

interface EmptyStateProps {
  title: string
  description: string
  icon?: string
  showBackAction?: boolean
  showHomeAction?: boolean
  fullPage?: boolean
}

export const EmptyState = ({
  title,
  description,
  icon = "pi pi-search-minus",
  showBackAction = true,
  showHomeAction = true,
  fullPage = true,
}: EmptyStateProps) => {
  const navigate = useNavigate()

  const containerClass = fullPage
    ? "min-h-screen flex items-center justify-center px-4"
    : "w-full flex items-center justify-center py-12 px-4"

  return (
    <div className={containerClass}>
      <div className="flex w-full max-w-md flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-4">
          {fullPage ? (
            <img src={logoPath} alt="logo" className="w-32 object-contain sm:w-40" />
          ) : (
            <i className={`${icon} text-5xl text-gray-400`} />
          )}

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">{title}</h2>
            <p className="text-sm leading-relaxed text-gray-500 sm:text-base">{description}</p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          {showBackAction && (
            <Button
              label="Voltar"
              onClick={() => navigate(-1)}
              variant={ButtonVariant.OUTLINED}
              severity={ButtonSeverity.SECONDARY}
              className="w-full sm:w-auto"
            ></Button>
          )}

          {showHomeAction && (
            <Button
              label="Ir para o Dashboard"
              onClick={() => navigate(PageRoutesKeys.DASHBOARD)}
              className="w-full sm:w-auto"
            />
          )}
        </div>
      </div>
    </div>
  )
}
