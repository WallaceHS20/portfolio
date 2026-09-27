import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react"

interface Props {
  showSkeleton: (key: string) => void
  hideSkeleton: (key: string) => void
  isSkeletonLoading: (key: string) => boolean
}

const SkeletonContext = createContext<Props | null>(null)

export function SkeletonProvider({ children }: { children: ReactNode }) {
  const [skeletons, setSkeletons] = useState<Record<string, boolean>>({})

  const showSkeleton = useCallback((key: string) => {
    setSkeletons((prev) => ({
      ...prev,
      [key]: true,
    }))
  }, [])

  const hideSkeleton = useCallback((key: string) => {
    setSkeletons((prev) => ({
      ...prev,
      [key]: false,
    }))
  }, [])

  const isSkeletonLoading = useCallback(
    (key: string) => {
      return !!skeletons[key]
    },
    [skeletons]
  )

  const value = useMemo(
    () => ({
      showSkeleton,
      hideSkeleton,
      isSkeletonLoading,
    }),
    [showSkeleton, hideSkeleton, isSkeletonLoading]
  )

  return <SkeletonContext.Provider value={value}>{children}</SkeletonContext.Provider>
}

export function useSkeletonContext() {
  const context = useContext(SkeletonContext)

  if (!context) {
    throw new Error("useSkeletonContext deve ser usado dentro de SkeletonProvider")
  }

  return context
}
