import { Dropdown, type DropdownProps } from "primereact/dropdown"
import { ColTypeKey, type THandleSetFieldProps } from "../../Interfaces/Common"
import { Feedback } from "../Feedback"

interface Props extends Omit<DropdownProps, "onChange"> {
  id: string
  name: string
  label: string
  error?: string
  colType?: ColTypeKey
  handleSetField: (event: THandleSetFieldProps) => void
}

export const BasicSelectField = ({
  id,
  name,
  label,
  error,
  colType,
  options,
  value,
  handleSetField,
  placeholder,
  ...rest
}: Props) => {
  const uniqueId = `select-${id}`

  return (
    <div className="mb-5 flex flex-col gap-1">
      <label htmlFor={uniqueId} className="text-sm ">
        {label}
      </label>

      <Dropdown
        id={uniqueId}
        name={name}
        value={value}
        invalid={!!error}
        options={options}
        onChange={handleSetField}
        placeholder={placeholder || "Selecione..."}
        className={`w-full ${error ? "p-invalid" : ""}`}
        {...rest}
      />

      <Feedback type="invalid" className="mt-1 text-sm text-red-500" message={error} />
    </div>
  )
}
