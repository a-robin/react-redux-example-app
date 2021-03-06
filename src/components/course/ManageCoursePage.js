import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import React, { Component } from "react";
import * as courseActions from "./../../actions/courseActions";
import CourseForm from "./CourseForm";
import PropTypes from "prop-types";
import jquery from "jquery";
import toastr from "toastr";
import { authorsFormattedForDropdown } from "./../../selectors/selectors";

export class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
    this.displaySuccessToast = this.displaySuccessToast.bind(this);
    this.courseFormIsValid = this.courseFormIsValid.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({ course: Object.assign({}, nextProps.course) });
    }
  }
  updateCourseState(event) {
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({ course: course });
  }
  courseFormIsValid() {
    let formIsValid = true;
    let errors = {};
    if (this.state.course.title.length < 5) {
      errors.title = "Title to be at least 5 characters.";
      formIsValid = false;
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }
  saveCourse(event) {
    event.preventDefault();
    if (!this.courseFormIsValid()) {
    }
    this.setState({ saving: true });
    this.props.actions
      .saveCourse(this.state.course)
      .then(() => this.props.history.push("/courses"))
      .then(() => this.displaySuccessToast())
      .catch(error => {
        this.setState({ saving: false });
        toastr.error(error);
      });
  }

  displaySuccessToast() {
    toastr.success("Author saved.", "Duh!", {
      closeButton: true
    });
  }
  render() {
    return (
      <div>
        <CourseForm
          course={this.state.course}
          errors={this.state.errors}
          allAuthors={this.props.authors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          saving={this.state.saving}
        />
      </div>
    );
  }
}

ManageCoursePage.PropTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  onSave: PropTypes.object.isRequired
};
const getCourseById = (courses, id) => {
  const course = courses.filter(course => id === course.id);
  if (course) return course[0];
};
const mapStateToProps = (state, ownProps) => {
  const courseId = ownProps.match.params.id;

  let course = {
    id: "",
    watchHref: "",
    title: "",
    authorId: "",
    length: "",
    category: ""
  };

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }
  return {
    course: course,
    authors: authorsFormattedForDropdown(state.authors)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
