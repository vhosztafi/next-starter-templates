import { Toast as FlowbiteToast, ToastProps as FlowbiteToastProps } from "flowbite-react"
import { cn } from "@/lib/utils"

export interface ToastProps extends FlowbiteToastProps {
  variant?: "primary" | "secondary" | "success" | "failure" | "warning" | "info" | "light" | "dark" | "purple" | "blue" | "cyan" | "green" | "lime" | "red" | "pink" | "gray"
}

const Toast = ({ className, variant = "primary", ...props }: ToastProps) => {
  return (
    <FlowbiteToast
      className={cn("", className)}
      color={variant}
      {...props}
    />
  )
}

export { Toast }
