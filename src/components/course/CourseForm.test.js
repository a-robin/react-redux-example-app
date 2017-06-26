import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import CourseForm from "./CourseForm";

function setup(saving = false) {
  let props = {
    course: {},
    saving: saving,
    errors: {},
    allAuthors: [],
    onSave: () => {},
    onChange: () => {}
  };
  const div = document.createElement("div");
  let output = shallow(<CourseForm {...props} />);

  return { props, output };
}
describe("CourseFrom tests via Jest", () => {
  it("renders form and h1", () => {
    const { output } = setup();
    expect(output.type()).toBe("form");
    let [h1] = output.find("h1");
    expect(h1).toBeDefined;
  });

  it('save button is labelled "Save" when not saving', () => {
    const { output } = setup(false);
    const submitButton = output.find("Button");
    expect(submitButton.props().children).toBe("Save");
  });

  it('save button is labelled "Saving..." when saving', () => {
    const { output } = setup(true);
    const submitButton = output.find("Button");
    expect(submitButton.props().children).toBe("Saving ...");
  });
});
