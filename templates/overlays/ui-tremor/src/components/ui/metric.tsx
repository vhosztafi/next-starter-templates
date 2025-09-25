import { Metric as TremorMetric, MetricProps as TremorMetricProps } from "@tremor/react"
import { cn } from "@/lib/utils"

export interface MetricProps extends TremorMetricProps {
  className?: string
}

const Metric = ({ className, ...props }: MetricProps) => {
  return (
    <TremorMetric
      className={cn("", className)}
      {...props}
    />
  )
}

export { Metric }
