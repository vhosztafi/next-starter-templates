import { Modal as FlowbiteModal, ModalProps as FlowbiteModalProps } from "flowbite-react"
import { cn } from "@/lib/utils"

export interface ModalProps extends FlowbiteModalProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"
}

const Modal = ({ className, size = "md", ...props }: ModalProps) => {
  return (
    <FlowbiteModal
      className={cn("", className)}
      size={size}
      {...props}
    />
  )
}

export { Modal }
