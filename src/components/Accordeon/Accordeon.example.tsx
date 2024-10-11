import Accordeon from './Accordeon';

function AccordeonExample() {
    const sections = [
        { title: 'Section 1', content: ['Contenu 1.1', 'Contenu 1.2', 'Contenu 1.3'] },
        {
          title: 'Section 2',
          content: [
            <p key="1">Paragraphe 2.1</p>,
            <p key="2">Paragraphe 2.2</p>,
            <img key="3" src="https://via.placeholder.com/150" alt="Image 2.3" />
          ],
        },
        { title: 'Section 3', content: ['Contenu 3.1', 'Contenu 3.2'] },
      ];

    const codeExample = `
    <Accordeon
        sections = [
        { title: 'Section 1', content: ['Contenu 1.1', 'Contenu 1.2', 'Contenu 1.3'] },
        {
          title: 'Section 2',
          content: [
            <p key="1">Paragraphe 2.1</p>,
            <p key="2">Paragraphe 2.2</p>,
            <img key="3" src="https://via.placeholder.com/150" alt="Image 2.3" />
          ],
        },
        { title: 'Section 3', content: ['Contenu 3.1', 'Contenu 3.2'] },
      ];
    />
    `;

    return (
        <div className='component-volumn'>
            <div className='componentCode'>
                <div className="container-row">
                    <Accordeon sections={sections} />
                </div>
                    
                <div className="code-example-container">
                    <pre>
                        <code>{codeExample}</code>
                    </pre>
                    <button className="copy-button" onClick={() => navigator.clipboard.writeText(codeExample)}>
                        Copy Code
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AccordeonExample;
