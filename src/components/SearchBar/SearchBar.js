import React, { useState } from "react";

import SearchField from "../SearchField/SearchField";
import Button from "../Button/Button";
import "./searchbar.css";

const SearchBar = ({
  onSearch,
  getProductSuggestions,
  renderProductSuggestions,
  informProductSuggestionSelect,
  getProductSuggestionValue,
  getLocationSuggestions,
  renderLocationSuggestion,
  getLocationSuggestionValue,
  informLocationSuggestionSelect,
}) => {
  return (
    <div className="search-bar-container">
      <div className="search-bar-input-wrapper">
        <SearchField
          label=""
          shouldAutoFocus={true}
          getSuggestions={getProductSuggestions}
          renderSuggestion={renderProductSuggestions}
          informSuggestionSelect={informProductSuggestionSelect}
          getSuggestionValue={getProductSuggestionValue}
        />
        <span className="horizontal-divider" />
        <SearchField
          label=""
          getSuggestions={getLocationSuggestions}
          renderSuggestion={renderLocationSuggestion}
          informSuggestionSelect={informLocationSuggestionSelect}
          getSuggestionValue={getLocationSuggestionValue}
        />
      </div>
      <Button label="Search" onClick={onSearch} />
    </div>
  );
};

export default SearchBar;
