import {Button, Link, Navbar, Text} from "@nextui-org/react";
import {AcmeLogo} from "./Logo";



function CustomerNavbar(props){

    const s = "hello "+props.name



    return <Navbar isBordered variant="floating">
        <Navbar.Brand>
            <AcmeLogo/>
            <Text b color="inherit" hideIn="xs">
                ACME Fitness
            </Text>
        </Navbar.Brand>

        <Navbar.Content hideIn="xs" variant="highlight-rounded">
            {/*<Navbar.Link href="/employee/analytics">Analytics</Navbar.Link>*/}
            {/*<Navbar.Link href="/employee/class">Class Management</Navbar.Link>*/}
            {/*<Navbar.Link href="/employee/user">User Management</Navbar.Link>`*/}

        </Navbar.Content>

        <Navbar.Content>
            <Navbar.Item color="inherit" href="#">
                {s}
            </Navbar.Item>
            <Navbar.Item>
                {/*handle sign out todo*/}
                <Button auto flat as={Link} href="/home">
                    Sign Out
                </Button>
            </Navbar.Item>
        </Navbar.Content>
    </Navbar>
}


export default CustomerNavbar
