import React from 'react';
import './SuggestionList.scss';
import Suggestion from '../Suggestion/Suggestion';

const SuggestionList = (props) => {
  const {
    selectedSuggestion,
    setSelectedSuggestion,
    showSuggestions,
    suggestions,
  } = props;

  return (
    <div
      id="suggestionsList"
      className="typeahead__suggestions" 
      role="listbox"
      hidden={!showSuggestions}
      tabIndex="-1"
    >
      {suggestions.map((suggestion, idx) => (
        <Suggestion
          key={`suggestion-${idx}`}
          selected={idx === selectedSuggestion}
          idx={idx}
          text={suggestion}
          selectedSuggestion={selectedSuggestion}
          setSelectedSuggestion={setSelectedSuggestion}
        />
      ))}
    </div>
  )
};

export default SuggestionList;
