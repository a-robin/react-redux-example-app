import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseListRow = ({ course }) => (
  <tr>
    <td>
      <a href={course.watchHref} target="_blank" rel="noopener noreferrer">
        Watch
      </a>
    </td>
    <td><Link to={"/course/" + course.id}>{course.title}</Link></td>
    <td>{course.authorId}</td>
    <td>{course.category}</td>
    <td>{course.length}</td>
  </tr>
);

CourseListRow.propTypes = {
  course: propTypes.object.isRequired
};
export default CourseListRow;
