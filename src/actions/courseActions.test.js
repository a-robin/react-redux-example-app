import thunk from "redux-thunk";
import nock from "nock";
import * as types from "./actionTypes";
import configureMockStore from "redux-mock-store";
import * as courseActions from "./courseActions";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses", done => {
    //Example to stub/mock a web API with nock
    //nock('fakeAdress').get("/courses").reply(404, {});

    const expectedActions = [
      { type: types.BEGIN_AJAX_CALL },
      {
        type: types.LOAD_COURSES_SUCCESS,
        body: { courses: [{ id: "clean-code", title: "Clean Code" }] }
      }
    ];

    const store = mockStore({ courses: [] }, expectedActions);

    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });
  });
});
