import React from 'react';
import Tableau, { TableauColumn } from './Tableau'; // Importez le composant Tableau

const TableauExample: React.FC = () => {
  // Données fictives pour le tableau
  const data = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'David', age: 40 },
    { id: 5, name: 'Eve', age: 45 },
    { id: 6, name: 'Frank', age: 50 },
    // Ajoutez plus de données si nécessaire
  ];

  // Colonnes pour le tableau
  const columns: TableauColumn<typeof data[0]>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
  ];

  return (
    <div>
      <h2>Exemple d'utilisation du Tableau</h2>
      {/* Utilisation du tableau avec la pagination désactivée */}
      <Tableau
        data={data}
        columns={columns}
        selectable={true}    // Active la sélection des lignes
        pagination={false}   // Désactive la pagination
      />
    </div>
  );
}

export default TableauExample;
