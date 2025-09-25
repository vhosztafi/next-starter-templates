import { Input as HeroUIInput, InputProps as HeroUIInputProps } from "@heroui/react"
import { cn } from "@/lib/utils"

export interface InputProps extends HeroUIInputProps {
  variant?: "flat" | "bordered" | "faded" | "underlined"
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger"
  size?: "sm" | "md" | "lg"
}

const Input = ({ className, variant = "bordered", color = "default", size = "md", ...props }: InputProps) => {
  return (
    <HeroUIInput
      className={cn("", className)}
      variant={variant}
      color={color}
      size={size}
      {...props}
    />
  )
}

export { Input }
