import type { JSX } from "react"
import { InputText, type InputTextProps } from "primereact/inputtext"
import { classNames } from "primereact/utils"
import { Feedback } from "../Feedback"

//@ts-ignore
export interface Props extends InputTextProps {
  id: string
  name: string | number
  label: string | JSX.Element
  value?: string | number | null
  placeholder?: string
  error?: string
  success?: string
  disabled?: boolean
  inputClassName?: string
  feedbackClassName?: string
  isOptional?: boolean
}

export const BasicInputField = ({
  name,
  value,
  label,
  id,
  error,
  success,
  disabled = false,
  className,
  inputClassName,
  feedbackClassName = "text-red-500",
  isOptional,
  ...rest
}: Props) => {
  const uniqueId = `field-${id}`
  const feedbackMessage = success || error || undefined

  const inputClass = classNames(
    "peer w-full rounded-lg border bg-transparent px-3 pb-2 pt-5 text-sm outline-none transition-all",
    "focus:outline-none focus:ring-0 shadow-none",
    {
      "border-gray-300 focus:border-blue-500": !error,
      "border-red-500 focus:border-red-500": !!error,
      "opacity-60 cursor-not-allowed": disabled,
    },
    className,
    inputClassName
  )

  return (
    // Removido o 'relative' daqui. Ele agora é apenas um wrapper geral.
    <div className="w-full flex flex-col gap-1"> 
      
      {/* NOVO WRAPPER: O 'relative' agora envolve APENAS o input e a label */}
      <div className="relative w-full">
        <InputText
          id={uniqueId}
          name={name.toString()}
          value={value?.toString() ?? ""}
          disabled={disabled}
          className={inputClass}
          placeholder=" " 
          invalid={!!error}
          {...rest}
        />

        <label
          htmlFor={uniqueId}
          className={classNames(
            "pointer-events-none absolute left-2 z-10 origin-left transform bg-white px-2 text-sm duration-300",
            "max-w-[90%] truncate whitespace-nowrap",

            "top-2 -translate-y-4 scale-75",

            "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100",

            "peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75",

            {
              "text-gray-500 peer-focus:text-blue-500": !error,
              "text-red-500 peer-focus:text-red-500": !!error,
            }
          )}
        >
          {label} {isOptional && <span className="text-xs text-gray-400">(Opcional)</span>}
        </label>
      </div>

      {/* O Feedback fica de fora do contêiner relative */}
      <Feedback
        type={success ? "valid" : error ? "invalid" : "info"}
        className={feedbackClassName}
        message={feedbackMessage}
      />
    </div>
  )
}