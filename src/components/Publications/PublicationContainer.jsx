import React from "react";
import s from './Publication.module.css';
import Publication from "./Publication";
import {connect} from "react-redux";
import {api} from "../../api/api";

class PublicationContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }

    render() {
        return (<div>
            <Publication {...this.props}/>
        </div>);
    }
}

export default connect(null,{getInfoPhoto :api.getInfoPhoto})(PublicationContainer);