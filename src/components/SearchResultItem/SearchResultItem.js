import React from "react";

import "./searchresultitem.css";

const SearchResultItem = ({
  itemNumber,
  locality,
  storeName,
  storeAddress,
  isProductAvailable,
  stockQty,
}) => {
  return (
    <div className="search-result-item">
      <div className="serial-number">{itemNumber}.</div>
      <div className="store-information">
        <h4 role="heading" className="store-name">
          {locality},{" "}
          <span className="highlighted-store-name">{storeName}</span>
        </h4>
        <address className="store-address">
          <p>{storeAddress[0]}</p>
          <p>{storeAddress[1]}</p>
        </address>
      </div>
      <div className="stock-information">
        <div className="stock-detail">
          Available:{" "}
          {isProductAvailable && <span className="content-green">Yes</span>}
          {!isProductAvailable && <span className="content-red">No</span>}
        </div>
        <div className="stock-detail">
          {isProductAvailable && (
            <span className="content-green">In Stock: {stockQty}</span>
          )}
          {!isProductAvailable && (
            <span className="content-red">Not In Stock</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;
