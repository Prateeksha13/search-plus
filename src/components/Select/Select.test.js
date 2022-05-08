import React from "react";
import renderer from "react-test-renderer";
import Select from "./Select";

test("renders select", () => {
  const component = renderer.create(
    <Select
      placeHolder="Select an item"
      data={[
        { label: "iPhone 13", value: "iPhone 13" },
        { label: "iPhone 13 Mini", value: "iPhone 13 Mini" },
      ]}
      value={{ label: "iPhone 13", value: "iPhone 13" }}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
