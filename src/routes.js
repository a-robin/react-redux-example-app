import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/course/CoursesPage";

const Routes = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/courses" component={CoursesPage} />
    <Route path="/about" component={AboutPage} />
  </div>
);

export default Routes;
