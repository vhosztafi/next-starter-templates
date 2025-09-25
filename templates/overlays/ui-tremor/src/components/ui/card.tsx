import { Card as TremorCard, CardProps as TremorCardProps } from "@tremor/react"
import { cn } from "@/lib/utils"

export interface CardProps extends TremorCardProps {
  className?: string
}

const Card = ({ className, ...props }: CardProps) => {
  return (
    <TremorCard
      className={cn("", className)}
      {...props}
    />
  )
}

export { Card }
