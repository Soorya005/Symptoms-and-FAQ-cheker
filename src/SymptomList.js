import React, { useState } from 'react';

const SymptomList = () => {
  const [symptoms, setSymptoms] = useState([
    { id: 1, name: 'Headache' },
    { id: 2, name: 'Fever' },
    { id: 3, name: 'Cough' },
    // ...
  ]);

  const handleSymptomClick = (symptomId) => {
    // Call API to fetch probable diseases for the selected symptom
    axios.get(`https://api.example.com/diseases/${symptomId}`)
      .then(response => {
        // Update state with probable diseases
        setProbableDiseases(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Symptom Checker</h1>
      <ul>
        {symptoms.map((symptom) => (
          <li key={symptom.id} onClick={() => handleSymptomClick(symptom.id)}>
            {symptom.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SymptomList;