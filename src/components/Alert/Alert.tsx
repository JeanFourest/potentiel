import { ReactNode, useEffect, useState } from "react";
import "./Alert.css";
import { PiMinusCircle } from "react-icons/pi";

type AlertProps = {
  className?:
    | "alert-information"
    | "alert-success"
    | "alert-error"
    | "alert-warning";
  children: ReactNode;
  automaticClose?: boolean;
  closeAfterMs?: number;
};

function Alert({
  className = "alert-information",
  children,
  automaticClose = false,
  closeAfterMs = 5000,
}: AlertProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (automaticClose) {
      const timer = setTimeout(() => setVisible(false), closeAfterMs);
      return () => clearTimeout(timer);
    }
  }, [automaticClose, closeAfterMs]);

  const onclick = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={className}>
      <div className="alert-child">{children}</div>

      {!automaticClose && (
        <div className="alert-close">
          <PiMinusCircle size="30px" onClick={() => onclick()} />
        </div>
      )}
    </div>
  );
}

export default Alert;
