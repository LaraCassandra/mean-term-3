import React, { Fragment, useEffect, useState } from 'react';
import '../App.css'

export const Classes = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/classes')
            .then((res) => res.json())
            .then((data) => {
                setClasses(data);
            })
            .catch((err) => {
                console.log(`Fetch failed: ${err}`)
            });
    }, [])


    return (
        <Fragment>
            <h1>Classes</h1>
            <div className="myTable">

                <table >
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Classroom</th>
                            <th>Slot</th>
                        </tr>
                    </thead>
                </table>

                {classes.length
                    ? classes.map((s, index) => {
                        return (
                            <table key={index}>
                                <tbody >
                                    <tr>
                                        <td>{s.subject}</td>
                                        <td>{s.classroom}</td>
                                        <td>{s.slot}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    })
                    : "No classes available"}
            </div>
        </Fragment>
    )

}

export default Classes;