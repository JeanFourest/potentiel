import Checkbox from "./Checkbox";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; 
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CheckboxExample() {
  const setValues = (e: any) => {
    console.log(e);
  };

  const codeExample1 = `
  <Checkbox
    group={[
      { label: "All", value: "all", checked: false, checkAll: true },
      { label: "option 1", value: 1, checked: false, checkAll: false },
      { label: "option 2", value: 2, checked: false, checkAll: false },
      { label: "option 3", value: 3, checked: false, checkAll: false },
    ]}
    onChange={...}
    className="checkbox-sm"
  />
    `;

  const codeExample2 = `
  <Checkbox
    group={[
      { label: "option 1", value: 1, checked: false, checkAll: false },
      { label: "option 2", value: 2, checked: false, checkAll: false },
      { label: "option 3", value: 3, checked: false, checkAll: false },
      { label: "option 4", value: 4, checked: false, checkAll: false },
    ]}
    onChange={...}
    className="checkbox-lg"
  />
    `;

  return (
    <div className="component-column">
      <div className="componentCode">
        <div className="container-row">
          <Checkbox
            group={[
              { label: "All", value: "all", checked: false, checkAll: true },
              { label: "option 1", value: 1, checked: false, checkAll: false },
              {
                label: "option 2",
                value: 2,
                checked: false,
                checkAll: false,
              },
              {
                label: "option 3",
                value: 3,
                checked: false,
                checkAll: false,
              },
            ]}
            onChange={(e: any) => setValues(e)}
            className="checkbox-sm"
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

      <div className="componentCode">
        <div className="container-row">
          <Checkbox
            group={[
              { label: "option 1", value: 1, checked: false, checkAll: false },
              {
                label: "option 2",
                value: 2,
                checked: false,
                checkAll: false,
              },
              {
                label: "option 3",
                value: 3,
                checked: false,
                checkAll: false,
              },
              {
                label: "option 4",
                value: 4,
                checked: false,
                checkAll: false,
              },
            ]}
            onChange={(e: any) => setValues(e)}
            className="checkbox-lg"
          />
        </div>

        <div className="code-example-container">
          <SyntaxHighlighter language="jsx" style={darcula}>
              {codeExample2}
          </SyntaxHighlighter>
          <button
            className="copy-button"
            onClick={() => navigator.clipboard.writeText(codeExample2)}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckboxExample;
