import React from "react";
import Tableau, { TableauColumn } from "./Tableau";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; 
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const TableauExample: React.FC = () => {
  const codeExample = `
  <Tableau
    data={[
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'David', age: 40 },
    { id: 5, name: 'Eve', age: 45 },
    { id: 6, name: 'Frank', age: 50 },]}
    columns={[
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },]}
    selectable={true}    
    pagination={false}   
  />
  `;
  // Données fictives pour le tableau
  const data = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
    { id: 4, name: "David", age: 40 },
    { id: 5, name: "Eve", age: 45 },
    { id: 6, name: "Frank", age: 50 },
    // Ajoutez plus de données si nécessaire
  ];

  // Colonnes pour le tableau
  const columns: TableauColumn<(typeof data)[0]>[] = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Age", accessor: "age" },
  ];

  return (
    <div className="component-column">
      <div className="componentCode">
        <h2>Exemple d'utilisation du Tableau</h2>
        {/* Utilisation du tableau avec la pagination désactivée */}
        <div className="container-column">
          <Tableau
            data={data}
            columns={columns}
            selectable={true} // Active la sélection des lignes
            pagination={false} // Désactive la pagination
          />
        </div>
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
  );
};

export default TableauExample;
