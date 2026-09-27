import type { JSX } from "react"
import { InputTextarea, type InputTextareaProps } from "primereact/inputtextarea"
import { classNames } from "primereact/utils"
import { Feedback } from "../Feedback"

export interface TextAreaProps extends InputTextareaProps {
  id: string
  name: string
  label: string | JSX.Element
  value?: string
  placeholder?: string
  error?: string
  success?: string
  disabled?: boolean
  inputClassName?: string
  feedbackClassName?: string
  isOptional?: boolean
}

export const BasicTextAreaField = ({
  name,
  value,
  label,
  id,
  error,
  success,
  disabled = false,
  inputClassName,
  feedbackClassName = "text-red-500",
  isOptional,
  rows = 5,
  autoResize = true,
  ...rest
}: TextAreaProps) => {
  const uniqueId = `textarea-${id}`
  const feedbackMessage = success || error || undefined

  const inputClass = classNames(
    "peer w-full rounded-lg border bg-transparent px-3 pb-2.5 pt-4 text-sm outline-none transition-all",
    "focus:outline-none focus:ring-0 shadow-none min-h-[100px]",
    {
      "border-gray-300 focus:border-blue-500": !error,
      "border-red-500 focus:border-red-500": !!error,
      "opacity-60 cursor-not-allowed": disabled,
    },
    inputClassName
  )

  return (
    <div className="relative w-full">
      {/* Textarea */}
      <InputTextarea
        id={uniqueId}
        name={name.toString()}
        value={value?.toString() ?? ""}
        disabled={disabled}
        className={inputClass}
        placeholder=" "
        rows={rows}
        autoResize={autoResize}
        invalid={!!error}
        {...rest}
      />

      {/* Label animado estilo Flowbite */}
      <label
        htmlFor={uniqueId}
        className={classNames(
          "absolute left-2 z-10 origin-left -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300",
          // Ajuste fino para textarea: quando placeholder aparece, alinha ao topo com padding
          "top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100",
          "peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75",
          {
            "text-gray-500 peer-focus:text-blue-500": !error,
            "text-red-500 peer-focus:text-red-500": !!error,
          }
        )}
      >
        {label} {isOptional && <span className="text-gray-400">(Opcional)</span>}
      </label>

      {/* Feedback */}
      <Feedback
        type={success ? "valid" : error ? "invalid" : "info"}
        className={feedbackClassName}
        message={feedbackMessage}
      />
    </div>
  )
}
