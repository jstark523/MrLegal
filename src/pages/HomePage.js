import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => (
    <>
        <div className={styles.images}>
        {/* <h2 className={styles.spanA}>New York's Premier Traffic Lawyer</h2>
        <h3 className={styles.spanC}>Don't leave money on the table</h3>
        <h1 className={styles.spanB}>Get What's Yours</h1> */}
        </div>
        <h4 className={styles.bText}>Take this assesment to see how we can help you</h4>
        <a href = "http://localhost:3000/Personal_Assesment"><button className={styles.quizbut} > Quiz</button></a>



    </>
    
);
export default HomePage;