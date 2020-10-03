import React from "react";
import Publication from "./Publication";

let Publications = (props) => {
    let urls = [];
    if (props.urlsPhotos) {
        urls = props.urlsPhotos.map((k) => <Publication link={k}/>)
    }
    return (<div>
        {urls}
    </div>);
}
export default Publications;