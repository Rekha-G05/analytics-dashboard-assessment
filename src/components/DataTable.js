import React from 'react';
import '../styles/Dashboard.css';

const DataTable = ({ headers, data }) => {
  return (
    <div className="data-table-container">
      <div className="data-table">
        <div className="data-header">
          {headers.map((header, index) => (
            <div key={index} className="header-cell">{header}</div>
          ))}
        </div>
        {data.map((item, index) => (
          <div key={index} className="data-row">
            {headers.map((header, hIndex) => (
              <div key={hIndex} className="data-cell">{item[header]}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
