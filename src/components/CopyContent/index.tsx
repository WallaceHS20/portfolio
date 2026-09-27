import { useNotificationContext } from "@/contexts/Notification"
import { Tooltip } from "primereact/tooltip"

interface CopyContentProps {
  content: string | number
  label?: string | number
}

export const CopyContent = ({ content, label }: CopyContentProps) => {
  const { showToast } = useNotificationContext()
  const tooltipId = `copy-tip-${content.toString().replace(/\s+/g, "-")}`

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault() // Previne o comportamento padrão (ex: selecionar linha)
    e.stopPropagation() // Impede que o clique "vaze" para a tabela

    const textToCopy = content.toString()

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy)
      } else {
        const textArea = document.createElement("textarea")
        textArea.value = textToCopy

        // Usar fixed evita que a página faça scroll indesejado para baixo
        textArea.style.position = "fixed"
        textArea.style.opacity = "0"
        textArea.style.left = "-999999px"
        textArea.style.top = "-999999px"

        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()

        const successful = document.execCommand("copy")
        textArea.remove()

        // A MÁGICA AQUI: Limpa a seleção para não destacar a linha da tabela
        window.getSelection()?.removeAllRanges()

        if (!successful) {
          throw new Error("O comando de cópia falhou.")
        }
      }

      showToast("info", "Copiado", `Conteúdo: ${textToCopy}`)
    } catch (err) {
      console.error("Erro ao copiar:", err)
      showToast("error", "Erro", "Não foi possível copiar.")
    }
  }

  return (
    <div className="align-items-center flex gap-2">
      {label && <span className="font-mono text-sm">{label}</span>}

      <Tooltip target={`.${tooltipId}`} content="Copiar" position="top" />

      <i
        className={`${tooltipId} pi pi-copy text-primary transition-duration-200 cursor-pointer p-1 transition-colors hover:text-blue-800`}
        onClick={handleCopy}
        style={{ fontSize: "1.1rem" }}
      />
    </div>
  )
}
