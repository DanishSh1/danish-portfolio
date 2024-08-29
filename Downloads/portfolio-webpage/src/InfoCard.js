import React from "react";

const InfoCard = (props) => {
    return(
        <div className={"card card-type-" + props.type}>
            <p>{props.children}</p>
        </div>
    );
}

export default InfoCard;