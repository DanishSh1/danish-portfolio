import React from "react";
import { FaBorderNone } from "react-icons/fa";

const Project = (props) => {
    return(
        <div className={"card card-type-" + props.type} style={{border: "10px solid #322f2f", borderImage: "linear-gradient(#5e41ae, #5c5a60) 50", borderRadius: "30px", backgroundColor: "#c9c7cf", fontSize: "18px"}}>
            <p style={{fontSize: "13px", textAlign: "left", marginBottom: "-35px", fontFamily: "Verdana"}}>October 2023-November 2023</p>
            <h2 style={{fontFamily: "Verdana"}}>{props.header}</h2>
            <img src={props.src} style={{ float: "left", height: "275px", border: "5px solid #000", marginBottom: "30px", marginLeft: "30px", marginTop: "-32px", borderColor: "#564d6c", width: "315px"}}></img>
            <p style={{marginTop: "0.4in", marginLeft: "0.5in"}}>{props.children}</p>
        </div>
    )
}

export default Project;