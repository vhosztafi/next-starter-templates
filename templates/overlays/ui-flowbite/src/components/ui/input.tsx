import { TextInput as FlowbiteInput, TextInputProps as FlowbiteInputProps } from "flowbite-react"
import { cn } from "@/lib/utils"

export interface InputProps extends FlowbiteInputProps {
  variant?: "primary" | "secondary" | "success" | "failure" | "warning" | "info" | "light" | "dark" | "purple" | "blue" | "cyan" | "green" | "lime" | "red" | "pink" | "gray"
  size?: "sm" | "md" | "lg"
}

const Input = ({ className, color = "gray", sizing = "md", ...props }: InputProps) => {
  return (
    <FlowbiteInput
      className={cn("", className)}
      color={color}
      sizing={sizing}
      {...props}
    />
  )
}

export { Input }
