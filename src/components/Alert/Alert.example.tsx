import Alert from "./Alert";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; 
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function AlertExample() {
  const codeExample1 = `
    <Alert className="alert-information">This is a success alert</Alert>

    <Alert className="alert-warning">This is a warning alert</Alert>
    
    <Alert className="alert-error">This is an error alert</Alert>

    <Alert className="alert-success">This is a success alert</Alert>

    <Alert automaticClose closeAfterMs={10000}>This is a default alert with automatic close</Alert>
  `;

  return (
    <div className="component-column">
      <div className="componentCode">
        <div className="container-row">
          <div>
            <Alert className="alert-information">This is a information alert</Alert>
            <Alert className="alert-warning">This is a warning alert</Alert>
            <Alert className="alert-error">This is an error alert</Alert>
            <Alert className="alert-success">This is a success alert</Alert>
          </div>

          <Alert automaticClose closeAfterMs={10000}>
            This is a default alert with automatic close
          </Alert>
        </div>

        <div className="code-example-container">
            <SyntaxHighlighter language="jsx" style={darcula}>
                {codeExample1}
            </SyntaxHighlighter>
          <button
            className="copy-button"
            onClick={() => navigator.clipboard.writeText(codeExample1)}
          >
            Copy Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default AlertExample;
