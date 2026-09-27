import { TickerDigit } from "."

interface CounterTickerProps {
  value: number
  prefix?: string
}

export const CounterTicker = ({ value, prefix = "" }: CounterTickerProps) => {
  // Transforma o número em string (ex: 12500 -> "12.500" ou apenas "12500")
  const formatNumber = (num: number) => {
    return num.toLocaleString("pt-BR") // Formata com pontos/vírgulas locais
  }

  const digitsArray = formatNumber(value).split("")

  return (
    <div className="inline-flex items-center text-2xl font-extrabold text-slate-800">
      {prefix && <span className="mr-1">{prefix}</span>}
      {digitsArray.map((char, index) => (
        <TickerDigit key={index} digit={char} />
      ))}
    </div>
  )
}
