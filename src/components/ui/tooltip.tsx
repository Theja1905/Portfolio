import { ReactNode } from "react";

interface TooltipProviderProps {
  children: ReactNode;
}

export function TooltipProvider({ children }: TooltipProviderProps) {
  // Simple provider stub that just renders children directly
  return <>{children}</>;
}
