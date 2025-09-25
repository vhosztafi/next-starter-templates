import { cn } from "@/lib/utils"

export interface DropdownProps {
  trigger: React.ReactNode
  children: React.ReactNode
  position?: "top" | "bottom" | "left" | "right" | "top-end" | "bottom-end" | "left-end" | "right-end"
  className?: string
}

const Dropdown = ({ trigger, children, position = "bottom", className }: DropdownProps) => {
  const positionClasses = {
    top: "dropdown-top",
    bottom: "dropdown-bottom",
    left: "dropdown-left", 
    right: "dropdown-right",
    "top-end": "dropdown-top dropdown-end",
    "bottom-end": "dropdown-bottom dropdown-end",
    "left-end": "dropdown-left dropdown-end",
    "right-end": "dropdown-right dropdown-end"
  }

  return (
    <div className={cn("dropdown", positionClasses[position], className)}>
      <div tabIndex={0} role="button" className="btn">
        {trigger}
      </div>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        {children}
      </ul>
    </div>
  )
}

export interface DropdownItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode
  onClick?: () => void
}

const DropdownItem = ({ children, onClick, ...props }: DropdownItemProps) => {
  return (
    <li {...props}>
      <a onClick={onClick}>{children}</a>
    </li>
  )
}

export { Dropdown, DropdownItem }
