import React from 'react';
import Logo from "../assets/logo.png";

export default function Home1(){
    return (
      <div className="box" style={styles.box}>
        <div className="text">
            <h2>Meet Your Mood, Instantly</h2>
            <p>Instant chat grouped formed with people feeling the same as you</p>
        </div>
        <img src={Logo} alt="logo" style={{height: "100px"}}/>
      </div>
    )
};

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