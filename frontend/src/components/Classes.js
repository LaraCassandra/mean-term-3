import React, { Fragment, useEffect, useState } from 'react';


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
            {classes.length
                ? classes.map((s, index) => {
                    return (
                        <div key={index}>
                            <h1>{s.subject}</h1>
                            <h1> Classroom: {s.classroom}</h1>
                        </div>
                    )
                })
                : "No classes available"}
        </Fragment>
    )

}

export default Classes;