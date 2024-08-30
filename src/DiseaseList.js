import React from 'react';

const DiseaseList = ({ probableDiseases }) => {
  return (
    <div>
      <h2>Probable Diseases</h2>
      <ol>
        {probableDiseases.map((disease, index) => (
          <li key={index}>{disease.name} ({disease.probability}%)</li>
        ))}
      </ol>
    </div>
  );
};

export default DiseaseList;