import {
  DataTable as PrDataTable,
  type DataTableProps as PrDataTableProps,
} from "primereact/datatable"
import { Column, type ColumnProps } from "primereact/column"
import { useState, useMemo, forwardRef } from "react"
import { InputText } from "primereact/inputtext"
import { Button, ButtonIcon, ButtonSeverity } from "../Button"
import { Dropdown } from "primereact/dropdown"

export interface IColumnsConfig extends ColumnProps {
  id: string
  filterType?: "text" | "select"
  filterOptions?: { label: string; value: any }[]
}

interface IRowActionConfig<T> {
  header?: string
  icon?: ButtonIcon | string
  label?: string
  severity?: "secondary" | "success" | "info" | "warning" | "danger" | "help" | "contrast"
  className?: string
  onClick: (rowData: T) => void
}

/* @ts-ignore */
interface CustomDataTableProps<T> extends Omit<PrDataTableProps<T[]>, "value"> {
  value: T[]
  columnsConfig: IColumnsConfig[]
  loading?: boolean
  labelSearch?: string
  exportCSV?: (selectionOnly: any) => void
  rowAction?: IRowActionConfig<T>
  onSelectedRowsChange?: (rows: T[]) => void
  hiddenCheckBox?: boolean
}

export const DataTable = forwardRef<PrDataTable<any[]>, CustomDataTableProps<any>>(
  (
    {
      value,
      columnsConfig,
      loading = false,
      className = "",
      labelSearch,
      exportCSV,
      rowAction,
      onSelectedRowsChange,
      hiddenCheckBox = false,
      ...props
    },
    ref
  ) => {
    const [globalFilter, setGlobalFilter] = useState("")
    const [selectedRows, setSelectedRows] = useState<any[]>([])

    const filteredValue = useMemo(() => {
      if (!globalFilter.trim()) return value
      const filterLower = globalFilter.toLowerCase()

      return value.filter((item) =>
        Object.values(item as object).some((val) => String(val).toLowerCase().includes(filterLower))
      )
    }, [value, globalFilter])

    const tableFooter = exportCSV ? (
      <div className="flex justify-end p-3">
        <Button
          severity={ButtonSeverity.SUCCESS}
          isIconButton
          icon={ButtonIcon.EXPORT}
          onClick={() => exportCSV(false)}
        />
      </div>
    ) : null

    const renderFilterElement = (col: IColumnsConfig) => {
      if (col.filterType === "select") {
        return (options: any) => (
          <Dropdown
            value={options.value}
            options={col.filterOptions}
            onChange={(e) => options.filterApplyCallback(e.value)}
            placeholder="Selecione"
            showClear
            className="p-column-filter"
          />
        )
      }

      return undefined
    }

    return (
      <div
        className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ${className} `}
      >
        {labelSearch && (
          <div className="flex justify-end p-4">
            <div className="relative w-full max-w-sm">
              <InputText
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                placeholder={labelSearch}
                className="w-full rounded-md border border-gray-300 py-2 pr-3 pl-10 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* @ts-ignore */}
        <PrDataTable
          ref={ref}
          value={filteredValue}
          selection={selectedRows}
          onSelectionChange={(event) => {
            const nextRows = (event.value ?? []) as any[]
            setSelectedRows(nextRows)
            onSelectedRowsChange?.(nextRows)
          }}
          loading={loading}
          dataKey="id"
          paginator
          footer={tableFooter}
          rows={10}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
          emptyMessage={
            <div className="w-full py-6 text-center text-sm text-gray-500">
              Nenhum registro encontrado.
            </div>
          }
          removableSort
          csvSeparator=";"
          className="text-sm"
          pt={{
            header: { className: "bg-white border-none px-4 py-3" },
            wrapper: { className: "border-none" },
          }}
          {...props}
        >
          {!hiddenCheckBox && <Column selectionMode="multiple" headerStyle={{ width: "3rem" }} />}

          {columnsConfig.map((col) => {
            const { id, filterType, filterOptions, ...columnProps } = col

            return <Column key={id} {...columnProps} filterElement={renderFilterElement(col)} />
          })}

          {rowAction ? (
            <Column
              header={rowAction.header ?? "Ações"}
              align="center"
              style={{ width: "6rem" }}
              body={(rowData) => (
                <Button
                  icon={rowAction.icon ?? "pi pi-eye"}
                  label={rowAction.label}
                  severity={rowAction.severity}
                  isIconButton={!rowAction.label}
                  className={rowAction.className ?? "h-9! w-9!"}
                  onClick={() => rowAction.onClick(rowData)}
                />
              )}
            />
          ) : null}
        </PrDataTable>
      </div>
    )
  }
)
