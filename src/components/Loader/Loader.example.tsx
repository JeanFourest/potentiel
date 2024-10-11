import LoaderComponent from "./Loader";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; 
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';


function LoaderExample() {

    const codeExample1 = `
    <LoaderComponent type="spinner" />

    <LoaderComponent type="spinner" className="spinner-primary" />

    <LoaderComponent type="spinner" className="spinner-secondary" />

    <LoaderComponent type="spinner" className="spinner-success" />

    <LoaderComponent type="spinner" className="spinner-danger" />
    
    <LoaderComponent type="spinner" className="spinner-warning" />

    <LoaderComponent type="spinner" className="spinner-info" />

    <LoaderComponent type="spinner" className="spinner-light" />

    <LoaderComponent type="spinner" className="spinner-dark" />
    `

const codeExample2 = `
    <LoaderComponent type="progress-bar" progress="50" />

    <LoaderComponent type="progress-bar" className="progress-bar-success" progress="25" />

    <LoaderComponent type="progress-bar" className="progress-bar-info" progress="50" />

    <LoaderComponent type="progress-bar" className="progress-bar-warning" progress="75" />

    <LoaderComponent type="progress-bar" className="progress-bar-danger" progress="100" />  
`


    return (
        <div className="component-column">
            <div className="componentCode">
                <div className="container-row">
                    <LoaderComponent type="spinner" />
                    <LoaderComponent type="spinner" className="spinner-primary" />
                    <LoaderComponent type="spinner" className="spinner-secondary" />
                    <LoaderComponent type="spinner" className="spinner-success" />
                    <LoaderComponent type="spinner" className="spinner-danger" />
                    <LoaderComponent type="spinner" className="spinner-warning" />
                    <LoaderComponent type="spinner" className="spinner-info" />
                    <LoaderComponent type="spinner" className="spinner-light" />
                    <LoaderComponent type="spinner" className="spinner-dark" />
                </div>
               
                <div className="code-example-container">
                    <SyntaxHighlighter language="jsx" style={darcula}>
                        {codeExample1}
                    </SyntaxHighlighter>
                    <button className="copy-button" onClick={() => navigator.clipboard.writeText(codeExample1)}>
                        Copy Code
                    </button>
                </div>
            </div>

            <div className="componentCode">
                <div className="container-column">
                    <LoaderComponent type="progress-bar" progress={50} />
                    <LoaderComponent type="progress-bar" className="progress-bar-success" progress={25} />
                    <LoaderComponent type="progress-bar" className="progress-bar-info" progress={50} />
                    <LoaderComponent type="progress-bar" className="progress-bar-warning" progress={75} />
                    <LoaderComponent type="progress-bar" className="progress-bar-danger" progress={100} />
                </div>

                <div className="code-example-container">
                    <SyntaxHighlighter language="jsx" style={darcula}>
                        {codeExample2}
                    </SyntaxHighlighter>
                    <button className="copy-button" onClick={() => navigator.clipboard.writeText(codeExample2)}>
                        Copy Code
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoaderExample;