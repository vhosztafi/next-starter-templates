import { 
  AreaChart as TremorAreaChart,
  AreaChartProps as TremorAreaChartProps,
  BarChart as TremorBarChart,
  BarChartProps as TremorBarChartProps,
  LineChart as TremorLineChart,
  LineChartProps as TremorLineChartProps,
  DonutChart as TremorDonutChart,
  DonutChartProps as TremorDonutChartProps,
  PieChart as TremorPieChart,
  PieChartProps as TremorPieChartProps
} from "@tremor/react"
import { cn } from "@/lib/utils"

export interface AreaChartProps extends TremorAreaChartProps {
  className?: string
}

const AreaChart = ({ className, ...props }: AreaChartProps) => {
  return (
    <TremorAreaChart
      className={cn("", className)}
      {...props}
    />
  )
}

export interface BarChartProps extends TremorBarChartProps {
  className?: string
}

const BarChart = ({ className, ...props }: BarChartProps) => {
  return (
    <TremorBarChart
      className={cn("", className)}
      {...props}
    />
  )
}

export interface LineChartProps extends TremorLineChartProps {
  className?: string
}

const LineChart = ({ className, ...props }: LineChartProps) => {
  return (
    <TremorLineChart
      className={cn("", className)}
      {...props}
    />
  )
}

export interface DonutChartProps extends TremorDonutChartProps {
  className?: string
}

const DonutChart = ({ className, ...props }: DonutChartProps) => {
  return (
    <TremorDonutChart
      className={cn("", className)}
      {...props}
    />
  )
}

export interface PieChartProps extends TremorPieChartProps {
  className?: string
}

const PieChart = ({ className, ...props }: PieChartProps) => {
  return (
    <TremorPieChart
      className={cn("", className)}
      {...props}
    />
  )
}

export { AreaChart, BarChart, LineChart, DonutChart, PieChart }
