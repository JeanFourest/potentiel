import { useState } from "react";
import Toggle from "./Toggle";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; 
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ToggleExample() {
  const [values, setValues] = useState(false);
  const [values2, setValues2] = useState(false);

  const handleOnChange = () => {
    setValues(!values);
  };

  const handleOnChange2 = () => {
    setValues2(!values2);
  };
  console.log(values);

  const codeExample1 = `
    <Toggle
      isToggled={false}
      rounded={true}
      className="switch-lg"
      onToggle={...}
    />
    
    <Toggle
      isToggled={false}
      rounded={false}
      className="switch-sm"
      onToggle={...}
    />
  `;

  return (
    <div className="component-column">
      <div className="componentCode">
        <div className="container-row">
          <Toggle
            isToggled={values}
            rounded={true}
            className="switch-lg"
            onToggle={() => handleOnChange()}
          />
          <Toggle
            isToggled={values2}
            rounded={false}
            className="switch-sm"
            onToggle={() => handleOnChange2()}
          />
        </div>

        <div className="code-example-container">
          <SyntaxHighlighter language="jsx" style={darcula}>
              {codeExample1}
          </SyntaxHighlighter>
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
