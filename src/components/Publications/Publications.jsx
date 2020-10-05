import React from "react";
import PublicationContainer from "./PublicationContainer";
import s from "./Publications.module.css";

let Publications = (props) => {
    let data = []
    if (props.photos != '') {
        data = props.photos.map((k) => <PublicationContainer link={k.sizes[6].url} desc={k.text} likes={k.likes.count} date={k.date} id={k.id}/>)

    }


    return (<div className={s.wrapper}>
        {data}
    </div>);
}
export default Publications;