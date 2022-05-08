import React, { useEffect, useState } from "react";

import Layout from "../../components/Layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResultItem from "../../components/SearchResultItem/SearchResultItem";
import Select from "../../components/Select/Select";
import { products, locations, stores, inventory } from "./data";
import "./searchresults.css";

const SearchResults = ({}) => {
  const [selectedProduct, setSelectedProduct] = useState({ name: "" });
  const [selectedModel, setSelectedModel] = useState({ name: "" });
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchResponse, setSearchResponse] = useState({});
  const [selectedFinish, setSelectedFinish] = useState("Any");
  const [selectedStorage, setSelectedStorage] = useState("Any");
  const [selectedAvailability, setSelectedAvailability] = useState("Yes/No");
  const [showFilters, setShowFilters] = useState(false);
  const [showNoDataMessage, setShowNoDataMessage] = useState(false);

  useEffect(() => {
    onFilter();
  }, [selectedModel, selectedFinish, selectedStorage, selectedAvailability]);

  const getProductSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let filteredValues = Object.keys(products)
      .filter(
        (key) =>
          products[key].name.toLowerCase().slice(0, inputLength) === inputValue
      )
      .map((key) => ({ ...products[key], label: products[key].name }));

    return inputLength === 0 ? [] : filteredValues;
  };

  const getProductSuggestionValue = (suggestion) => suggestion.name;

  const renderProductSuggestions = (suggestion) => (
    <div>{suggestion.label}</div>
  );

  const informProductSuggestionSelect = (suggestion) => {
    setSelectedProduct(suggestion);
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
    if (selectedLocation.name) {
      onSearch();
    }
    console.log(suggestion, suggestionValue);
  };

  const onSearch = () => {
    setShowFilters(true);
    setShowNoDataMessage(true);
    if (!selectedLocation) {
      setSelectedLocation({
        name: "United States",
        type: "country",
        query: "location:united%20states&store=",
      });
    }
    setSelectedModel(
      selectedProduct.models && selectedProduct.models[0]
        ? selectedProduct.models[0]
        : { name: "" }
    );
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

    let response = {};
    inventory.forEach((item) => {
      if (
        item.product === selectedProduct.name &&
        item.model === selectedModel.name &&
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

    if (selectedAvailability === "Yes") {
      Object.keys(stockData).forEach((storeId) => {
        if (stockData[storeId].stock > 0) {
          response[storeId] = stockData[storeId];
        }
      });
    } else if (selectedAvailability === "No") {
      Object.keys(stockData).forEach((storeId) => {
        if (stockData[storeId].stock === 0) {
          response[storeId] = stockData[storeId];
        }
      });
    } else {
      response = { ...stockData };
    }

    setSearchResponse(response);
  };

  const onFilter = () => {
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

    let response = {};
    inventory.forEach((item) => {
      if (
        item.model === selectedModel.name &&
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

    if (selectedAvailability === "Yes") {
      Object.keys(stockData).forEach((storeId) => {
        if (stockData[storeId].stock > 0) {
          response[storeId] = stockData[storeId];
        }
      });
    } else if (selectedAvailability === "No") {
      Object.keys(stockData).forEach((storeId) => {
        console.log(stockData[storeId].stock, "no");
        if (stockData[storeId].stock === 0) {
          response[storeId] = stockData[storeId];
        }
      });
    } else {
      response = { ...stockData };
    }
    setSearchResponse(response);
  };

  const onModelChange = (value) => {
    setSelectedModel(value.value);
  };

  const onFinishChange = (value) => {
    setSelectedFinish(value.value);
  };

  const onStorageChange = (value) => {
    setSelectedStorage(value.value);
  };

  const onAvailabilityChange = (value) => {
    setSelectedAvailability(value.value);
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
          {selectedProduct.name && showFilters && (
            <div className="search-filters">
              <Select
                data={
                  "models" in selectedProduct &&
                  selectedProduct.models.map((model) => ({
                    label: model.name,
                    value: model,
                  }))
                }
                value={{ label: selectedModel.name, value: selectedModel }}
                onChange={onModelChange}
              />
              <Select
                data={[{ label: "Any", value: "Any" }].concat(
                  selectedModel &&
                    "finish" in selectedModel &&
                    selectedModel.finish.map((item) => ({
                      label: item,
                      value: item,
                    }))
                )}
                value={{ label: selectedFinish, value: selectedFinish }}
                onChange={onFinishChange}
              />
              <Select
                data={[{ label: "Any", value: "Any" }].concat(
                  selectedModel &&
                    "storage" in selectedModel &&
                    selectedModel.storage.map((item) => ({
                      label: item,
                      value: item,
                    }))
                )}
                value={{ label: selectedStorage, value: selectedStorage }}
                onChange={onStorageChange}
              />
              <Select
                data={[
                  {
                    label: "Yes/No",
                    value: "Yes/No",
                  },
                  {
                    label: "Yes",
                    value: "Yes",
                  },
                  {
                    label: "No",
                    value: "No",
                  },
                ]}
                value={{
                  label: selectedAvailability,
                  value: selectedAvailability,
                }}
                onChange={onAvailabilityChange}
              />
            </div>
          )}
        </div>
        <div className="search-result-list">
          {Object.keys(searchResponse).map((storeId, index) => (
            <SearchResultItem
              key={storeId}
              itemNumber={index + 1}
              locality={searchResponse[storeId].store.locality}
              storeName={searchResponse[storeId].store.name}
              storeAddress={searchResponse[storeId].store.address}
              isProductAvailable={
                searchResponse[storeId].stock > 0 ? true : false
              }
              stockQty={searchResponse[storeId].stock}
            />
          ))}
          {Object.keys(searchResponse).length === 0 && showNoDataMessage && (
            <center>
              <h4>No results</h4>
            </center>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
