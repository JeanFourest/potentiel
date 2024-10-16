import { FaBeer } from "react-icons/fa";
import Button from "./Button";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; 
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ButtonExample() {
    const handleClick = () => {
        alert("YOOOOOOOOOOOOOOOOOOOO");
    };

  const codeExample1 = `
  <Button 
    text="ok"
    onClick={...}
    extraClass="danger"
    disabled={true}
  />
    `;

  const codeExample2 = `
  import { FaBeer } from "react-icons/fa";
  <Button 
    text=""
    icon={<FaBeer />}
    onClick={...}
    extraClass="primary"
    disabled={false}
  />
    `;

  return (
    <div className="component-column">
      <div className="componentCode">
        <div className="container-row">
          
          <Button 
            text="danger"
            onClick={() => handleClick()}
            extraClass="danger"
            disabled={true}
          />

        <Button 
            text="outline-success"
            onClick={() => handleClick()}
            extraClass="outline-success"
            disabled={true}
          />

        <Button 
            text="disabled false"
            onClick={() => handleClick()}
            extraClass="outline-success"
            disabled={false}
          />
          <Button 
            text="secondary"
            onClick={() => handleClick()}
            extraClass="secondary"
            disabled={false}
          />
          <Button 
            text="primary fullWidth"
            onClick={() => handleClick()}
            extraClass="primary fullWidth"
            disabled={false}
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
          <Button 
            text=""
            icon={<FaBeer />}
            onClick={() => handleClick()}
            extraClass="primary"
            disabled={false}
        />
        <Button 
            text="icon right"
            icon={<FaBeer />}
            onClick={() => handleClick()}
            extraClass="outline-success right"
            disabled={false}
        />
        <Button 
            text="icon left"
            icon={<FaBeer />}
            onClick={() => handleClick()}
            extraClass="outline-secondary left"
            disabled={false}
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

export default ButtonExample;
