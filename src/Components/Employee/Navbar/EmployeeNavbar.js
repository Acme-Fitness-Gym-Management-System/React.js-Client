import {Button, Link, Navbar, Text} from "@nextui-org/react";
import {AcmeLogo} from "./Logo";
import { useNavigate } from "react-router-dom";


function EmployeeNavbar(props){

    const s = "hello "+props.name
    const navigate = useNavigate();

const signOutHandler = ()=>{
    console.log("logging out, bye!!!");
    sessionStorage.clear();

    navigate("/employee");
}

    return <Navbar isBordered variant="floating">
        <Navbar.Brand>
            <AcmeLogo/>
            <Text b color="inherit" hideIn="xs">
                ACME Fitness
            </Text>
        </Navbar.Brand>

        <Navbar.Content hideIn="xs" variant="highlight-rounded">
            <Navbar.Link href="/employee">Analytics</Navbar.Link>

        </Navbar.Content>

        <Navbar.Content>
            <Navbar.Item color="inherit" href="#">
                {s}
            </Navbar.Item>
            <Navbar.Item>
                {/*handle sign out todo*/}
                <Button auto flat onClick={signOutHandler}>
                    Sign Out
                </Button>
            </Navbar.Item>
        </Navbar.Content>
    </Navbar>
}


export default EmployeeNavbar
