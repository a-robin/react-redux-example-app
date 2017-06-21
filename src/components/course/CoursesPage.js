import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as courseActions from "./../../actions/courseActions";

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.courseRow = this.courseRow.bind(this);
  }
  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }
  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <Link to="/course">
          <Button type="submit" className="btn-primary">
            Add Course
          </Button>
        </Link>
        <CourseList courses={courses} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
