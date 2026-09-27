import { useState, useEffect } from "react"
import { CounterTicker } from "@/components/TickerDigit/CounterTicker"
import { RequestStatus } from "@/Interfaces/Requests"

interface Props {
  TOTAL: number
  TOTAL_CORRECTION: number
  TOTAL_ANALYSIS: number
  TOTAL_APPROVAL: number
  selectedStatus: RequestStatus | null
  onSelectStatus: (status: RequestStatus | null) => void
}

export const Counter = ({
  TOTAL,
  TOTAL_CORRECTION,
  TOTAL_ANALYSIS,
  TOTAL_APPROVAL,
  selectedStatus,
  onSelectStatus,
}: Props) => {
  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const cardItems = [
    {
      label: "Total de Solicitações",
      value: TOTAL,
      status: null, // Mostra todos
      icon: "pi pi-file",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      valueColor: "text-blue-600",
    },
    {
      label: "Aguardando Correção",
      value: TOTAL_CORRECTION,
      status: RequestStatus.CORRECTION,
      icon: "pi pi-exclamation-circle",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      valueColor: "text-amber-600",
    },
    {
      label: "Em Análise - DEPAP",
      value: TOTAL_ANALYSIS,
      status: RequestStatus.DEPAP,
      icon: "pi pi-info-circle",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      valueColor: "text-blue-600",
    },
    {
      label: "Aprovados",
      value: TOTAL_APPROVAL,
      status: RequestStatus.APPROVED,
      icon: "pi pi-check-circle",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      valueColor: "text-emerald-600",
    },
  ]

  return (
    <div className="grid w-full grid-cols-1 gap-4 bg-gray-50 sm:grid-cols-2 lg:grid-cols-4">
      {cardItems.map((item, index) => {
        const isSelected = selectedStatus === item.status
        return (
          <div
            key={index}
            onClick={() => onSelectStatus(item.status)}
            className={`flex cursor-pointer items-center gap-4 rounded-2xl border bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md ${
              item.borderColor
            } ${
              isSelected
                ? "bg-blue-50/40 shadow-md ring-2 ring-blue-500"
                : "opacity-90 hover:opacity-100"
            }`}
          >
            {/* Container do Ícone */}
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg}`}>
              <i className={`${item.icon} ${item.iconColor} text-xl`} />
            </div>

            {/* Textos */}
            <div className="flex flex-col">
              <span className={`text-3xl font-bold leading-none ${item.valueColor}`}>
                <CounterTicker value={startAnimation ? item.value : 0} />
              </span>
              <span className="mt-1 text-sm font-medium text-gray-500">{item.label}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
