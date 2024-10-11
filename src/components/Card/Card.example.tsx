import Card from "./Card";
import imageUrl from '../assets/images/beaugosse.png';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; 
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';


function CardExample() {
    const handleClick = () => {
        alert("YOOOOOOOOOOOOOOOOOOOO");
    };

  const codeExample1 = `
    <Card
        titre="WOW" 
        imageUrl={imageUrl} 
        description='Chokbar' 
        actionText='voir plus' 
        extraClass="height-500 width-30" 
        onActionClick={handleClick} 
    />

    <Card 
        titre="WOW" 
        imageUrl={imageUrl} 
        description='Chokbar' 
        actionText='voir plus' 
        extraClass="height-500 width-50" 
        onActionClick={handleClick} 
    />
    `;

  return (
    <div className="component-column">
      <div className="componentCode">
        <div className="container-row">
            <Card titre="WOW"
            imageUrl={imageUrl} 
            description='Chokbar' 
            actionText='voir plus' 
            extraClass="height-500 width-30" 
            onActionClick={handleClick} />
            <Card 
            titre="WOW" 
            imageUrl={imageUrl} 
            description='Chokbar' 
            actionText='voir plus' 
            extraClass="height-500 width-50" 
            onActionClick={handleClick} />
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

export default CardExample;
