import { Button as FlowbiteButton, ButtonProps as FlowbiteButtonProps } from "flowbite-react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends FlowbiteButtonProps {
  variant?: "primary" | "secondary" | "success" | "failure" | "warning" | "info" | "light" | "dark" | "purple" | "blue" | "cyan" | "green" | "lime" | "red" | "pink" | "gray"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
}

const Button = ({ className, variant = "primary", size = "md", ...props }: ButtonProps) => {
  return (
    <FlowbiteButton
      className={cn("", className)}
      color={variant}
      size={size}
      {...props}
    />
  )
}

export { Button }
