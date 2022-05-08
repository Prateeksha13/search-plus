import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

import SearchIcon from "../../assets/forms/search.svg";
import "./searchfield.css";

const SearchField = ({
  informSuggestionSelect,
  getSuggestions,
  renderSuggestion,
  getSuggestionValue,
  label,
  placeholder,
  inputRegex,
  shouldAutoFocus,
  onInputChange,
}) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.

  const onChange = (event, { newValue }) => {
    if (inputRegex) {
      if (inputRegex.test(newValue)) {
        setValue(newValue);
      }
    } else {
      setValue(newValue);
    }
    onInputChange(newValue);
  };

  // Autosuggest will call this function every time you need to update suggestions.
  const onSuggestionsFetchRequested = ({ value }) => {
    setValue(value);
    setSuggestions(getSuggestions(value));
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    informSuggestionSelect(suggestion, suggestionValue);
  };

  return (
    <div className="search-field-wrapper">
      {label && <label className="search-field-label">{label}</label>}
      <img className="search-field-icon" src={SearchIcon} alt="search" />
      <Autosuggest
        highlightFirstSuggestion={true}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: placeholder ? placeholder : "Search",
          value: value,
          onChange: onChange,
          autoFocus: shouldAutoFocus,
          // onBlur: (event) => informSuggestionSelect(event.target.value),
        }}
        onSuggestionSelected={onSuggestionSelected}
      />
    </div>
  );
};

export default SearchField;
