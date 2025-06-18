import React from "react";

const ImgCard = (props) => {
    return(
        <div className={"imgCard imgCard-type-" + props.type}>
            <img src={props.url} style={{height:"200px", width: "200px"}}/>
            <p style={{fontFamily:"Verdana"}}>{props.children}</p>
        </div>
    );
}

export default ImgCard;