import React from "react";
import PropTypes from "prop-types";
import ReactSelect from "react-select";

import "./select.css";

function Select({
  placeHolder,
  isSearchable,
  data,
  dropdownContainerClassName,
  dropdownClassNamePrefix,
  onChange,
  value,
  defaultValue,
  isDisabled,
  isClearable,
  onInputChange,
}) {
  return (
    <div className={`dropdown_wrapper ${dropdownContainerClassName}`}>
      <ReactSelect
        classNamePrefix={"app-select"}
        onInputChange={onInputChange}
        // components={isNested && { Option: CustomOption }}
        isClearable={isClearable}
        menuPosition={"fixed"}
        // styles={customStyles ? customStyles : localStyles}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        options={data}
        isDisabled={isDisabled}
        placeholder={placeHolder}
        isSearchable={isSearchable}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#ddf0f9",
            primary: "#F5F5F7",
          },
        })}
      />
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  isSearchable: PropTypes.bool,
  data: PropTypes.array,
  dropdownContainerClassName: PropTypes.string,
  dropdownListClassName: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  isDisabled: PropTypes.bool,
};

Select.defaultProps = {
  placeHolder: "",
  isSearchable: false,
  dropdownContainerClassName: "",
  dropdownListClassName: "",
  data: [],
  onChange: (value) => {
    console.dir(value);
  },
  isDisabled: false,
};

export default Select;
