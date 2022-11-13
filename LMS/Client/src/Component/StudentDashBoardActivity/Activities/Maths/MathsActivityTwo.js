import React, {useState} from "react";
import "../Activities.css"
import {Grid} from "@mui/material";
import Swal from "sweetalert2";

export default function MathsActivityTwo() {

    const correctAnswer = 5;
    let Student_ID = localStorage.getItem("std_id");
    const [givenAnswer, setGivenAnswer] = useState(0);
    const [Disabled, setDisabled] = useState(false);
    const [answerOneSelected, setAnswerOneSelected] = useState(false);
    const [answerTwoSelected, setAnswerTwoSelected] = useState(false);
    const [answerThreeSelected, setAnswerThreeSelected] = useState(false);

    const [marks, setMarks] =useState(0);
    const [hightesMarks, setHightesMarks] =useState(0);

    let Subject_Name = "Maths"
    let Activity_Name = "Activity 2 - Subtraction"

    const handleClick = (answerNo, value) => event => {
        setGivenAnswer(value);
        if (answerNo === 1) {
            setAnswerOneSelected(true);
            setAnswerTwoSelected(false);
            setAnswerThreeSelected(false);
        } else if (answerNo === 2) {
            setAnswerOneSelected(false);
            setAnswerTwoSelected(true);
            setAnswerThreeSelected(false);
        } else {
            setAnswerOneSelected(false);
            setAnswerTwoSelected(false);
            setAnswerThreeSelected(true);
        }
    }

    const isAllreadSubmit = async () => {

        let url = "http://localhost:8070/student/get_activity"
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Student_ID,
                Subject_Name,
                Activity_Name,
            }),
        })

        const getData = await response.json()
        console.log(getData)

        if(getData.status){
            console.log("change marks")
            console.log(getData.data.Mark)
            setMarks(getData.data.Mark)
            setHightesMarks(getData.data.Highest_Marks)
            setDisabled(true);
        }else{
            console.log("change marks not works")
            setDisabled(false);
        }


    }
    const handleSubmit = () => {
        if (givenAnswer === 0) {
            Swal.fire(
                'Answer is Missing',
                "Select an answer before select",
                'warning'
            ).then( async () => {

                let Subject_Name = "Maths"
                let Activity_Name = "Activity 2 - Subtraction"

                let Marks = 0;
                let Highest_Marks = correctAnswer
                let Submit_Date = new Date().toISOString().split("T")[0]

                let url = "http://localhost:8070/student/submit_activity"
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Student_ID,
                        Submit_Date,
                        Subject_Name,
                        Activity_Name,
                        Highest_Marks,
                        Marks
                    }),
                })
                const res = await response.json()

                console.log(res)

            })
        } else if (correctAnswer === givenAnswer) {
            Swal.fire(
                'Congratulations',
                "You entered the correct answer",
                'success'
            ).then(async r => {


                let Marks = 5;
                let Highest_Marks = correctAnswer
                let Submit_Date = new Date().toISOString().split("T")[0]

                let url = "http://localhost:8070/student/submit_activity"
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Student_ID,
                        Submit_Date,
                        Subject_Name,
                        Activity_Name,
                        Highest_Marks,
                        Marks
                    }),
                })
                const res = await response.json()

                console.log(res)


            })
        } else {
            Swal.fire(
                'Incorrect Answer',
                "Entered answer is incorrect",
                'error'
            ).then(async r => {



                let Marks = 0;
                let Highest_Marks = correctAnswer
                let Submit_Date = new Date().toISOString().split("T")[0]

                let url = "http://localhost:8070/student/submit_activity"
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Student_ID,
                        Submit_Date,
                        Subject_Name,
                        Activity_Name,
                        Highest_Marks,
                        Marks
                    }),
                })
                const res = await response.json()

                console.log(res)

            })
        }
    }

    return (
        <>
            <div className="maths-activity" onLoad={isAllreadSubmit}>
                <h4>Addition</h4>
                <Grid className="maths-activity-question-section" container spacing={2}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8}>
                        <div className="maths-activity-question">5</div>
                        <div className="maths-activity-question">-</div>
                        <div className="maths-activity-question">3</div>
                        <div className="maths-activity-question">?</div>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={2}>
                        <div
                            className={answerOneSelected ? "maths-activity-answer maths-activity-answer-selected" : "maths-activity-answer"}
                            onClick={handleClick(1, 5)}>5
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div
                            className={answerTwoSelected ? "maths-activity-answer maths-activity-answer-selected" : "maths-activity-answer"}
                            onClick={handleClick(2, 4)}>4
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div
                            className={answerThreeSelected ? "maths-activity-answer maths-activity-answer-selected" : "maths-activity-answer"}
                            onClick={handleClick(3, 2)}>2
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
                <button type="button" onClick={handleSubmit} className="activity-button" disabled={Disabled}>Submit</button>
            </div>
        </>

    );

}