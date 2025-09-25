import { Button as TremorButton, ButtonProps as TremorButtonProps } from "@tremor/react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends TremorButtonProps {
  variant?: "primary" | "secondary" | "light" | "outline"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  color?: "blue" | "green" | "red" | "orange" | "yellow" | "purple" | "pink" | "indigo" | "gray" | "slate" | "zinc" | "neutral" | "stone"
}

const Button = ({ 
  className, 
  variant = "primary", 
  size = "md", 
  color = "blue",
  ...props 
}: ButtonProps) => {
  return (
    <TremorButton
      className={cn("", className)}
      variant={variant}
      size={size}
      color={color}
      {...props}
    />
  )
}

export { Button }
