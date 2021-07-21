import React, { useContext } from 'react';
import { TableContext } from './App';

const Table = () => {
  const value = useContext(TableContext);
  return (
    <table className="table">
      <tbody>
        <tr>
          {value.tableData.tableHeaders.map((header, headerId) => {
            return <th key={headerId}>{header}</th>;
          })}
        </tr>

        {value.tableData.tableBody.map((row, rowId) => {
          return (
            <tr key={rowId}>
              {row.map((column, columnId) => {
                return <td key={columnId}>{column}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
