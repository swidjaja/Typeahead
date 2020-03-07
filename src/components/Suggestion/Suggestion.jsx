import React from 'react';
import './Suggestion.scss';

const Suggestion = (props) => {
  const {
    idx,
    selectedSuggestion,
    setSelectedSuggestion,
    text,
  } = props;

  const handleOnFocus = () => {
    setSelectedSuggestion(idx);
  }

  const isSelected = idx === selectedSuggestion;

  return (
    <div
      role="option"
      tabIndex="-1"
      aria-selected={isSelected}
      onFocus={handleOnFocus}
      className={`typeahead__suggestion
      ${isSelected ?  'typeahead__suggestion--active' : ''}`}
    >
      {text}
    </div>
  );

};

export default Suggestion;