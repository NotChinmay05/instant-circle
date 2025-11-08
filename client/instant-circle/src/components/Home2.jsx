import React from 'react';
import Stopwatch from "../assets/icons8-stopwatch-80.png";

export default function Home2(){
    return (
        <div className="box" style={styles.box}>
            <img src={Stopwatch} alt="logo" style={{height: "100px"}}/>
            <div className="text">
                <h2>Talk. Feel. Vanish.</h2>
                <p>Groups last only 5 minutes</p>
            </div>
        </div>
    )
}

const styles = {
    box : {
        display: "flex",
        height: "20vh",
        justifyContent : "space-evenly",
        alignItems : "center",
        border: "5px solid #0396ff",
        borderRadius: "15px",
        width: "800px",
    },

};