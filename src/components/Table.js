import React, { useContext } from 'react';
import Context from './Context';

const Table = () => {
  const value = useContext(Context);
  return (
    <table className="table">
      <tr>
        {value.tableData.tableHeaders.map((header, headerId) => {
          return <th className="table_th" key={headerId}>{header}</th>;
        })}
      </tr>
      <tbody>
        {value.tableData.tableBody.map((row, rowId) => {
          return (
            <tr key={rowId}>
              {row.map((column, columnId) => {
                return <td className="table_td" key={columnId}>{column}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
