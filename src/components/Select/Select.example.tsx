import SelectComponent from './Select'; 

function SelectExample() {

    const handleUpdate = (value: string | string[]) => {
      console.log('Valeur(s) sélectionnée(s) :', value);
    };

    const codeExample1 = `
    <SelectComponent
        options={[
            { value: '0', label: 'Choisis une option' },
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
            { value: '4', label: 'Option 4' },
            { value: '5', label: 'Option 5' },
            { value: '6', label: 'Option 6' }
        ]}
        className='select-lg'
        disabled=false
        multiple=true
        size=4
        onChange=...
    />
`;

    const codeExample2 = `
    <SelectComponent
        options={[
            { value: '0', label: 'Choisis une option' },
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' }
        ]}
        className='select-sm'
        disabled=false
        multiple=false
        onChange=...
    />
`;

    const codeExample3 = `
    <SelectComponent
        options={[
            { value: '0', label: 'Choisis une option' },
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' }
        ]}
        className='select'
        disabled=true
        multiple=false
        onChange=...
    />
`;

    return (
      <div className='component-row'>
        <div className='componentCode'>
            <SelectComponent
            options={[
                { value: '0', label: 'Choisis une option' },
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
                { value: '3', label: 'Option 3' },
                { value: '4', label: 'Option 4' },
                { value: '5', label: 'Option 5' },
                { value: '6', label: 'Option 6' }
            ]}
            className='select-lg'
            disabled={false}
            multiple={true}
            size={4}
            onChange={handleUpdate}
            />

            <div className="code-example-container">
                <pre>
                    <code>{codeExample1}</code>
                </pre>
                <button className="copy-button" onClick={() => navigator.clipboard.writeText(codeExample1)}>
                    Copy Code
                </button>
            </div>
        </div>

        <div className='componentCode'>
            <SelectComponent
            options={[
                { value: '0', label: 'Choisis une option' },
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
                { value: '3', label: 'Option 3' }
            ]}
            className='select-sm'
            disabled={false}
            multiple={false}
            onChange={handleUpdate}
            />

            <div className="code-example-container">
                <pre>
                    <code>{codeExample2}</code>
                </pre>
                <button className="copy-button" onClick={() => navigator.clipboard.writeText(codeExample2)}>
                    Copy Code
                </button>
            </div>
        </div>

        <div className='componentCode'>
            <SelectComponent
            options={[
                { value: '0', label: 'Choisis une option' },
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
                { value: '3', label: 'Option 3' }
            ]}
            className='select'
            disabled={true}
            multiple={false}
            onChange={handleUpdate}
            />

            <div className="code-example-container">
                <pre>
                    <code>{codeExample3}</code>
                </pre>
                <button className="copy-button" onClick={() => navigator.clipboard.writeText(codeExample3)}>
                    Copy Code
                </button>
            </div>
        </div>

      </div>
    )
  }
  
  export default SelectExample;