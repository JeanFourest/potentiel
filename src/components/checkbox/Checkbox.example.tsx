import Checkbox from "./Checkbox";

function CheckboxExample() {
  const setValues = (e: any) => {
    console.log(e);
  };

  const codeExample1 = `
  <div class="checkbox-sm">

    <div class="checkbox-checkAll">
      <input type="checkbox" value="all" />
      <label for="all">All</label>
    </div>

    <div>
      <input type="checkbox" value="1" />
      <label for="1">option 1</label>
    </div>

    <div>
      <input type="checkbox" value="2" />
      <label for="2">option 2</label>
    </div>

    <div>
      <input type="checkbox" value="3" />
      <label for="3">option 3</label>
    </div>
    
  </div>
    `;

  const codeExample2 = `
  <div class="checkbox-lg">

    <div>
      <input type="checkbox" value="1" />
      <label for="1">option 1</label>
    </div>

    <div>
      <input type="checkbox" value="2" />
      <label for="2">option 2</label>
    </div>

    <div>
      <input type="checkbox" value="3" />
      <label for="3">option 3</label>
    </div>

    <div>
      <input type="checkbox" value="4" />
      <label for="4">option 4</label>
    </div>
    
  </div>
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
            className="checkbox-lg"
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
