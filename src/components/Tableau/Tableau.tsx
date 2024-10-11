// Tableau.tsx
import { useState } from 'react';
import './Tableau.css';

export interface TableauColumn<T> {  // Assurez-vous que TableauColumn est exporté ici
  header: string;
  accessor: keyof T;
}

interface TableauProps<T> {
  data: T[];
  columns: TableauColumn<T>[];
  selectable?: boolean;
  pagination?: boolean;
  rowsPerPage?: number;
}

function Tableau<T>({ data, columns, selectable = false, pagination = true, rowsPerPage = 5 }: TableauProps<T>) {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const handleSelectRow = (index: number) => {
    const updatedSelectedRows = new Set(selectedRows);
    if (updatedSelectedRows.has(index)) {
      updatedSelectedRows.delete(index);
    } else {
      updatedSelectedRows.add(index);
    }
    setSelectedRows(updatedSelectedRows);
  };

  const paginatedData = pagination
    ? data.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage)
    : data;

  return (
    <div>
      <table className="table-container">
        <thead>
          <tr>
            {selectable && <th></th>}
            {columns.map((col, idx) => (
              <th key={idx}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {selectable && (
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.has(rowIndex)}
                    onChange={() => handleSelectRow(rowIndex)}
                  />
                </td>
              )}
              {columns.map((col, idx) => (
                <td key={idx}>
                  {String(row[col.accessor])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {pagination && (
        <div className="pagination-container">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 0}
          >
            Précédent
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={(currentPage + 1) * rowsPerPage >= data.length}
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  );
}

export default Tableau;
