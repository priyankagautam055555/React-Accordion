import React, { useState } from "react";
import './index.css';
const Myaccodian = ({ qucation, answere }) => { 
    const [show, setshow] = useState(false);
    return (
        <>
            <div className="innerGrid">
                <h2 style={{ float: "right" }} onClick={() => setshow(!show)}>{show? "-":"+"}</h2>
                <h1>{qucation}</h1>
                
            </div>
            { show && <p>{answere}</p>}
        </>
    )
}
export default Myaccodian