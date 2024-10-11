import React, { useState } from "react";
import Input from "./Input";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; 
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function InputExample() {

  const [formData, setFormData] = useState({
    text: "",
    email: "",
    password: "",
    number: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Met à jour l'état pour le champ spécifique
    });
  };

  const codeExample = `
<Input
  label="Texte"
  type="text"
  value={...}
  onChange={...}
  required={true}
  placeholder="Entrez votre texte"
  name="text"
/>

<Input
  label="Email"
  type="email"
  value={...}
  onChange={...}
  required={true}
  placeholder="Entrez votre email"
  name="email"
/>

<Input
  label="Mot de passe"
  type="password"
  value={...}
  onChange={...}
  required={true}
  placeholder="Entrez votre mot de passe"
  name="password"
/>

<Input
  label="Nombre"
  type="number"
  value={...}
  onChange={...}
  placeholder="Entrez un nombre"
  name="number"
/>

<Input
  label="Date"
  type="date"
  value={...}
  onChange={...}
  name="date"
/>
`;

  return (
    <div className="component-column">
      <div className="componentCode">
        <div className="container-column">
          <Input
            label="Texte"
            type="text"
            value={formData.text}
            onChange={handleChange}
            required={true}
            placeholder="Entrez votre texte"
            name="text"
          />

          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required={true}
            placeholder="Entrez votre email"
            name="email"
          />

          <Input
            label="Mot de passe"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required={true}
            placeholder="Entrez votre mot de passe"
            name="password"
          />

          <Input
            label="Nombre"
            type="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Entrez un nombre"
            name="number"
          />

          <Input
            label="Date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            name="date"
          />
        </div>

        <div className="code-example-container">
          <SyntaxHighlighter language="jsx" style={darcula}>
              {codeExample}
          </SyntaxHighlighter>
          <button
            className="copy-button"
            onClick={() => navigator.clipboard.writeText(codeExample)}
          >
            Copy Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputExample;
