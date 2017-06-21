import React, { Component } from "react";
import { FormControl } from "react-bootstrap";
import { PropTypes } from "prop-types";

class TextInput extends Component {
  render() {
    var wrapperClass = "form-group";
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " has-error";
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="Field">
          <FormControl
            type="text"
            placeholder={this.props.label}
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
          />
          <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
}

TextInput.PropTypes = {
  name: PropTypes.string.isRequired
};

export default TextInput;
