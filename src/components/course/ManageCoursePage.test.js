import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { shallow, mount } from "enzyme";
import { Button } from "react-bootstrap";
import { ManageCoursePage } from "./ManageCoursePage";

describe("Manage Course Page", () =>
  it("Sets error message when trying to save empty title", () => {
    const props = {
      authors: [],
      course: {
        id: "",
        watchHref: "",
        title: "",
        authorId: "",
        length: "",
        category: ""
      },
      actions: {
        saveCourse: () => {
          return Promise.resolve();
        }
      }
    };
    const wrapper = mount(<ManageCoursePage {...props} />);
    const saveButton = wrapper.find(Button).last();
    expect(saveButton).toBeDefined();
    saveButton.simulate("click");
    expect(wrapper.state().errors.title).toBe(
      "Title to be at least 5 characters."
    );
  }));
