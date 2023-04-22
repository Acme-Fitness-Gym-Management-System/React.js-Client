import {Card, Grid, Spacer, Text} from "@nextui-org/react";
import EmployeeNavbar from "../Navbar/EmployeeNavbar";
import Analytics from "./Analytics";
import ClassManagement from "./ClassManagement";
import UserManagement from "./UserManagement";


const Employee = () => {
    return <>
        {/*todo*/}
        {/*Fetch user name and pass it down as prop.*/}
        <EmployeeNavbar name="chiruhas" isActive='analytics'/>


        <Analytics/>


        <Grid.Container gap={2}>
            <Grid xs={3}></Grid>
            <Grid xs={3}><ClassManagement/></Grid>
            <Grid xs={3}><UserManagement/></Grid>
            <Grid xs={3}></Grid>

        </Grid.Container>



    </>


}


export default Employee;
