import { useState } from "react";
import Toggle from "./Toggle";

function ToggleExample() {
  const [values, setValues] = useState(false);

  const handleOnChange = () => {
    setValues(!values);
  };
  console.log(values);
  const codeExample1 = `
    <Toggle
        isToggled={values}
        rounded={true}
        onToggle={() => handleOnChange()}
    />
    `;

  return (
    <div className="component-column">
      <div className="componentCode">
        <div className="container-row">
          <Toggle
            isToggled={values}
            rounded={true}
            onToggle={() => handleOnChange()}
          />
        </div>

        <div className="code-example-container">
          <pre>
            <code>{codeExample1}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() => navigator.clipboard.writeText(codeExample1)}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToggleExample;
