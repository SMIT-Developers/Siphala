import React, {useState} from "react";
import "../Activities.css"
import gira from "../../../../Assets/Puzzel/Animal/1.jpg";
import ele from "../../../../Assets/Puzzel/Animal/5.jpg";
import bear from "../../../../Assets/Puzzel/Animal/3.jpg";
import lion from "../../../../Assets/Puzzel/Animal/6.jpg";
import Swal from "sweetalert2";


export default function EnglishActivityTwo() {

    let Student_ID = localStorage.getItem("std_id");

    const [disabled, setDisabled] = useState(false);
    const [marks, setMarks] =useState(0);
    const [hightesMarks, setHightesMarks] =useState(0);


    let Subject_Name = "English"
    let Activity_Name= "Activity 2 -Animals"

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
            image: gira,
            letters: [
                {index: 0, visible: true, letter: "G"},
                {index: 1, visible: false, letter: "I"},
                {index: 2, visible: false, letter: "R"},
                {index: 3, visible: false, letter: "A"},
                {index: 4, visible: true, letter: "F"},
                {index: 5, visible: false, letter: "F"},
                {index: 6, visible: true, letter: "E"}
            ],
            totalCount: 4,
            results: [0, 0, 0, 0, 0, 0, 0]
        },
        {
            id: 2,
            image: bear,
            letters: [
                {index: 0, visible: true, letter: "B"},
                {index: 1, visible: false, letter: "E"},
                {index: 2, visible: false, letter: "A"},
                {index: 3, visible: false, letter: "R"}
            ],
            totalCount: 4,
            results: [0, 0, 0, 0]
        },
        {
            id: 3,
            image: ele,
            letters: [
                {index: 0, visible: true, letter: "E"},
                {index: 1, visible: false, letter: "L"},
                {index: 2, visible: false, letter: "E"},
                {index: 3, visible: false, letter: "P"},
                {index: 4, visible: false, letter: "H"},
                {index: 5, visible: true, letter: "A"},
                {index: 6, visible: false, letter: "N"},
                {index: 7, visible: false, letter: "T"}
            ],
            totalCount: 4,
            results: [0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
            id: 4,
            image: lion,
            letters: [
                {index: 0, visible: false, letter: "L"},
                {index: 1, visible: false, letter: "I"},
                {index: 2, visible: false, letter: "O"},
                {index: 3, visible: true, letter: "N"}
            ],
            totalCount: 4,
            results: [0, 0, 0, 0]
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

                let Highest_Marks= 100
                let Mark = Math.round((earnedMarks/totalMarks)*100)


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