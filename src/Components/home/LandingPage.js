import {Button, Grid, Link, Navbar, Text} from "@nextui-org/react";
import {AcmeLogo} from "../Users/Navbar/Logo";
import logo from '../../images/landing_page.jpg'
import ClassInfo from "../Employee/viewClasses/ClassInfo";
import LandingPageClassInfo from "../Landing/LandingPageClassInfo";
import React from "react";
import Memberships from "../Landing/Memberships";
import AboutUs from "../Landing/AboutUs";

import FadeIn from 'react-fade-in';

const LandingPage = ()=>{



    return <>

        <Navbar isBordered variant="sticky">
            <Navbar.Brand>
                <AcmeLogo />
                <Text b color="inherit" hideIn="xs">
                    ACME Fitness
                </Text>
            </Navbar.Brand>

            <Navbar.Content>
                <Navbar.Link color="inherit" href="/login">
                    Sign In
                </Navbar.Link>
            </Navbar.Content>
        </Navbar>


        <Grid.Container gap={5}>
            <Grid xs={6} >
                <div style={{display: "flex",
                    justifyContent: "center",
                    alignItems: "center",marginLeft:"15%"}}>
                    <FadeIn delay={300} transitionDuration={2000}>
                        <Text h1 size={80}
                              css={{
                                  textGradient: "45deg, $yellow600 -20%, $red600 100%",
                              }}
                              weight="bold"> <center>What powers us changes our world.</center></Text>
                    </FadeIn>
                </div>


            </Grid>
            <Grid xs={6} justify={"right"}>
                <img src={logo} style={{maxWidth:"100vw",height:"100vh",borderRadius:'10%'}} alt="logo" />
            </Grid>


            <Grid xs={12}>
                <LandingPageClassInfo/>
            </Grid>

            <Grid xs={12}>
                <Memberships/>
            </Grid>

            <Grid xs={12}>
                <AboutUs/>
            </Grid>


            {/*<Grid xs={12} style={{position: "fixed",bottom:"0"}}>*/}
            {/*    <center>All rights reserved.</center>*/}
            {/*</Grid>*/}

        </Grid.Container>


    </>




}


export default LandingPage
