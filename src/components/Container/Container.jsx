import React, { useState, useEffect } from 'react';
import './Container.scss';
import Form from '../Form/Form';
import SuggestionList from '../SuggestionList/SuggestionList';
import getResults from '../../lib/getResults';

const Container = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [activeQuery, setActiveQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const updateSelectedSuggestion = (direction) => {
    if (direction === -1) {
      if (selectedSuggestion >= 0) {
        if (selectedSuggestion === 0) {
          setShowSuggestions(false);
        }
        setSelectedSuggestion(selectedSuggestion - 1);
      }
    } else if (direction === 1) {
      if (selectedSuggestion < suggestions.length - 1) {
        if (selectedSuggestion === -1) {
          setShowSuggestions(true);
        }
        setSelectedSuggestion(selectedSuggestion + 1);
      }
    }
  };

  const updateActiveQuery = (query) => {
    setActiveQuery(query);

    const results = getResults(query);
    setSuggestions(results);

    setShowSuggestions(results.length);
    // Every time we enter new query, reset the selected suggestion so that
    // the query inside the input text will be updated properly
    setSelectedSuggestion(-1);
  }

  useEffect(() => {
    if (!suggestions || !suggestions.length) {
      setSelectedSuggestion(-1);
    }
  }, [suggestions]);

  let formInputValue = activeQuery;

  if (suggestions.length && selectedSuggestion >= 0) {
    formInputValue = suggestions[selectedSuggestion];
  }

  return (
    <>
      <Form
        initialInputValue={formInputValue}
        setSuggestions={setSuggestions}
        showSuggestions={showSuggestions}
        updateActiveQuery={updateActiveQuery}
        updateSelectedSuggestion={updateSelectedSuggestion}
      />
      <SuggestionList
        selectedSuggestion={selectedSuggestion}
        setSelectedSuggestion={setSelectedSuggestion}
        showSuggestions={showSuggestions}
        suggestions={suggestions} 
      />
    </>
  )
};

export default Container;