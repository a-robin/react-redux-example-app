import React from "react";
import propTypes from "prop-types";
import CourseListRow from "./CourseListRow";

const CourseList = ({ courses }) => (
  <table className="table">
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
    </thead>
    <tbody>
      {courses.map(course => <CourseListRow key={course.id} course={course} />)}
    </tbody>
  </table>
);

CourseList.propTypes = { courses: propTypes.array.isRequired };

export default CourseList;
