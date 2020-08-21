import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

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
        <div>
            {classes.map(item => (
                <h1 key={item.id}>
                    <Link to={`/classes/${item.id}`}>{item.subject}</Link>
                </h1>
            ))}
        </div>
    )
}



export default Classes;