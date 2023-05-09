import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
import {Button, Card, Container, Grid, Input, Spacer, Text} from "@nextui-org/react";
import LPNavbar from "./LPNavbar";
import AddWorkout from "../Users/workoutTracking/AddWorkout";
import Login from "../Login/Login";
import WorkoutDashboard from "../Users/workoutTracking/WorkoutDashboard";
import UpcomingClassCard from "../Users/Classes/UpcomingClassCard";
import EnrollClass from "../Users/Classes/EnrollClass/EnrollClass";
import Footer from "../Footer/Footer";
import CarouselPage from "./CarouselPage";

const LandingPage = (props)=>{const navigate = useNavigate();

    return <>

        <LPNavbar/>

        <Grid.Container>
            <Grid.Container gap={2}>
                <Grid xs={12} justify="center"><Text h2 color="success"> You're at the right place to get FIT!</Text></Grid>
            </Grid.Container>
            <Grid.Container gap={2}>
                <Grid xs={8}>
                    <Card isHoverable variant="bordered">
                        <Card.Body>
                            <Grid.Container>
                                <Grid xs={12} justify="center">
                                    <Text h3>ACME Fitness</Text>
                                </Grid>
                                <Grid xs={12} justify="center">
                                    <Text h4 color="success">Welcome to the ACME Fitness.</Text>
                                </Grid>
                                <Grid xs={12} justify="center">
                                    <Text h4 color="success">World class Gym facilities</Text>
                                </Grid>
                                <Grid xs={12} justify="center">
                                    <Text h4 color="success">Certified professionals</Text>
                                </Grid>
                                <Grid xs={12} justify="center">
                                    <Text h4 color="success">Classes on Yoga, Aerobics, Zumba dance and many more</Text>
                                </Grid>
                                <Grid xs={12} justify="center">
                                    <Text h4 color="success">Join our free trail today!!!</Text>
                                </Grid>
                            </Grid.Container>
                        </Card.Body>
                    </Card>
                    <Grid xs={6}>
                        <Grid.Container>
                            {/*<Grid xs={12} justify="center">*/}
                            {/*</Grid>*/}
                            <Grid xs={12} justify="center">
                                {/*<Text h4 color="success">Join our free trail today!!!</Text>*/}
                                {/*<CarouselPage/>*/}
                            </Grid>
                            {/*<UpcomingClassCard/>*/}
                        </Grid.Container>

                    </Grid>


                </Grid>
                <Grid xs={4}>
                    <Login/>
                </Grid>

            </Grid.Container>
            <Grid.Container gap={2}>
                <Grid xs={12} justify="center"><Text h2 color="success"> Available Classes</Text></Grid>


                {/*<Grid xs={12} justify="center"><EnrollClass/></Grid>*/}


            </Grid.Container>

        </Grid.Container>
        <Footer/>

    </>
}
export default LandingPage