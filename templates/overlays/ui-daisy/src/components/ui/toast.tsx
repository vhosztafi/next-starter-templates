import { cn } from "@/lib/utils"

export interface ToastProps {
  title?: string
  description?: string
  type?: "info" | "success" | "warning" | "error"
  duration?: number
  onClose?: () => void
  className?: string
}

const Toast = ({ 
  title, 
  description, 
  type = "info", 
  onClose,
  className 
}: ToastProps) => {
  const typeClasses = {
    info: "alert-info",
    success: "alert-success", 
    warning: "alert-warning",
    error: "alert-error"
  }

  const icons = {
    info: "ℹ️",
    success: "✅",
    warning: "⚠️", 
    error: "❌"
  }

  return (
    <div className={cn("alert", typeClasses[type], className)}>
      <span>{icons[type]}</span>
      <div>
        {title && <div className="font-bold">{title}</div>}
        {description && <div className="text-xs">{description}</div>}
      </div>
      {onClose && (
        <button className="btn btn-sm btn-circle btn-ghost" onClick={onClose}>
          ✕
        </button>
      )}
    </div>
  )
}

export { Toast }
