import {Card, Grid, Spacer, Text} from "@nextui-org/react";
import EmployeeNavbar from "./Navbar/EmployeeNavbar";
import Analytics from "./Sections/analytics/Analytics";
import ClassManagement from "./Sections/ClassManagement";
import UserManagement from "./Sections/UserManagement";
import ClassInfo from "./viewClasses/ClassInfo";
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import WeeklyDayVsClassesLine from "./Sections/analytics/Graphs/WeeklyDayVsClassesLine";
import ClassesVsUsers from "./Sections/analytics/Graphs/ClassesVsUsers";
import HoursSpentByWeekType from "./Sections/analytics/Graphs/HoursSpentByWeekType";
import MostVisitedDayHeatMap from "./Sections/analytics/Graphs/HeatMap/MostVisitedDayHeatMap";

const EmployeeDashboard = () => {

    const navigate = useNavigate();

    let employee  = sessionStorage.employee
    console.log(employee);
    if(employee === 'undefined'){
        navigate("/login");
    }
    employee = JSON.parse(employee)


    return <>
        {/*todo*/}
        {/*Fetch user name and pass it down as prop.*/}
        <EmployeeNavbar name={employee.name} isActive='analytics'/>


        <Analytics/>




        <Grid.Container gap={2}>

            <Grid xs={6}>
                <WeeklyDayVsClassesLine/>
            </Grid>
            <Grid xs={6}>
                <ClassesVsUsers/>

            </Grid>
            <Grid xs={12}>
                <HoursSpentByWeekType/>
            </Grid>
            <Grid xs={12}>

                <MostVisitedDayHeatMap/>


            </Grid>
            <Grid xs={3}></Grid>
            <Grid xs={3}><ClassManagement/></Grid>
            <Grid xs={3}><UserManagement/></Grid>
            <Grid xs={3}></Grid>

        </Grid.Container>

        <ClassInfo />



    </>


}


export default EmployeeDashboard;
