import React from "react";
import Publications from "./Publications";
import {getPhotos, setUrls} from "../../redux/publication-reducer";
import {connect} from "react-redux";

class PublicationsContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getPhotos().then(() => {
            this.props.setUrls(this.props.photos.map((k) => (`https://farm${k.farm}.staticflickr.com/${k.server}/${k.id}_${k.secret}.jpg`)))
            console.log(this.props.urlsPhotos)
        });
    }

    render() {
        // eslint-disable-next-line no-undef
        return (<Publications urlsPhotos={this.props.urlsPhotos}/>);
    }
}

const mapStateToProps = (state) => ({
    photos: state.publication.photos.photo,
    urlsPhotos: state.publication.urlsPhotos

})


export default connect(mapStateToProps, {getPhotos, setUrls})(PublicationsContainer);