import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FAQs = ({ mostLikelyDisease }) => {
  const [faqs, setFAQs] = useState([]);

  useEffect(() => {
    if (mostLikelyDisease && mostLikelyDisease.id) {
      axios.get(`/faqs?diseaseId=${mostLikelyDisease.id}`)
        .then(response => {
          setFAQs(response.data);
        })
        .catch(error => {
          console.error('Error fetching FAQs:', error);
        });
    }
  }, [mostLikelyDisease]);

  if (!mostLikelyDisease) {
    return null;
  }

  return (
    <div>
      <h2>FAQs for {mostLikelyDisease.name}</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>{faq.question} - {faq.answer}</li>
        ))}
      </ul>
    </div>
  );
};

export default FAQs;
