import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import { Paper } from '@material-ui/core'

function Classes() {

    useEffect(() => {
        fetchClasses();
    }, []);

    const [classes, setClasses] = useState([]);

    const fetchClasses = async () => {
        const data = await fetch('http://localhost:8000/api/classes');
        const classes = await data.json();
        console.log(classes)
        setClasses(classes);
    }

    return (

        <div className="classBody">

            <label className="label">Showing all Classes</label>

            <Paper className="tableBody">

                <table>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Classroom</th>
                            <th>Slot</th>
                        </tr>
                    </thead>
                </table>
                <table>
                    <tbody>
                        {classes.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <Link to={`/classes/${item.id}`}>{item.subject}</Link>
                                </td>
                                <td>
                                    {item.classroom}
                                </td>
                                <td>
                                    {item.slot}
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </Paper>
        </div>
    )
}



export default Classes;