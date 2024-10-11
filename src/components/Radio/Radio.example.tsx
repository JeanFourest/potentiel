import Radio from "./Radio";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; 
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

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

export default RadioExample;
