import { ReactNode } from "react";
import "./Alert.css";

type AlertProps = {
  className?: "alert-information" | "alert-success" | "alert-error" | "alert-warning";
  children: ReactNode;
};

function Alert({ className = "alert-information", children }: AlertProps) {
  return <div className={className}>{children}</div>;
}

export default Alert;
