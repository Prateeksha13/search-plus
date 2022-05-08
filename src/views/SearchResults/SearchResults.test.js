import React from "react";
import renderer from "react-test-renderer";
import SearchResults from "./SearchResults";

test("renders search results", () => {
  const component = renderer.create(<SearchResults />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
