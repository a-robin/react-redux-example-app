import React from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from "react-bootstrap";

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options
}) => {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl
        componentClass="select"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={defaultOption}
      >
        <option value="">{defaultOption}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.text}</option>
        ))}
      </FormControl>
      {error && <HelpBlock>{error}</HelpBlock>}
    </FormGroup>
  );
};

export default SelectInput;
