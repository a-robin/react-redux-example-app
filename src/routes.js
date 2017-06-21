import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/course/CoursesPage";
import ManageCoursePage from "./components/course/ManageCoursePage";

const Routes = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/courses" component={CoursesPage} />
    <Route path="/course" exact component={ManageCoursePage} />
    <Route path="/course/:id" component={ManageCoursePage} />
    <Route path="/about" component={AboutPage} />
  </div>
);

export default Routes;
