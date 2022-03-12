import React, { useState } from 'react'

const FormBox = (props) => {
    const [color, setColor] = useState("");

    const createBoxes = (e) => {
        e.preventDefault();
        props.newBox(color);
        setColor("");
    }


    return (
        <>
            <form onSubmit={createBoxes}>
                <div className="input-group mx-auto">

                    <span className="input-group-text">Color</span>
                    <input onChange={(e) => setColor(e.target.value)} type="text"
                        name="color" placeholder="Your favorite color ..."
                        value={color} className="form-control" />
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </>
    )
}

export default FormBox;

