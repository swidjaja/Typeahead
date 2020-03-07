import React from 'react';
import './Form.scss';

const Form = (props) => {
  const {
    initialInputValue,
    showSuggestions,
    updateActiveQuery,
    updateSelectedSuggestion,
  } = props;
  // We make input uncontrolled here since we need to be able to
  // update input value when user types query search and when
  // user selects from suggestion
  const inputRef = React.createRef(null);

  const onChangeHandler = () => {
    updateActiveQuery(inputRef.current.value);
  };

  const onSubmitHandler = (evt) => {
    console.log(`submitting ${inputRef.current.value}`);
    evt.preventDefault();
  };

  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === 38) {
      updateSelectedSuggestion(-1);
    } else if (keyCode === 40) {
      updateSelectedSuggestion(1);
    }
  }

  return (
    <>
      <form className="typeahead__form" onSubmit={onSubmitHandler}>
        <input
          className="typeahead__input"
          type="text"
          value={initialInputValue}
          ref={inputRef}
          aria-label="Type text"
          onChange={onChangeHandler}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-expanded={showSuggestions}
          aria-controls="suggestionsList"
        />
        <button className="typeahead__submit">Submit</button>
      </form>
    </>
  )
};

export default Form;
