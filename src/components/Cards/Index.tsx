interface CardProps {
  icon: React.ReactNode
  title: string
  description: string
  active?: boolean
  onClick?: () => void
  className?: string
}

export const Card = ({ icon, title, description, active = false, onClick, className = "" }: CardProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-w-30 flex flex-col gap-2 rounded-2xl border px-2 py-4 text-left shadow transition
        ${active ? "border-[#2563EB] bg-[#EFF6FF] ring-2 ring-[#BFDBFE]" : "border-transparent bg-white hover:border-[#BFDBFE] hover:bg-[#F8FAFC]"}
        ${onClick ? "cursor-pointer" : "cursor-default"}
        ${className}`}
    >
      <i className={`pi ${icon} w-fit rounded-xl bg-[#EFF6FF] p-2 text-[#2563EB]`} />

      <div>
        <p className="text-4xl font-bold">{title}</p>
        <p className="text-xs font-bold text-gray-500 uppercase">{description}</p>
      </div>
    </button>
  )
}
