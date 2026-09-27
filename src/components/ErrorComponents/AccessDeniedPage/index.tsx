import { PageRoutesKeys } from "@/Interfaces/Routes"
import { useNavigate } from "react-router-dom"

import { Button, ButtonSeverity, ButtonVariant } from "@/components/Button"
import logoPath from "../../../assets/logo.png"

export const AccessDenied = () => {
  const navigate = useNavigate()

  return (
    <div className="flex-column align-items-center justify-content-center flex h-screen gap-4 p-4 text-center">
      <img src={logoPath} alt="logo" className="mb-3 w-40" />

      <h1 className="text-4xl font-bold text-red-500">Acesso Negado</h1>

      <p className="text-600 max-w-30rem text-lg">
        Você não tem permissão para acessar esta página. Entre em contato com o administrador caso
        acredite que isso seja um engano.
      </p>

      <div className="mt-3 flex gap-3">
        <Button
          label="Voltar para o início"
          variant={ButtonVariant.OUTLINED}
          severity={ButtonSeverity.SECONDARY}
          onClick={() => navigate(PageRoutesKeys.HOME)}
        />

        <Button
          label="Retornar a página anterior"
          onClick={() => navigate(-1)}
          className="p-button"
        ></Button>
      </div>
    </div>
  )
}
