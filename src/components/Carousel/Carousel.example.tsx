import React from 'react';
import Carousel from './Carousel';

function CarouselExample() {
  const slides1 = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'];
  const slides2 = ['Image 1', 'Image 2', 'Image 3'];
  const slides3 = ['Texte 1', 'Texte 2', 'Texte 3'];

  const codeExample1 = `
    <Carousel
        slides=['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5']
        autoPlay=false
        showArrows=false
        showPagination=true
        className="custom-carousel"
        width="700px"
        height="200px"
    />
`;

  const codeExample2 = `
    <Carousel
        slides=['Image 1', 'Image 2', 'Image 3']
        autoPlay=false
        showArrows=true
        showPagination=false
        className="custom-carousel"
        width="400px"
        height="500px"
    />
`;

  const codeExample3 = `
    <Carousel
        slides=['Texte 1', 'Texte 2', 'Texte 3']
        autoPlay=true
        interval=3000
        showArrows=true
        showPagination=false
        className="custom-carousel"
        width="800px"
        height="500px"
    />
`;

  return (
    <div className='component-row'>
      <div className='componentCode'>
        <div className="container-row">
            <Carousel
                slides={slides1}
                autoPlay={false}
                showArrows={false}
                showPagination={true}
                className="custom-carousel"
                width="700px"
                height="200px"
            />
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

      <div className='componentCode'>
        <div className="container-row">
            <Carousel
            slides={slides2}
            autoPlay={false}
            showArrows={true}
            showPagination={false}
            className="custom-carousel"
            width="400px"
            height="500px"
            />
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

      <div className='componentCode'>
        <div className="container-row">
            <Carousel
            slides={slides3}
            autoPlay={true}
            interval={3000}
            showArrows={true}
            showPagination={false}
            className="custom-carousel"
            width="800px"
            height="500px"
            />
        </div>

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
  );
}

export default CarouselExample;
