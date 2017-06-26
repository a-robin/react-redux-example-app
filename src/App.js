import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Header from "./common/Header";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <div>
            <Header loading={this.props.loading} />
            <Routes />
          </div>
        </Router>
      </div>
    );
  }
}

App.PropTypes = {
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  loading: state.ajaxCallsInProgress > 0
});

export default connect(mapStateToProps)(App);
