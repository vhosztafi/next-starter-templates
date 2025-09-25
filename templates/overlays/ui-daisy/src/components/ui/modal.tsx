import { cn } from "@/lib/utils"

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  footer?: React.ReactNode
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "full"
  className?: string
}

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer, 
  size = "md",
  className 
}: ModalProps) => {
  if (!isOpen) return null

  const sizeClasses = {
    xs: "max-w-xs",
    sm: "max-w-sm", 
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl", 
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    full: "max-w-full"
  }

  return (
    <div className="modal modal-open">
      <div className={cn("modal-box", sizeClasses[size], className)}>
        {title && (
          <h3 className="font-bold text-lg mb-4">
            {title}
          </h3>
        )}
        <div className="py-4">
          {children}
        </div>
        {footer && (
          <div className="modal-action">
            {footer}
          </div>
        )}
        <button 
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  )
}

export { Modal }
