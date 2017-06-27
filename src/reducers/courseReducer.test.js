import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActions";

describe("Course Reducer", () => {
  it("should add course when passed SAVE_COURSE_SUCCESS", () => {
    const initialState = [{ title: "A" }, { title: "B" }];
    const newCourse = { title: "C" };

    const action = actions.saveCourseSuccess(newCourse);

    const newState = courseReducer(initialState, action);

    const expectedState = [...initialState, newCourse];

    expect(newState).toEqual(expectedState);
  });

  it("should update course when passed UPDATE_COURSE_SUCCESS", () => {
    const initialState = [{ id: "1", title: "A" }, { id: "2", title: "B" }];
    const updatedCourse = { id: "2", title: "C" };

    const action = actions.updateCourseSuccess(updatedCourse);

    const newState = courseReducer(initialState, action);

    const expectedState = [...initialState];
    expectedState[initialState.findIndex(x => x.id === "2")] = updatedCourse;

    expect(newState).toEqual(expectedState);
  });
});
