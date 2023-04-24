import EmployeeNavbar from "../Navbar/EmployeeNavbar";
import {Button, Card, Dropdown, Grid, Spacer, Text} from "@nextui-org/react";
import React, {useRef} from "react";
 import { Checkbox, Input, Modal, Row} from "@nextui-org/react";
import CreateClassModal from "./Modal/Class/CreateClassModal";

const ClassManagement = () => {



    // Implementing a concept of calling a child function from a parent.
    const addClass = useRef();
    return <>

        <Grid.Container justify="center">
            <Grid xs={12}>
                <Text h2>Class Management</Text>
            </Grid>
            <Grid xs={12}>
                <Card >
                    <Card.Body>
                       {/*calling a child function from parent*/}
                        <Button onClick={()=>addClass.current.showModal()}> Create Class </Button>
                        <Spacer y={1}/>
                        <Button > Update Class </Button>
                        <Spacer y={1}/>
                        <Button > Delete Class </Button>
                    </Card.Body>
                </Card>
            </Grid>

        </Grid.Container>

        <CreateClassModal ref={addClass} />

    </>


}


export default ClassManagement;
