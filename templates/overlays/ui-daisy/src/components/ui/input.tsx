import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "bordered" | "ghost" | "primary"
  size?: "xs" | "sm" | "md" | "lg"
  color?: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"
}

const Input = ({ 
  className, 
  variant = "bordered", 
  size = "md", 
  color = "primary",
  ...props 
}: InputProps) => {
  const baseClasses = "input"
  const variantClasses = {
    bordered: "input-bordered",
    ghost: "input-ghost", 
    primary: "input-primary"
  }
  const sizeClasses = {
    xs: "input-xs",
    sm: "input-sm",
    md: "input-md", 
    lg: "input-lg"
  }
  const colorClasses = {
    primary: "input-primary",
    secondary: "input-secondary",
    accent: "input-accent",
    info: "input-info",
    success: "input-success", 
    warning: "input-warning",
    error: "input-error"
  }

  return (
    <input
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      {...props}
    />
  )
}

export { Input }
