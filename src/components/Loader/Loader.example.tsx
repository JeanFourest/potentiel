import LoaderComponent from "./Loader";


function LoaderExample() {

    const codeExample1 = `<div className="spinner-circle">
    <div className=spinner></div>
</div>

<div className="spinner-circle">
    <div className=spinner spinner-primary></div>
</div>

<div className="spinner-circle">
    <div className=spinner spinner-secondary></div>
</div>

<div className="spinner-circle">
    <div className=spinner spinner-success></div>
</div>

<div className="spinner-circle">
    <div className=spinner spinner-danger></div>
</div>

<div className="spinner-circle">
    <div className=spinner spinner-warning></div>
</div>

<div className="spinner-circle">
    <div className=spinner spinner-info></div>
</div>

<div className="spinner-circle">
    <div className=spinner spinner-light></div>
</div>

<div className="spinner-circle">
    <div className=spinner spinner-dark></div>
</div>`

const codeExample2 = `<div className="progress-bar" style=width: 50%>
    50%
</div>

<div className="progress-bar progress-bar-success" style=width: 25%>
    25%
</div>

<div className="progress-bar progress-bar-info" style=width: 50%>
    50%
</div>

<div className="progress-bar progress-bar-warning" style=width: 75%>
    75%
</div>

<div className="progress-bar progress-bar-danger" style=width: 100%>
    100%
</div>
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
                    <pre>
                        <code>{codeExample1}</code>
                    </pre>
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
                    <pre>
                        <code>{codeExample2}</code>
                    </pre>
                    <button className="copy-button" onClick={() => navigator.clipboard.writeText(codeExample2)}>
                        Copy Code
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoaderExample;