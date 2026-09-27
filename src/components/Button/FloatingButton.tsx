import { UserRole } from "@/Interfaces/Auth"
import { Button, ButtonIcon } from "."

interface FloatingButtonProps {
  icon?: ButtonIcon | string
  label?: string
  onClick?: () => void
  severity?: "secondary" | "success" | "info" | "warning" | "danger" | "help" | "contrast"
  permission?: UserRole[]
  className?: string
  isIconButton?: boolean
}

export function FloatingButton({
  icon = ButtonIcon.ADD,
  severity = "primary" as any,
  className = "",
  isIconButton = true,
  ...props
}: FloatingButtonProps) {
  return (
    <div className="animate-floating fixed right-8 bottom-8 z-50">
      <Button
        {...props}
        icon={icon}
        severity={severity}
        isIconButton={isIconButton}
        className={`scale-100 animate-bounce shadow-2xl transition-all active:scale-95 ${className}`}
      />
    </div>
  )
}
