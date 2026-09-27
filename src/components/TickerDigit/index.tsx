import { motion, useSpring, useTransform } from "framer-motion"
import { useEffect } from "react"

interface TickerDigitProps {
  digit: string
}

export const TickerDigit = ({ digit }: TickerDigitProps) => {
  const numericDigit = parseInt(digit, 10)

  if (isNaN(numericDigit)) {
    return <span className="inline-block">{digit}</span>
  }

  const animatedValue = useSpring(0, {
    stiffness: 70,
    damping: 15,
    mass: 0.8,
  })

  useEffect(() => {
    animatedValue.set(numericDigit)
  }, [numericDigit, animatedValue])

  const y = useTransform(animatedValue, (latest) => `${latest * -10}%`)

  return (
    // Altura fixa (h-[1.5em]) e overflow oculto criam a nossa "janela" de visualização
    <span className="relative inline-block h-[1.5em] overflow-hidden leading-none">
      <motion.span style={{ y }} className="absolute inset-x-0 top-0 flex flex-col">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <span key={num} className="flex h-[1.5em] items-center justify-center">
            {num}
          </span>
        ))}
      </motion.span>
      <span className="invisible select-none">0</span>
    </span>
  )
}
