import React from "react";
import renderer from "react-test-renderer";
import SearchResultItem from "./SearchResultItem";

test("renders result item", () => {
  const component = renderer.create(
    <SearchResultItem
      itemNumber={1}
      locality={"Toledo"}
      storeName={"Franklin Park Mall"}
      storeAddress={["5001 Monroe Street, Toledo, OH 43623", "(419) 473-4250"]}
      stockQty={20}
      isProductAvailable={true}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
