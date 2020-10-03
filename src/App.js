import React from 'react';
import './App.css';
import {compose} from "redux";
import {connect} from "react-redux";
import { Route, withRouter } from "react-router-dom";
import PublicationsContainer from "./components/Publications/PublicationsContainer";

function App(props) {
  return (<div>
  <PublicationsContainer />
      </div>
  );
}

let mapStateToProps = (state) => ({
  sao: state.publication.pub
});

export default connect(mapStateToProps, {})(App);