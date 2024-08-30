import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import axios from 'axios';

const FAQs = ({ mostLikelyDisease }) => {
  const [faqs, setFAQs] = useState([]);

  useEffect(() => {
    if (mostLikelyDisease && mostLikelyDisease.id) {
      // Call API to fetch FAQs for the most likely disease
      axios.get(`https://api.example.com/faqs/${mostLikelyDisease.id}`)
        .then(response => {
          // Update state with FAQs
          setFAQs(response.data);
        })
        .catch(error => {
          console.error('Error fetching FAQs:', error);
        });
    }
  }, [mostLikelyDisease]);

  if (!mostLikelyDisease) {
    return null; // Render nothing if there's no disease selected
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
