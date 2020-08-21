import React, { useEffect, useState } from 'react';
import '../App.css';

function ClassInfo({ match }) {

    useEffect(() => {
        fetchInfo();
        console.log(match)
    }, []);

    const [info, setInfo] = useState([]);

    const fetchInfo = async () => {
        const fetchInfo = await fetch(`http://localhost:8000/api/classes/${match.params.id}/details`);
        const info = await fetchInfo.json();

        console.log(info);
        setInfo(info);
    };

    return (
        <div>
            <h1>{info.classSubject}</h1>
        </div>
    )
}

export default ClassInfo;