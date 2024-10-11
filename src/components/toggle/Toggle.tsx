import "./toggle.css";

type ToggleProps = {
  rounded?: boolean;
  isToggled?: boolean;
  onToggle?: any;
  className?: string;
  size?: "lg" | "md" | "sm";
};

function Toggle({
  rounded = false,
  isToggled,
  onToggle,
  className = "switch-sm",
}: ToggleProps) {
  const roundedClass = rounded ? "rounded" : "";

  return roundedClass === "rounded" ? (
    <label className={`${className}`}>
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="slider round" />
    </label>
  ) : (
    <label className={`${className}`}>
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="slider" />
    </label>
  );
}

export default Toggle;
