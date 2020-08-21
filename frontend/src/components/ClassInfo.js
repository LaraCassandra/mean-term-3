import React, { useEffect, useState } from 'react';
import '../App.css';

// REACT ROUTER DOM
import { Link } from 'react-router-dom';

// MATERIAL UI
import { Paper } from '@material-ui/core'

function ClassInfo({ match }) {

    useEffect(() => {
        fetchInfo();
        console.log(match)
    }, []);

    const [info, setInfo] = useState([]);
    const [slot, setSlot] = useState([]);

    const fetchInfo = async () => {
        const fetchInfo = await fetch(`http://localhost:8000/api/classes/${match.params.id}/details`);
        const info = await fetchInfo.json();
        setInfo(info);
        setSlot(info.timeSlot);
    };

    return (
        <div className="info-body">

            <Paper className="info-box">

                <h1 className="class-heading">Subject:</h1>
                <label className="class-info">{info.classSubject}</label>

                <h1 className="class-heading">Teacher:</h1>
                <label className="class-info">{info.teacherName}</label>

                <h1 className="class-heading">Classroom:</h1>
                <label className="class-info">{info.classNumber}</label>

                <h1 className="class-heading">Students:</h1>
                <label className="class-info">{info.classStudents}</label>

                <div className="button edit"><Link to="/classes/edit">Edit</Link></div>

            </Paper>

            {/* TODO: GET SLOTS */}

            {/* {slot.map((slot, slotid) => {
                
                return (
                    <div key={slotid}>
                        {slot.day}
                    </div>
                )
            })} */}

        </div>
    )
}

export default ClassInfo;