import { CopyContent } from "@/components/CopyContent"

interface Props {
  protocolID: string | string
}

export const CallCenterCopy = ({ protocolID }: Props) => {
  if (!protocolID) return <span>---</span>

  return (
    <div className="flex gap-2">
      <CopyContent content={protocolID} label={protocolID} />

      <i
        className="pi pi-external-link transition-duration-200 cursor-pointer p-1 text-primary transition-colors hover:text-blue-800"
        style={{ fontSize: "1rem" }}
      />
    </div>
  )
}
