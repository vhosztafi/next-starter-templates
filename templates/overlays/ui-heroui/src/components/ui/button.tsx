import { Button as HeroUIButton, ButtonProps as HeroUIButtonProps } from "@heroui/react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends HeroUIButtonProps {
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost"
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger"
  size?: "sm" | "md" | "lg"
}

const Button = ({ className, variant = "solid", color = "primary", size = "md", ...props }: ButtonProps) => {
  return (
    <HeroUIButton
      className={cn("", className)}
      variant={variant}
      color={color}
      size={size}
      {...props}
    />
  )
}

export { Button }
