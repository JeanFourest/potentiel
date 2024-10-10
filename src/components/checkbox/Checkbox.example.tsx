import Checkbox from "./Checkbox";

function CheckboxExample() {
  const setValues = (e: any) => {
    console.log(e);
  };

  const codeExample1 = `
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
        className="checkbox"
    />
    `;

  const codeExample2 = `
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
        className="checkbox"
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
            className="checkbox"
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
            className="checkbox"
          />
        </div>

        <div className="code-example-container">
          <pre>
            <code>{codeExample2}</code>
          </pre>
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
