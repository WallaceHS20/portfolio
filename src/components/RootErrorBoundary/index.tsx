import { ErrorBoundaryPage } from "@/pages/ErrorBoundaryPage"
import { useRouteError, useNavigate } from "react-router-dom"

export function RootErrorBoundary() {
  const error = useRouteError() as Error
  const navigate = useNavigate()

  const handleTryAgain = () => {
    // Tenta re-navegar para a rota atual ou voltar
    navigate(0)
  }

  const handleReload = () => {
    window.location.reload()
  }

  return <ErrorBoundaryPage error={error} onTryAgain={handleTryAgain} onReload={handleReload} />
}
