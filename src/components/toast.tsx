import { toast } from "sonner";
import {
  CheckCircle,
  AlertCircle,
  Info,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const toastIcons = {
  success: <CheckCircle size={20} className="text-green-400" />,
  error: <AlertCircle size={20} className="text-red-400" />,
  info: <Info size={20} className="text-blue-400" />,
  warning: <AlertTriangle size={20} className="text-yellow-400" />,
};

export const mentorToast = (
  title: string,
  description?: string,
  type: "success" | "error" | "info" | "warning" = "info"
) => {
  toast.custom((id) => (
    <div
      className={cn(
        "w-full max-w-sm px-5 py-4 rounded-xl shadow-md border bg-white/10 backdrop-blur-md relative overflow-hidden",
        "text-indigo-700 flex items-start gap-4",
        {
          "border-green-500/30": type === "success",
          "border-red-500/30": type === "error",
          "border-blue-500/30": type === "info",
          "border-yellow-500/30": type === "warning",
        }
      )}
    >
      <div className="p-2 rounded-full bg-white/10">
        {toastIcons[type] || <Info size={20} />}
      </div>

      <div className="flex-1">
        <h4 className="text-base font-semibold">{title}</h4>
        {description && (
          <p className="text-sm text-indigo-800 mt-1">{description}</p>
        )}
      </div>

      <button
        onClick={() => toast.dismiss(id)}
        className="text-sm text-white/70 hover:text-white"
      >
        ✕
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-progress" />
    </div>
  ));
};

// 🪄 Promise-based Toast with auto-state
export const mentorToastPromise = <T,>(
  promise: Promise<T>,
  {
    loading = "Processing...",
    success = "Done!",
    error = "Something went wrong",
  }: {
    loading?: string;
    success?: string;
    error?: string;
  }
) =>
  toast.promise(promise, {
    loading,
    success,
    error,
    className: "bg-white/10 backdrop-blur-md border border-white/20 text-indigo-700",
    classNames: {
      toast: "rounded-xl shadow-md relative overflow-hidden",
      loader:
        "absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 animate-progress",
    },
  });
