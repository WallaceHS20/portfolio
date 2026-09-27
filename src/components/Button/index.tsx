import { Button as PrimeButton } from "primereact/button"

export enum ButtonSeverity {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  DANGER = "danger",
  HELP = "help",
  CONTRAST = "contrast",
}

export enum ButtonVariant {
  SOLID = "solid",
  OUTLINED = "outlined",
  TEXT = "text",
}

export enum ButtonIcon {
  LOGIN = "pi pi-sign-in",
  LOGOUT = "pi pi-sign-out",
  SAVE = "pi pi-check",
  DELETE = "pi pi-trash",
  EDIT = "pi pi-pencil",
  ADD = "pi pi-plus",
  SEARCH = "pi pi-search",
  COPY = "pi pi-copy",
  BUY = "pi pi-shopping-cart",
  EXPORT = "pi pi-file-export",
  SEE = "pi pi-eye",
  WARNING = "pi pi-exclamation-triangle",
  LINK = "pi pi-external-link",
}

interface CustomButtonProps {
  label?: string
  icon?: ButtonIcon | string
  severity?:
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "help"
    | "contrast"
    | undefined
  variant?: ButtonVariant
  isIconButton?: boolean
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  outlined?: boolean
}

export function Button({
  label,
  icon,
  severity,
  variant = ButtonVariant.SOLID,
  isIconButton = false,
  className = "",
  ...props
}: CustomButtonProps) {

  const getVariantProps = () => {
    switch (variant) {
      case ButtonVariant.OUTLINED:
        return { outlined: true }
      case ButtonVariant.TEXT:
        return { text: true }
      default:
        return {}
    }
  }

  const baseClass = `
    ${isIconButton ? "p-button-rounded p-button-icon-only" : ""}
    ${
      isIconButton
        ? "w-10 h-10 flex align-items-center justify-content-center p-0"
        : "px-3 py-2 flex align-items-center gap-2"
    }
    font-medium text-sm
    ${className}
  `

  return (
    <PrimeButton
      label={!isIconButton ? label : undefined}
      icon={icon}
      severity={severity}
      {...getVariantProps()}
      className={baseClass}
      {...props}
    />
  )
}
