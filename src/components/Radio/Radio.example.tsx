import Radio from "./Radio";

function RadioExample() {

  const codeExample1 = `
    <Radio 
        titre="optionnal"
        nameGroup="radio"
        labels={['option 1', 'option 2', 'option 3']}
    />
    `;

  return (
    <div className="component-column">
      <div className="componentCode">
        <div className="container-row">
          <Radio 
            titre="optionnal"
            nameGroup="radio"
            labels={['option 1', 'option 2', 'option 3']}
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

export default RadioExample;
