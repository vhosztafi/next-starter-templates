import { toast } from "sonner"
import { cn } from "@/lib/utils"

export interface ToastProps {
  title?: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  duration?: number
}

const showToast = ({ title, description, action, duration = 4000 }: ToastProps) => {
  return toast(title || "Notification", {
    description,
    action,
    duration,
  })
}

const showSuccessToast = ({ title = "Success", description, action, duration }: ToastProps) => {
  return toast.success(title, {
    description,
    action,
    duration,
  })
}

const showErrorToast = ({ title = "Error", description, action, duration }: ToastProps) => {
  return toast.error(title, {
    description,
    action,
    duration,
  })
}

const showWarningToast = ({ title = "Warning", description, action, duration }: ToastProps) => {
  return toast.warning(title, {
    description,
    action,
    duration,
  })
}

const showInfoToast = ({ title = "Info", description, action, duration }: ToastProps) => {
  return toast.info(title, {
    description,
    action,
    duration,
  })
}

export { 
  showToast as toast, 
  showSuccessToast as toastSuccess, 
  showErrorToast as toastError, 
  showWarningToast as toastWarning, 
  showInfoToast as toastInfo 
}
