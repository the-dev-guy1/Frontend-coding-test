import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileGroupList = () => {
    const [fileGroups, setFileGroups] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        try {
            const response = await axios.get('http://localhost:8000/api/group-by-owners');
            setFileGroups(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return ( <
        div >
        <
        h2 > File Groups < /h2> <
        ul > {
            Object.keys(fileGroups).map((companyName) => ( <
                li key = { companyName } >
                <
                strong > { companyName } < /strong> <
                ul > {
                    fileGroups[companyName].map((fileName) => ( <
                        li key = { fileName } > { fileName } < /li>
                    ))
                } <
                /ul> < /
                li >
            ))
        } <
        /ul> < /
        div >
    );
};

export default FileGroupList;