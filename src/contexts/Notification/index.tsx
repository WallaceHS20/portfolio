import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"

import { Toast } from "primereact/toast"
import Logo from "@/assets/logo.png"

interface Props {
  loading: boolean

  showToast: (
    severity: "success" | "info" | "warn" | "error",
    summary: string,
    detail: string
  ) => void

  Loading: {
    show: (message?: string) => void
    hide: () => void
  }
}

const NotificationContext = createContext<Props | null>(null)

interface NotificationProviderProps {
  children: ReactNode
}

const defaultMessage = "Carregando..."

export function NotificationProvider({ children }: NotificationProviderProps) {
  const toast = useRef<Toast>(null)

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(defaultMessage)

  /**
   * Toast
   */
  const showToast = useCallback(
    (severity: "success" | "info" | "warn" | "error", summary: string, detail: string) => {
      toast.current?.show({
        severity,
        summary,
        detail,
        life: 3000,
      })
    },
    []
  )

  /**
   * Loading global
   */
  const showLoading = useCallback((msg?: string) => {
    setMessage(msg || defaultMessage)
    setLoading(true)
  }, [])

  const hideLoading = useCallback(() => {
    setLoading(false)
  }, [])

  const Loading = useMemo(
    () => ({
      show: showLoading,
      hide: hideLoading,
    }),
    [showLoading, hideLoading]
  )

  /**
   * Context value
   */
  const value = useMemo(
    () => ({
      Loading,
      showToast,
      loading,
    }),
    [Loading, showToast, loading]
  )

  return (
    <NotificationContext.Provider value={value}>
      <Toast ref={toast} position="top-right" />

      {loading && (
        <div className="z-9999999 fixed inset-0 flex items-center justify-center overflow-hidden bg-black/10 backdrop-blur-md">
          <div className="relative flex flex-col items-center gap-8">
            <div className="relative">
              <div className="absolute inset-0 scale-125 rounded-full bg-amber-50/80 blur-2xl" />

              <img src={Logo} className="z-999999 animate-float relative" alt="Logo" />
            </div>

            <div className="relative h-1.5 w-72 overflow-hidden rounded-full bg-slate-800 shadow-inner">
              <div className="bg-linear-to-r absolute inset-0 from-sky-900 via-sky-700 to-sky-900 opacity-40" />

              <div className="animate-loading bg-linear-to-r absolute inset-0 from-transparent via-cyan-300 to-transparent" />

              <div className="animate-pulse-custom absolute inset-0 bg-cyan-400/10 blur-sm" />
            </div>

            {message && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold uppercase tracking-[0.35em]">{message}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {children}
    </NotificationContext.Provider>
  )
}

export const useNotificationContext = () => {
  const context = useContext(NotificationContext)

  if (!context) {
    throw new Error("useNotificationContext deve ser usado dentro de um NotificationProvider")
  }

  return context
}
