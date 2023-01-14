import React, {useState} from 'react';
import styles from './Quiz.module.css';

function Quiz(){
    const [currentCon, setConNum] = useState(0);
    const [showConclusion, setConclusion] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const conclusions = [
        {
            cId:0,
            woText: "Without Services: Can end up sued",
            wuText: "With Services: Need specifics, but with these cases we usually blah blah blah"
        },
        {
            cId:1,
            woText: "Without services: You typically recieve 3 points on your license (10 causes suspension), must attend court, and pay a modest fine",
            wuText: "With services: You will not need to go to court, you will mail us your ticket, and we typically reduce ticket to a fine"
        },
        {
            cId:2,
            woText: "Without services: You typically recieve 4 points on your license (10 causes suspension), must attend court, and pay a modest fine",
            wuText: "With services: You will not need to go to court, you will mail us your ticket, and we typically reduce ticket to a fine"
        },
        {
            cId:3,
            woText: "Without services: You typically recieve 6 points on your license (10 causes suspension), must attend court, and pay a modest fine",
            wuText: "With services: You will not need to go to court, you will mail us your ticket, and we typically reduce ticket to a fine"
        },
        {
            cId:4,
            woText: "Without services: You typically recieve 8 points on your license (10 causes suspension), must attend court, and pay a modest fine",
            wuText: "With services: You will not need to go to court, you will mail us your ticket, and we typically reduce ticket to a fine"
        },
        {
            cId:5,
            woText: "Without services: You typically recieve 11 points on your license (10 causes suspension), must attend court, and pay a modest fine",
            wuText: "With services: You will not need to go to court, you will mail us your ticket, and we typically reduce ticket to a fine"
        },
        {
            cId:6,
            woText: "Without services: lorem impsum",
            wuText: "With services: lorem ipsum"
        },
        {
            cId:7,
            woText: "Without services: lorem impsum",
            wuText: "With services: lorem ipsum"
        },
        {
            cId:8,
            woText: "Without services: lorem impsum",
            wuText: "With services: lorem ipsum"
        },
        {
            cId:9,
            woText: "Without services: lorem impsum",
            wuText: "With services: lorem ipsum"
        },
        {
            cId:10,
            woText: "Without services: lorem impsum",
            wuText: "With services: lorem ipsum"
        },
    ]
    const questions = [
        {
          text: "What Happened?",
          options: [
            { id: 0, text: "An Accident Ticket"},
            { id: 1, text: "A Traffic Ticket"},
            { id: 2, text: "Personal Injury"},
          ]
        },

          {
            text: "What was the amount above the speed limit?",
            options: [
              { id: 3, text: "1-10 MPH"},
              { id: 4, text: "11-20 MPH"},
              { id: 5, text: "21-30 MPH"},
              { id: 6, text: "31-40 MPH"},
              { id: 12, text: "40+ MPH"}
            ]
          },
          {
            text: "What type of traffic ticket?",
            options: [
              { id: 7, text: "A Speeding Ticket"},
              { id: 8, text: "DUI"},
              { id: 9, text: "A.U.O (Suspended License)"},
              { id: 10, text: "'Move Over' Law"},
              { id: 11, text: "Red Light/Stop Sign"},
            ]
          }
      ];
      
    const optionClicked = (id) =>{
        if(id == 1){
            setCurrentQuestion(2);
        }
        if(id == 0){
            setConNum(0);
            setConclusion(true);
        }
        if(id == 3){
            setConNum(1);
            setConclusion(true);
        }
        if(id == 4){
            setConNum(2);
            setConclusion(true);
        }
        if(id == 5){
            setConNum(3);
            setConclusion(true);
        }
        if(id == 6){
            setConNum(4);
            setConclusion(true);
        }
        if(id == 12){
            setConNum(5);
            setConclusion(true);
        }
        if(id == 2){
            setConNum(8);
            setConclusion(true);
        }
        if(id == 7){
            setCurrentQuestion(1);
        }
    }
    const restart = () => {
        setCurrentQuestion(0);
        setConclusion(false);
    }
    return(
    <>
    <h1>fill out this short quiz to see how we can help</h1>

    {showConclusion ? (
            <div className={styles.conclusion}>
            <h2>
                How we usually can help:
            </h2>
            <h3>{conclusions[currentCon].woText}</h3>
            <h3>{conclusions[currentCon].wuText}</h3>
                <button>Request Services</button>
            </div>
    ):(
    <div className={styles.questionCard}>
    <h3 className={styles.questionText}>{questions[currentQuestion].text}</h3>
        <ul className={styles.test}>
            {questions[currentQuestion].options.map((option) => {
                return(
                <li onClick={() => optionClicked(option.id)}key = {option.id} className={styles.test2}>{option.text}</li>
                );
            })}
        </ul>

    </div>



    )}
    <button onClick = {() => restart()} className={styles.restart}>Restart Assesment</button>
    </>
    );
}
export default Quiz;