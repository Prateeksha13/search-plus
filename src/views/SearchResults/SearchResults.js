import React, { useEffect, useState } from "react";

import Layout from "../../components/Layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";
import { products, locations, stores, inventory } from "./data";
import "./searchresults.css";

const SearchResults = ({}) => {
  const [selectedModel, setSelectedModel] = useState({ name: "Any" });
  const [selectedLocation, setSelectedLocation] = useState("United States");
  const [searchResponse, setSearchResponse] = useState([]);
  const [allModels, setAllModels] = useState([]);
  const [selectedFinish, setSelectedFinish] = useState("Any");
  const [selectedStorage, setSelectedStorage] = useState("Any");
  const [selectedAvailability, setSelectedAvailability] = useState("Yes/No");

  useEffect(() => {
    let models = [];
    Object.keys(products).map((productName) => {
      models = models.concat(products[productName].models);
    });
    setAllModels(models);
  }, []);

  const getProductSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let filteredValues = allModels
      .filter(
        (model) => model.name.toLowerCase().slice(0, inputLength) === inputValue
      )
      .map((model) => ({ ...model, label: model.name }));

    return inputLength === 0 ? [] : filteredValues;
  };

  const getProductSuggestionValue = (suggestion) => suggestion.name;

  const renderProductSuggestions = (suggestion) => (
    <div>{suggestion.label}</div>
  );

  const informProductSuggestionSelect = (suggestion, suggestionValue) => {
    setSelectedModel(suggestion);
  };

  const getLocationSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let filteredValues = locations
      .filter(
        (location) =>
          `${location.name} ${location.country}`
            .toLowerCase()
            .slice(0, inputLength) === inputValue
      )
      .map((location) => ({
        ...location,
        label: location.name,
      }));

    return inputLength === 0 ? [] : filteredValues;
  };

  const getLocationSuggestionValue = (suggestion) => suggestion.name;

  const renderLocationSuggestion = (suggestion) => (
    <div>{suggestion.label}</div>
  );

  const informLocationSuggestionSelect = (suggestion, suggestionValue) => {
    setSelectedLocation(suggestion);
    console.log(suggestion, suggestionValue);
  };

  const onSearch = () => {
    console.log("Search with these values", selectedModel, selectedLocation);
    let stockData = {};
    stores.forEach((store) => {
      if (
        store[selectedLocation.type] &&
        store[selectedLocation.type] === selectedLocation.name
      ) {
        stockData[store.id] = {
          store: store,
          stock: 0,
        };
      }
    });
    console.log(stockData, "meh");
    inventory.forEach((item) => {
      console.log(item);
      if (
        (item.model === selectedModel.name || selectedModel.name === "Any") &&
        (item.finish === selectedFinish || selectedFinish === "Any") &&
        (item.storage === selectedStorage || selectedStorage === "Any") &&
        Object.keys(stockData).indexOf(item.store_id) > -1
      ) {
        stockData[item.store_id] = {
          ...stockData[item.store_id],
          stock: stockData[item.store_id].stock + item.stock,
        };
      }
    });
    console.log("search results", stockData);
    setSearchResponse(stockData);
  };

  return (
    <Layout>
      <div className="search-result-content">
        <div className="top-sticky-controls">
          <div className="search-bar-background">
            <SearchBar
              onSearch={onSearch}
              getProductSuggestions={getProductSuggestions}
              renderProductSuggestions={renderProductSuggestions}
              informProductSuggestionSelect={informProductSuggestionSelect}
              getProductSuggestionValue={getProductSuggestionValue}
              getLocationSuggestions={getLocationSuggestions}
              renderLocationSuggestion={renderLocationSuggestion}
              informLocationSuggestionSelect={informLocationSuggestionSelect}
              getLocationSuggestionValue={getLocationSuggestionValue}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
