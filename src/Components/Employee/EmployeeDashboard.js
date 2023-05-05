import {Card, Grid, Spacer, Text} from "@nextui-org/react";
import EmployeeNavbar from "./Navbar/EmployeeNavbar";
import Analytics from "./Sections/Analytics";
import ClassManagement from "./Sections/ClassManagement";
import UserManagement from "./Sections/UserManagement";
import ClassInfo from "./viewClasses/ClassInfo";
import {useNavigate} from "react-router-dom";




const EmployeeDashboard = () => {

    const navigate = useNavigate();
    let employee  = sessionStorage.employee
    console.log(employee);

    if(!employee){
        console.log("inside");
        navigate("/login");
    }

    console.log("hi ");

    employee = JSON.parse(employee)

    return <>
        {/*todo*/}
        {/*Fetch user name and pass it down as prop.*/}
        <EmployeeNavbar name={employee.name} isActive='analytics'/>


        <Analytics/>


        <Grid.Container gap={2}>
            <Grid xs={3}></Grid>
            <Grid xs={3}><ClassManagement/></Grid>
            <Grid xs={3}><UserManagement/></Grid>
            <Grid xs={3}></Grid>

        </Grid.Container>

        <ClassInfo/>



    </>


}


export default EmployeeDashboard;
