import { useState, type JSX } from "react";
import { InputText } from "primereact/inputtext";
import { Feedback } from "../Feedback";

export interface InputFieldProps {
  id: string;
  name: string;
  label: string | JSX.Element;
  type?: "text" | "password" | "email" | "number";
  value?: string | number;
  placeholder?: string;
  error?: string;
  success?: string;
  disabled?: boolean;
  labelClassName?: string;
  inputClassName?: string;
  feedbackClassName?: string;
  isOptional?: boolean;
  leftIcon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordField = ({
  name,
  value,
  label,
  id,
  error,
  success,
  placeholder,
  labelClassName = "",
  inputClassName = "",
  feedbackClassName = "text-red-500",
  disabled = false,
  isOptional,
  leftIcon,
  onChange,
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const uniqueId = `input-field-${id}`;
  const feedbackMessage = success || error;

  const borderColor = error
    ? "border-red-500 focus:ring-red-500"
    : success
      ? "border-green-500 focus:ring-green-500"
      : "border-gray-300 focus:ring-blue-500";

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={uniqueId}
        className={`text-sm font-medium text-gray-700 ${labelClassName}`}
      >
        {label}
        {isOptional && (
          <span className="ml-1 text-xs text-gray-400">(Opcional)</span>
        )}
      </label>

      <div className="relative w-full">
        {leftIcon && (
          <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}

        <div className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
          <i
            onClick={() => setShowPassword(!showPassword)}
            className={`${showPassword ? "pi pi-eye" : "pi pi-eye-slash"} text-gray-600 cursor-pointer`}
          ></i>
        </div>

        <InputText
          invalid={!!error}
          id={uniqueId}
          name={name}
          type={showPassword ? "text" : "password"}
          value={String(value)}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full ${leftIcon ? "pl-10!" : "pl-3"} rounded-md border py-2 text-sm ${borderColor} transition-all focus:ring-2 focus:outline-none ${inputClassName} `}
        />
      </div>

      <Feedback
        type={success ? "valid" : error ? "invalid" : "info"}
        className={feedbackClassName}
        message={feedbackMessage}
      />
    </div>
  );
};
