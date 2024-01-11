import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AttendanceList = () => {
    const [attendanceData, setAttendanceData] = useState([]);

    useEffect(() => {
        // Fetch attendance data from the API endpoint
        axios.get('http://localhost:8000/api/attendance')
            .then(response => setAttendanceData(response.data.data))
            .catch(error => console.error(error));
    }, []);

    return ( <
        div >
        <
        h2 > Employee Attendance < /h2> <
        table border = { 1 }
        cellPadding = { 10 } >
        <
        thead >
        <
        tr >
        <
        th > Name < /th> <
        th > Checkin < /th> <
        th > Checkout < /th> <
        th > Total Working Hours < /th> < /
        tr > <
        /thead> <
        tbody > {
            attendanceData.map(employee => ( <
                tr key = { employee.first_name + employee.last_name } >
                <
                td > { employee.first_name } { employee.last_name } < /td> <
                td > { employee.checkin || 'N/A' } < /td> <
                td > { employee.checkout || 'N/A' } < /td> <
                td > { employee.working_hours } < /td> < /
                tr >
            ))
        } <
        /tbody> < /
        table > <
        /div>
    );
};

export default AttendanceList;