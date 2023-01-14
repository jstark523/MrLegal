import React from "react";
import styles from './Background.module.css'

export default class Background extends React.Component {
    render(){
        return (
            <div>
                <div className = {styles.logo}></div>
                <div className = {styles.car}></div>
            </div>
        );
    }
} 

