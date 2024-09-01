import React from 'react';

const SymptomList = ({ onSymptomClick }) => {
  const symptoms = [
    { id: 'headache', name: 'Headache' },
    { id: 'fever', name: 'Fever' },
    { id: 'cough', name: 'Cough' },
       
  ];

  return (
    <div>
      <h1>Symptom Checker</h1>
      <ul>
        {symptoms.map((symptom) => (
          <li key={symptom.id} onClick={() => onSymptomClick(symptom.id)}>
            {symptom.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SymptomList;
