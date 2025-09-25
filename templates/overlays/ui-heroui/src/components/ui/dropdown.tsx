import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection } from "@heroui/react"
import { cn } from "@/lib/utils"

export interface DropdownProps {
  trigger: React.ReactNode
  children: React.ReactNode
  placement?: "bottom" | "top" | "left" | "right" | "bottom-start" | "bottom-end" | "top-start" | "top-end" | "left-start" | "left-end" | "right-start" | "right-end"
  className?: string
}

const CustomDropdown = ({ trigger, children, placement = "bottom", className }: DropdownProps) => {
  return (
    <Dropdown placement={placement} className={cn("", className)}>
      <DropdownTrigger>
        {trigger}
      </DropdownTrigger>
      <DropdownMenu>
        {children}
      </DropdownMenu>
    </Dropdown>
  )
}

export { CustomDropdown as Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection }
