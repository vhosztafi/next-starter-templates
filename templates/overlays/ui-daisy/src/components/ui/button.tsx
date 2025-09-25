import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "neutral" | "ghost" | "link" | "outline"
  size?: "xs" | "sm" | "md" | "lg"
  color?: "primary" | "secondary" | "accent" | "neutral" | "info" | "success" | "warning" | "error"
}

const Button = ({ 
  className, 
  variant = "primary", 
  size = "md", 
  color = "primary",
  ...props 
}: ButtonProps) => {
  const baseClasses = "btn"
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary", 
    accent: "btn-accent",
    neutral: "btn-neutral",
    ghost: "btn-ghost",
    link: "btn-link",
    outline: "btn-outline"
  }
  const sizeClasses = {
    xs: "btn-xs",
    sm: "btn-sm", 
    md: "btn-md",
    lg: "btn-lg"
  }
  const colorClasses = {
    primary: "",
    secondary: "btn-secondary",
    accent: "btn-accent", 
    neutral: "btn-neutral",
    info: "btn-info",
    success: "btn-success",
    warning: "btn-warning",
    error: "btn-error"
  }

  return (
    <button
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

export { Button }
