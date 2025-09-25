import { TextInput as TremorInput, TextInputProps as TremorInputProps } from "@tremor/react"
import { cn } from "@/lib/utils"

export interface InputProps extends TremorInputProps {
  variant?: "default" | "error"
  size?: "sm" | "md" | "lg"
}

const Input = ({ 
  className, 
  variant = "default", 
  size = "md",
  ...props 
}: InputProps) => {
  return (
    <TremorInput
      className={cn("", className)}
      error={variant === "error"}
      {...props}
    />
  )
}

export { Input }
