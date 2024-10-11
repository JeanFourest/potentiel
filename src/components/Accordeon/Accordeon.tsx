import React, { useState } from 'react';
import './accordeon.css';

interface AccordeonSection {
  title: string;
  content: string | React.ReactNode[];
}

interface AccordeonProps {
  sections: AccordeonSection[];
  className?: string;
}

const Accordeon: React.FC<AccordeonProps> = ({ sections, className }) => {
  const [activeSections, setActiveSections] = useState<number[]>([]);

  // Fonction pour ouvrir/fermer une section
  const toggleSection = (index: number) => {
    setActiveSections((prevActiveSections) =>
      prevActiveSections.includes(index)
        ? prevActiveSections.filter((i) => i !== index)
        : [...prevActiveSections, index]
    );
  };

  return (
    <div className={`accordeon ${className || ''}`.trim()}>
      {sections.map((section, index) => (
        <div key={index}>
          <div
            className="accordeon-header"
            onClick={() => toggleSection(index)}
          >
            {section.title}
            <span>{activeSections.includes(index) ? '-' : '+'}</span>
          </div>
          {activeSections.includes(index) && (
            <div className="accordeon-content">
                {Array.isArray(section.content)
                ? section.content.map((contentItem, contentIndex) => (
                    <div key={contentIndex} className="content-item">
                      {contentItem}
                    </div>
                  ))
                : section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordeon;
