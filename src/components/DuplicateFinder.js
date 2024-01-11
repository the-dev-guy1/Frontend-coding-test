import React, { useState } from 'react';
import axios from 'axios';

const DuplicateFinder = () => {
    const [N, setN] = useState(0);
    const [array, setArray] = useState([]);
    const [duplicates, setDuplicates] = useState([]);

    const handleFindDuplicates = () => {
        axios.get('http://localhost:8000/api/find-duplicates', { params: { N, a: array } })
            .then(response => setDuplicates(response.data.duplicates))
            .catch(error => console.error(error));
    };

    return ( <
        div >
        <
        h2 > Duplicate Finder < /h2> <
        label >
        Enter N:
        <
        input type = "number"
        value = { N }
        onChange = {
            (e) => setN(e.target.value)
        }
        /> < /
        label > <
        br / >
        <
        label >
        Enter array(comma - separated):
        <
        input type = "text"
        value = { array }
        onChange = {
            (e) => setArray(e.target.value.split(',').map(Number))
        }
        /> < /
        label > <
        br / >
        <
        button onClick = { handleFindDuplicates } > Find Duplicates < /button> <
        br / >
        <
        div >
        <
        strong > Duplicates: < /strong> {duplicates.join(' ')} < /
        div > <
        /div>
    );
};

export default DuplicateFinder;