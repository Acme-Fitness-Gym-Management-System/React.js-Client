import {Button, Link, Navbar, Text} from "@nextui-org/react";
// import {AcmeLogo} from "./Logo";



function Footer(){

    const s = "Hello Gymson!";



    return <Navbar isBordered variant="floating">
        <Navbar.Brand>
            <Text b color="inherit" hideIn="xs">
                Contact us on gym@gmail.com
            </Text>
        </Navbar.Brand>

        <Navbar.Content hideIn="xs" variant="highlight-rounded">
            <Text b color="inherit" hideIn="xs">
                Copy rights reserved
            </Text>

        </Navbar.Content>

        <Navbar.Content>
            <Navbar.Item color="inherit" href="#">
                <Text b color="inherit" hideIn="xs">
                    Developed by
                    Raviraj, Chiruhas, Jaswanth, Priyanka
                </Text>
            </Navbar.Item>
        </Navbar.Content>
    </Navbar>
}


export default Footer
