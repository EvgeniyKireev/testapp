import React from "react";
import s from './Publication.module.css';

let Publication = (props) => {
    debugger
    return (<div className={s.pub}>
        <div className={s.photo}><img src={props.link}/>
            <div className={s.info}>
                    <div>{props.likes} likes
                </div><div onClick={()=> {alert(props.id)}}><img className={s.like} src={'https://img.icons8.com/pastel-glyph/2x/facebook-like.png'}/></div>
                <div className={s.data}>{['Дата: ',new Date().getDay(),'.', new Date((props.date) * 1000).getMonth(),'.', new Date((props.date) * 1000).getFullYear()]}</div>
            </div>
        </div>
        <span>{props.desc}</span>

    </div>);
}
export default Publication;