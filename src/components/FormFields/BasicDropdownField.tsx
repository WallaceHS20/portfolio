import type { FocusEvent, JSX } from "react"
import { useState } from "react"
import { Dropdown, type DropdownProps } from "primereact/dropdown"
import { classNames } from "primereact/utils"
import { Feedback } from "../Feedback"

export interface OptionItem {
  label: string
  value: string | number | null
}

export interface Props extends Omit<DropdownProps, "onChange"> {
  id: string
  name: string
  label: string | JSX.Element
  value?: string | number | null
  options?: OptionItem[]
  onChange?: DropdownProps["onChange"]
  error?: string
  disabled?: boolean
  inputClassName?: string
  feedbackClassName?: string
  isOptional?: boolean
}

export const BasicDropdownField = ({
  name,
  value,
  label,
  id,
  onChange,
  appendTo = "self",
  error,
  disabled = false,
  className,
  inputClassName,
  feedbackClassName,
  isOptional,
  options = [],
  ...rest
}: Props) => {
  const uniqueId = `dropdown-${id}`
  const feedbackMessage = error || undefined
  const [isFocused, setIsFocused] = useState(false)
  const isFilled = value !== null && value !== undefined && value !== ""
  const shouldFloatLabel = isFocused || isFilled

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    rest.onFocus?.(event)
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    rest.onBlur?.(event)
  }

  const inputClass = classNames(
    "peer w-full h-[48px] rounded-lg border bg-transparent px-3 text-sm outline-none transition-all",
    "focus:outline-none focus:ring-0 shadow-none",
    "[&_.p-dropdown-label]:!m-0 [&_.p-dropdown-label]:!px-0 [&_.p-dropdown-label]:!pt-4 [&_.p-dropdown-label]:!pb-2.5 [&_.p-dropdown-label]:!leading-[1.25rem]",
    "[&_.p-dropdown-trigger]:!w-8 [&_.p-dropdown-trigger]:!items-end [&_.p-dropdown-trigger]:!pb-2.5",
    "[&_.p-dropdown-items]:!max-h-[150px] [&_.p-dropdown-items]:!overflow-y-auto",
    {
      "border-gray-300 focus:border-blue-500": !error,
      "border-red-500 focus:border-red-500": !!error,
      "opacity-60 cursor-not-allowed": disabled,
    },
    className,
    inputClassName
  )

  return (
    <div className="relative w-full">
      <Dropdown
        id={uniqueId}
        name={name}
        value={value}
        options={options}
        disabled={disabled}
        className={inputClass}
        placeholder={" "}
        appendTo={appendTo}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />

      <label
        htmlFor={uniqueId}
        className={classNames(
          "pointer-events-none absolute left-2 z-0 origin-left transform bg-white px-2 text-sm duration-300",
          shouldFloatLabel ? "top-2 -translate-y-4 scale-75" : "top-1/2 -translate-y-1/2 scale-100",
          {
            "text-gray-500": !error,
            "text-blue-500": !error && shouldFloatLabel,
            "text-red-500": !!error,
          }
        )}
      >
        {label} {isOptional && <span className="text-gray-400">(Opcional)</span>}
      </label>

      <Feedback
        type={error ? "invalid" : "info"}
        className={feedbackClassName}
        message={feedbackMessage}
      />
    </div>
  )
}

export default BasicDropdownField
