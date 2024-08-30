import React, { useState } from 'react';
import SymptomList from './SymptomList';
import DiseaseList from './DiseaseList';
import FAQs from './FAQs';
import axios from 'axios';

const App = () => {
  const [probableDiseases, setProbableDiseases] = useState([]);
  const [mostLikelyDisease, setMostLikelyDisease] = useState(null);
  const [loading, setLoading] = useState(false); // Added loading state
  const [error, setError] = useState(null); // Added error state

  const handleSymptomClick = (symptomId) => {
    setLoading(true);
    setError(null);

    axios.get(`https://api.example.com/diseases/${symptomId}`)
      .then(response => {
        const diseases = response.data;
        setProbableDiseases(diseases);
        setMostLikelyDisease(diseases.length > 0 ? diseases[0] : null); // Added check for empty array
      })
      .catch(error => {
        setError('Failed to fetch data.'); // Set error message
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Symptom Checker</h1>
      <SymptomList onSymptomClick={handleSymptomClick} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {probableDiseases.length > 0 && !loading && (
        <>
          <DiseaseList probableDiseases={probableDiseases} />
          {mostLikelyDisease && <FAQs mostLikelyDisease={mostLikelyDisease} />}
        </>
      )}
    </div>
  );
};

export default App;
