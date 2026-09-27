import type { JSX } from "react"
import { useMemo, useRef } from "react"
import { classNames } from "primereact/utils"

import { Feedback } from "../Feedback"

import { THandleSetFieldProps } from "@/Interfaces/Common"

export interface DragDropFieldProps {
  id: string
  name: string | number
  label?: string | JSX.Element
  value?: File[] | null
  onChange?: (event: THandleSetFieldProps) => void
  error?: string
  success?: string
  disabled?: boolean
  isOptional?: boolean
  maxSizeInMB?: number
  allowedExtensions?: string[]
  multiple?: boolean
  className?: string
  feedbackClassName?: string
}

export const DragDropField = ({
  id,
  name,
  label,
  value = [],
  onChange,
  error,
  success,
  disabled = false,
  isOptional,
  maxSizeInMB = 5,
  allowedExtensions = ["pdf", "jpg", "jpeg", "png"],
  multiple = true,
  className,
  feedbackClassName = "text-red-500",
}: DragDropFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const feedbackMessage = success || error || undefined

  const acceptString = allowedExtensions
    .map((ext) => `.${ext.replace(".", "")}`)
    .join(",")

  // Total usado em bytes
  const totalUsedBytes = useMemo(() => {
    return (value || []).reduce((acc, file) => acc + file.size, 0)
  }, [value])

  // Limite total em bytes
  const maxBytes = maxSizeInMB * 1024 * 1024

  // Percentual usado
  const usedPercentage = Math.min((totalUsedBytes / maxBytes) * 100, 100)

  // Texto formatado
  const formatMB = (bytes: number) => {
    return (bytes / 1024 / 1024).toFixed(2)
  }

  const handleFiles = (files: FileList | null) => {
    if (!files || disabled) return

    const newFiles = Array.from(files)

    const validFiles = newFiles.filter((file) => {
      const fileExtension = file.name.split(".").pop()?.toLowerCase() || ""
      const isValidExtension = allowedExtensions.includes(fileExtension)
      const isValidSize = file.size <= maxBytes

      if (!isValidExtension) {
        alert(`Arquivo "${file.name}" possui formato inválido.`)
      }

      if (!isValidSize) {
        alert(`Arquivo "${file.name}" excede o limite de ${maxSizeInMB}MB.`)
      }

      return isValidExtension && isValidSize
    })

    if (validFiles.length === 0) return

    const currentFiles = value || []

    const updatedValue = multiple
      ? [...currentFiles, ...validFiles]
      : [validFiles[0]]

    const totalBytes = updatedValue.reduce(
      (acc, file) => acc + file.size,
      0
    )

    if (totalBytes > maxBytes) {
      alert(
        `O total dos arquivos excede o limite máximo de ${maxSizeInMB}MB.`
      )
      return
    }

    onChange?.({
      target: {
        name: String(name),
        value: updatedValue,
      },
    })
  }

  const removeFile = (indexToRemove: number, e: React.MouseEvent) => {
    e.stopPropagation()

    if (disabled || !value) return

    const updatedValue = value.filter(
      (_, index) => index !== indexToRemove
    )

    onChange?.({
      target: {
        name: String(name),
        value: updatedValue.length > 0 ? updatedValue : null,
      },
    })
  }

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          {label}

          {isOptional && (
            <span className="text-gray-400"> (Opcional)</span>
          )}
        </label>
      )}

      <div
        onClick={() => !disabled && inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault()
          handleFiles(e.dataTransfer.files)
        }}
        className={classNames(
          "flex min-h-[180px] w-full cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed p-4 transition-all",
          {
            "border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50/30":
              !error && !disabled,
            "border-red-400 bg-red-50": !!error,
            "cursor-not-allowed opacity-60": disabled,
          },
          className
        )}
      >
        <input
          ref={inputRef}
          id={id}
          name={String(name)}
          type="file"
          accept={acceptString}
          multiple={multiple}
          disabled={disabled}
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />

        <div className="flex w-full flex-col items-center justify-center text-center">
          <div className="mb-4 rounded-full bg-blue-100 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </div>

          <span className="text-sm font-semibold text-gray-700">
            Clique aqui para anexar os documentos ou arraste e solte
          </span>

          <span className="mt-2 text-xs text-gray-400">
            Formatos: {allowedExtensions.join(", ").toUpperCase()} (Máx{" "}
            {maxSizeInMB}MB)
          </span>

          {/* Barra de capacidade */}
          <div className="mt-5 w-full max-w-md">
            <div className="mb-1 flex items-center justify-between text-xs text-gray-500">
              <span>Espaço utilizado</span>

              <span>
                {formatMB(totalUsedBytes)}MB / {maxSizeInMB}MB
              </span>
            </div>

            <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className={classNames(
                  "h-full rounded-full transition-all duration-300",
                  {
                    "bg-green-500": usedPercentage < 70,
                    "bg-yellow-500":
                      usedPercentage >= 70 && usedPercentage < 90,
                    "bg-red-500": usedPercentage >= 90,
                  }
                )}
                style={{
                  width: `${usedPercentage}%`,
                }}
              />
            </div>
          </div>

          {/* Lista de arquivos */}
          {value && value.length > 0 && (
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {value.map((file, index) => (
                <div
                  key={`${file.name}-${index}`}
                  className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 shadow-sm transition-all hover:border-red-200 hover:bg-red-50"
                >
                  <span className="max-w-[150px] truncate text-xs font-medium text-gray-600">
                    {file.name}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => removeFile(index, e)}
                    className="flex h-4 w-4 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-red-400 hover:text-white"
                    title="Remover arquivo"
                  >
                    <span className="text-[10px] font-bold">✕</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Feedback
        type={success ? "valid" : error ? "invalid" : "info"}
        className={feedbackClassName}
        message={feedbackMessage}
      />
    </div>
  )
}