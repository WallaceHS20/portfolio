
import { ReactNode } from "react"

interface DataTableWithHeaderProps {
  headerActions?: ReactNode
  children: ReactNode
  className?: string
}

export function DataTableWithHeader({
  headerActions,
  children,
  className = "",
}: DataTableWithHeaderProps) {

  return (
    <div className={className}>
      {/* HEADER */}
      <div
        className="
          surface-border d-flex
          justify-content-start md:justify-content-end flex-wrap
          gap-2
          p-1
          
        "
      >
        {headerActions}
      </div>

      {/* TABLE */}
      <div className=" overflow-auto p-1">{children}</div>
    </div>
  )
}
