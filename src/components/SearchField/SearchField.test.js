import renderer from "react-test-renderer";
import SearchField from "./SearchField";

it("changes the class when hovered", () => {
  const component = renderer.create(
    <SearchField
      informSuggestionSelect={(value) => {
        console.log(value);
      }}
      getSuggestions={(value) => {
        console.log(value);
      }}
      renderSuggestion={(value) => {
        console.log(value);
      }}
      getSuggestionValue={(value) => {
        console.log(value);
      }}
      label="Search"
      placeholder="Search by product"
      inputRegex=""
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
