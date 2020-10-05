import React from 'react';
import './App.css';
import {connect} from "react-redux";
import PublicationsContainer from "./components/Publications/PublicationsContainer";

function App(props) {
  return (
          <PublicationsContainer />
  );
}

let mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {})(App);