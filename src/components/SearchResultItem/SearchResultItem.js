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
      <div className="serial-number">{itemNumber}</div>
      <div className="store-information">
        <h4>
          {locality}, {storeName}
        </h4>
        <address>
          <p>{storeAddress[0]}</p>
          <p>{storeAddress[1]}</p>
        </address>
      </div>
      <div className="stock-information">
        <div>
          Available:{" "}
          {isProductAvailable && <span className="content-green">Yes</span>}
          {!isProductAvailable && <span className="content-red">No</span>}
        </div>
        <div>
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
