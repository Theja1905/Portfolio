import { useState, useCallback } from "react";

export interface Toast {
  id: number; // unique id to help with rendering/removal
  title: string;
  description?: string;
  variant?: "default" | "destructive"; // optional variant for styling
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, "id">) => {
    setToasts((prev) => [
      ...prev,
      { id: Date.now(), ...toast }, // assign unique id
    ]);
    // You can add timeout logic here to auto-remove toast after some time
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return {
    toasts,
    addToast,
    removeToast,
  };
}
