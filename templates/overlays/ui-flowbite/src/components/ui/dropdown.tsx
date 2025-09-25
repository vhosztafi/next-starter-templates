import { Dropdown as FlowbiteDropdown, DropdownProps as FlowbiteDropdownProps } from "flowbite-react"
import { cn } from "@/lib/utils"

export interface DropdownProps extends FlowbiteDropdownProps {
  variant?: "primary" | "secondary" | "success" | "failure" | "warning" | "info" | "light" | "dark" | "purple" | "blue" | "cyan" | "green" | "lime" | "red" | "pink" | "gray"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
}

const Dropdown = ({ className, variant = "primary", size = "md", ...props }: DropdownProps) => {
  return (
    <FlowbiteDropdown
      className={cn("", className)}
      color={variant}
      size={size}
      {...props}
    />
  )
}

export { Dropdown }
