import React from "react";

export const Background = ({theme}) => {


    return (
        <div className={`background ${theme}`}>
            <div className={`upper-background ${theme}`}></div>
            <div className={`lower-background ${theme}`}></div>
        </div>
    )
}