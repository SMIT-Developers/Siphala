import React, {useState} from "react";
import Swal from "sweetalert2";
import sun from "../../../../Assets/Puzzel/Environmental/1.png"
import cloud from "../../../../Assets/Puzzel/Environmental/2.png"
import bird from "../../../../Assets/Puzzel/Environmental/3.png"
import rainbow from "../../../../Assets/Puzzel/Environmental/4.png"
import kite from "../../../../Assets/Puzzel/Environmental/5.png"
import "../Activities.css"


export default function EnvironmentalActivityOne() {

    const [disabled, setDisabled] = useState(false);
    const [marks, setMarks] =useState(0);
    const [hightesMarks, setHightesMarks] =useState(0);
    let Student_ID = localStorage.getItem("std_id");

    let Subject_Name = "Environmental Studies"
    let Activity_Name= "Activity 1 - Welcome to Environment"

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
            // console.log("change marks")
            // console.log(getData.data.Mark)
            setMarks(getData.data.Mark)
            setHightesMarks(getData.data.Highest_Marks)
            setDisabled(true);
        }else{
            setDisabled(false);
        }


    }

    const words = [
        {
            id: 1,
            image: sun,
            letters: [
                {index: 0, visible: false, letter: "S"},
                {index: 1, visible: true, letter: "U"},
                {index: 2, visible: false, letter: "N"}
            ],
            totalCount: 1,
            results: [0, 0, 0]
        },
        {
            id: 2,
            image: cloud,
            letters: [
                {index: 0, visible: true, letter: "C"},
                {index: 1, visible: false, letter: "L"},
                {index: 2, visible: false, letter: "O"},
                {index: 3, visible: true, letter: "U"},
                {index: 4, visible: false, letter: "D"},
                {index: 5, visible: true, letter: "S"}
            ],
            totalCount: 3,
            results: [0, 0, 0, 0, 0, 0]
        },
        {
            id: 3,
            image: bird,
            letters: [
                {index: 0, visible: false, letter: "B"},
                {index: 1, visible: false, letter: "I"},
                {index: 2, visible: false, letter: "R"},
                {index: 3, visible: false, letter: "D"},
                {index: 4, visible: false, letter: "S"}
            ],
            totalCount: 5,
            results: [0, 0, 0, 0, 0]
        },
        {
            id: 4,
            image: kite,
            letters: [
                {index: 0, visible: true, letter: "K"},
                {index: 1, visible: false, letter: "I"},
                {index: 2, visible: false, letter: "T"},
                {index: 3, visible: true, letter: "E"}
            ],
            totalCount: 2,
            results: [0, 0, 0, 0]
        },
        {
            id: 5,
            image: rainbow,
            letters: [
                {index: 0, visible: true, letter: "R"},
                {index: 1, visible: false, letter: "A"},
                {index: 2, visible: false, letter: "I"},
                {index: 3, visible: true, letter: "N"},
                {index: 4, visible: false, letter: "B"},
                {index: 5, visible: false, letter: "O"},
                {index: 6, visible: true, letter: "W"},
            ],
            totalCount: 4,
            results: [0, 0, 0, 0, 0, 0, 0]
        },
    ];

    const handleChange = (l, results) => event => {
        let newLetter = event.target.value.toUpperCase();
        if (!l.visible) {
            if (l.letter === newLetter) {
                results[l.index] = 1;
            } else {
                results[l.index] = 0;
            }
        }
    }

    const submitPuzzle = () => {

        Swal.fire({
            title: 'Do you want to submit your answers?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then(async (result) => {
            if (result.isConfirmed) {

                setDisabled(true);

                let totalMarks = 0;
                let earnedMarks = 0;
                for (let i = 0; i < words.length; i++) {
                    let word = words[i];
                    totalMarks += word.totalCount;
                    for (let j = 0; j < word.results.length; j++) {
                        earnedMarks += word.results[j];
                    }
                }

                //send marks to database
                let Submit_Date = new Date().toISOString().split("T")[0]

                let Highest_Marks = 100
                let Mark = Math.round((earnedMarks / totalMarks) * 100)


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
                        Mark
                    }),
                })
                const res = await response.json()

                console.log(res)


                Swal.fire('Your answers are saved!', '', 'success')
            }
        })

    }

    return (
        <>
            <div className="disabled inline-gride" onLoad={isAllreadSubmit}>
                {
                    words.map(word => (
                        <div className="first-puzzle">
                            <img src={word.image} alt=""/>
                            <div className="sub-input">
                                {
                                    word.letters.map(l => (
                                        l.visible ?
                                            <input type="text"
                                                   className={disabled ? "input-jira disabled-color" : "input-jira"}
                                                   value={l.letter} readOnly={true}/>
                                            : <input type="text"
                                                     className={disabled ? "input-jira disabled-color" : "input-jira"}
                                                     maxLength="1"
                                                     onChange={handleChange(l, word.results)} readOnly={disabled}/>
                                    ))
                                }
                            </div>

                        </div>

                    ))
                }

            </div>
            <button type="button" onClick={submitPuzzle} className="activity-button" disabled={disabled}>Submit</button>
        </>

    );

}