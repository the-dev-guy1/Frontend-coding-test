import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ExcelUpload from './components/ExcelUpload';
import AttendanceList from './components/AttendanceList';
import DuplicateFinder from './components/DuplicateFinder';
import './styles.css'; // Import the CSS file
import FileGroupList from './components/FileGroupList';

const App = () => {
    return ( < Router >
        <
        div >
        <
        nav >
        <
        ul >
        <
        li > < Link to = "/" > Home < /Link></li >
        <
        li > < Link to = "/excel-upload" > Upload Excel < /Link></li >
        <
        li > < Link to = "/attendance-list" > Attendance List < /Link></li >
        <
        li > < Link to = "/duplicate-finder" > Duplicate Finder < /Link></li >
        <
        li > < Link to = "/file-group-by-owner" > File Group By Owner < /Link></li >
        <
        /ul> </nav >

        <
        Switch >
        <
        Route path = "/excel-upload"
        component = { ExcelUpload }
        /> <
        Route path = "/attendance-list"
        component = { AttendanceList }
        /> <
        Route path = "/duplicate-finder"
        component = { DuplicateFinder }
        /> <
        Route path = "/file-group-by-owner"
        component = { FileGroupList }
        />

        <
        Route path = "/
        "
        exact >
        <
        div >
        <
        h2 > Home < /h2></div > < /Route> </
        Switch > < /div> </
        Router >
    );
};

export default App;