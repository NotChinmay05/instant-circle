import React from 'react';

export default function Footer(){
    return (
        <footer style={styles.footer}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem assumenda nostrum repudiandae aspernatur dolorum quasi aliquid illo? Labore minima commodi, voluptates, ab distinctio illo quia eos omnis iusto quae animi.</p>
            <p>Contact Us</p>
            <p>123456789</p>
        </footer>
    )
};

const styles = {
    footer : {
        backgroundColor: "#0396ff",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px"
    },
}