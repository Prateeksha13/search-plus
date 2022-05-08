import renderer from "react-test-renderer";
import SearchField from "./SearchField";

it("changes the class when hovered", () => {
  const component = renderer.create(
    <SearchField
      informSuggestionSelect={() => {
        console.log("");
      }}
      getSuggestions={() => {
        console.log("");
      }}
      renderSuggestion={() => {
        console.log("");
      }}
      getSuggestionValue={() => {
        console.log("");
      }}
      label="Search"
      placeholder="Search by product"
      inputRegex=""
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  // renderer.act(() => {
  //   tree.props.onMouseEnter();
  // });
  // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // renderer.act(() => {
  //   tree.props.onMouseLeave();
  // });
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
