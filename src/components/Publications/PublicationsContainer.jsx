import React from "react";
import Publications from "./Publications";
import {getPhotos, setUrls} from "../../redux/publication-reducer";
import {connect} from "react-redux";



class PublicationsContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    componentDidMount() {
        this.props.getPhotos()
    }

    render() {
        return (<Publications photos={this.props.photos}/>);
    }
}

const mapStateToProps = (state) => ({
    photos: state.publication.photos

})


export default connect(mapStateToProps, {getPhotos, setUrls})(PublicationsContainer);