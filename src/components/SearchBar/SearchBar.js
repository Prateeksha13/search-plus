import React from "react";

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
  onLocationInputChange,
  onProductInputChange,
}) => {
  return (
    <div className="search-bar-container">
      <div className="search-bar-input-wrapper">
        <SearchField
          label=""
          placeholder={"Search by product name"}
          shouldAutoFocus={true}
          getSuggestions={getProductSuggestions}
          renderSuggestion={renderProductSuggestions}
          informSuggestionSelect={informProductSuggestionSelect}
          getSuggestionValue={getProductSuggestionValue}
          onInputChange={onProductInputChange}
        />
        <span className="horizontal-divider" />
        <SearchField
          label=""
          placeholder={"Search by location name"}
          getSuggestions={getLocationSuggestions}
          renderSuggestion={renderLocationSuggestion}
          informSuggestionSelect={informLocationSuggestionSelect}
          getSuggestionValue={getLocationSuggestionValue}
          onInputChange={onLocationInputChange}
        />
      </div>
      <Button role="button" label="Search" onClick={onSearch} />
    </div>
  );
};

export default SearchBar;
