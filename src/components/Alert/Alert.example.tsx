import Alert from "./Alert";

function AlertExample() {
  const codeExample1 = `
    <Alert className="alert-information">This is a success alert</Alert>

    <Alert className="alert-warning">this is a warning alert</Alert>

    <Alert className="alert-error">this is an error alert</Alert>
    
    <Alert className="alert-success">this is a success alert</Alert>
  `;

  return (
    <div className="component-column">
      <div className="componentCode">
        <div className="container-row">
          <Alert className="alert-information">This is a success alert</Alert>
          <Alert className="alert-warning">this is a warning alert</Alert>
          <Alert className="alert-error">this is an error alert</Alert>
          <Alert className="alert-success">this is a success alert</Alert>
        </div>

        <div className="code-example-container">
          <pre>
            <code>{codeExample1}</code>
          </pre>
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
