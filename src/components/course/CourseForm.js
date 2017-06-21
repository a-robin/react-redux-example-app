import React from "react";
import propTypes from "prop-types";
import { Button } from "react-bootstrap";
import TextInput from "./../../common/TextInput";
import SelectInput from "./../../common/SelectInput";

const CourseForm = ({
  course,
  allAuthors,
  onSave,
  onChange,
  loading,
  errors,
  history
}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />
      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}
      />
      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />
      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}
      />
      <Button
        className="btn-primary"
        type="submit"
        onClick={event => {
          onSave(event);
          history.push("/courses");
        }}
        disabled={loading}
      >
        {loading ? "Saving ..." : "Save"}
      </Button>
    </form>
  );
};

CourseForm.propTypes = {
  course: propTypes.object.isRequired,
  allAuthors: propTypes.array.isRequired,
  onSave: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  loading: propTypes.bool,
  errors: propTypes.object
};

export default CourseForm;
