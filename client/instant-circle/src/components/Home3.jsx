import React from 'react';
import Encryption from "../assets/icons8-encryption-32.png";

export default function Home3(){
    return (
      <div className="box" style={styles.box}>
        <div className="text">
            <h2>What's said in circle, Stays in circle</h2>
            <p>We ensure anonymous identity and encryption</p>
        </div>
        <img src={Encryption} alt="logo" style={{height: "100px"}}/>
      </div>
    )
};

const styles = {
    box : {
        display: "flex",
        height: "20vh",
        justifyContent : "space-evenly",
        alignItems : "center",
        gap: "50px",
        border: "5px solid #0396ff",
        borderRadius: "15px",
        width: "800px",
    },

};