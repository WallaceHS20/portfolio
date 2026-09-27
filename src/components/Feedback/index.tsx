import { classNames } from "primereact/utils"

interface Props {
  message?: React.ReactNode
  type?: "invalid" | "valid" | "info"
  className?: string
}

export const Feedback = ({ message, className, type = "invalid" }: Props) => {
  if (!message) return null

  const typeStyles = {
    invalid: "text-danger",
    valid: "text-success",
    info: "text-primary",
  }

  return (
    <small
      className={classNames(
        "animate-in fade-in slide-in-from-top-1 mt-1 text-xs font-medium transition-all duration-200",
        typeStyles[type],
        className
      )}
    >
      {message}
    </small>
  )
}
