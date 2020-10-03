import React from "react";
import Publications from "./Publications";
import {api} from "../../api/api";

class PublicationsContainer extends React.Component {
    componentDidMount() {
         window.list = api.getListPhoto();

    }
    render() {
        // eslint-disable-next-line no-undef
        return (<Publications list={this.list}/>);
    }
    debbuger
}

export default PublicationsContainer;