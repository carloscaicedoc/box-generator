import React, { useState } from 'react'

const boxStyle = (color) => {
    const boxStyling = {
        height: "13.5rem",
        width: "13.5rem",
        backgroundColor: `${color}`,
        margin: "1.75rem",
        borderRadius: "50%" 
    }
    return boxStyling;
}


const DisplayBox = (props) => {
    return (
        <>
            {props.displayBox.map((colorBox, i) =>
                <div key={i} style={boxStyle(colorBox)}></div>
            )}
        </>

    )
}

export default DisplayBox;
