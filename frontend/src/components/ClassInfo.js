import React, { useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'

export const ClassInfo = () => {

    var { id } = useParams();

    const [info, setInfo] = useState({});

    fetch('http://localhost:8000/api/classes' + id + 'details', {
        method: 'POST',
    })
        .then((res) => res.json())
        .then((data) => {
            setInfo(data);
        })
        .catch((err) => {
            console.log(`Fetch failed: ${err}`)
        });


    return (
        <Fragment>

            <h1>{info.teacher}</h1>

        </Fragment>
    )

}

export default ClassInfo;