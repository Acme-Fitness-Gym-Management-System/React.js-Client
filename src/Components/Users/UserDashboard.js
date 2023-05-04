import {Card, Grid, Spacer, Text} from "@nextui-org/react";
import CustomerNavbar from "./Navbar/CustomerNavbar";
import AddWorkout from "./workoutTracking/AddWorkout";
import React, {useEffect, useState} from "react";
import WorkoutDashboard from "./workoutTracking/WorkoutDashboard";
import UpcomingClassCard from "./Classes/UpcomingClassCard";
import ConsolidatedActivity from "./ConsolidatedWorkoutActivity/ConsolidatedActivity";
import axios from "axios";
import EnrollClass from "./Classes/EnrollClass/EnrollClass";


const UserDashboard = () => {

    //todo revert
    // const user = JSON.parse(sessionStorage.user)
    //
    // // fetch customer name
    // const customerName = user.name

    const customerName="chiruhas"

    const [activityData, setActivityData] = useState({})

    // fetching activity data
    const getData = async () => {
        //todo
        /**
         *
         *
         * [jan:[0:80,1:90,2:0,.......]......]
         *
         *
         */

        const { data } = await axios.get(`http://0.0.0.0:8080/getActivityData`);
        setActivityData(data);
    };
    useEffect(() => {
        getData();
    }, []);






    return <>
        {/*todo*/}

        <CustomerNavbar name="Chiruhas Bobbadi"/>


        <Grid.Container>
            <Grid.Container gap={2}>
                <Grid xs={12} justify="center"><Text h2> Welcome back, {customerName}!</Text></Grid>
                <Grid xs={8}>
                    <Card isHoverable variant="bordered">
                        <Card.Body>
                            <Grid.Container>
                                <Grid xs={12} justify="center">
                                    <Text h3>Your Dashboard</Text>
                                </Grid>
                                <Grid xs={6} justify="center">
                                    <WorkoutDashboard/>
                                </Grid>
                                <Grid xs={6}>
                                    <Grid.Container>
                                        <Grid xs={12} justify="center">
                                            <Text h4>Upcoming Classes</Text>
                                        </Grid>

                                            <UpcomingClassCard/>

                                    </Grid.Container>

                                </Grid>

                            </Grid.Container>

                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <AddWorkout/>
                </Grid>
            </Grid.Container>
            <Grid.Container>
                <Grid xs={12} justify="center">
                    <Text h2> Consolidated Workout Activity.</Text>
                </Grid>
                <Grid xs={9} justify="center">
                </Grid>
                <Grid xs={3} justify="center">

                    <Grid xs={4} justify="center">
                        <Card variant="bordered" css={{mw: "40px", mh: "40px", backgroundColor: "#AFE1AF"}}>
                            <Spacer y={1}/>
                        </Card>
                    </Grid>
                    <Grid xs={4} justify="center">
                        <Card variant="bordered" css={{mw: "40px", mh: "40px", backgroundColor: "#50C878"}}>
                        </Card>
                    </Grid>
                    <Grid xs={4} justify="center">
                        <Card variant="bordered" css={{mw: "40px", mh: "40px", backgroundColor: "#4F7942"}}>
                        </Card>
                    </Grid>


                </Grid>
                <Grid xs={9} justify="center">
                </Grid>
                <Grid xs={3} justify="center">

                    <Grid xs={4} justify="center">
                        <Text h6>15-30</Text>
                    </Grid>
                    <Grid xs={4} justify="center">
                        <Text h6>30-60</Text>
                    </Grid>
                    <Grid xs={4} justify="center">
                        <Text h6>60+</Text>
                    </Grid>


                </Grid>

                <Grid.Container gap={2}>
                    <Grid xs={12} justify="center">
                        <Card isHoverable variant="bordered">
                            <Card.Body>
                                <Grid.Container>
                                    <Grid xs={1} justify="center">
                                        <Grid.Container>
                                            <Grid xs={12}>
                                                <Text h5>January</Text>
                                            </Grid>
                                            {/*todo*/}
                                            {/*pass data here of corresponding month*/}
                                            {/*todo replicate this process for the remaining monts.*/}

                                            {/*<ConsolidatedActivity data={activityData.january}/>*/}


                                        </Grid.Container>


                                    </Grid>
                                    <Grid xs={1} justify="center">

                                        <Grid.Container>
                                            <Grid xs={12}>
                                                <Text h5>February</Text>
                                            </Grid>

                                            {/*<ConsolidatedActivity />*/}

                                        </Grid.Container>

                                    </Grid>
                                    <Grid xs={1} justify="center"><Text h5>March</Text></Grid>
                                    <Grid xs={1} justify="center"><Text h5>April</Text></Grid>
                                    <Grid xs={1} justify="center"><Text h5>May</Text></Grid>
                                    <Grid xs={1} justify="center"><Text h5>June</Text></Grid>
                                    <Grid xs={1} justify="center"><Text h5>July</Text></Grid>
                                    <Grid xs={1} justify="center"><Text h5>August</Text></Grid>
                                    <Grid xs={1} justify="center"><Text h5>September</Text></Grid>
                                    <Grid xs={1} justify="center"><Text h5>October</Text></Grid>
                                    <Grid xs={1} justify="center"><Text h5>November</Text></Grid>
                                    <Grid xs={1} justify="center"><Text h5>December</Text></Grid>
                                </Grid.Container>

                            </Card.Body>
                        </Card>
                    </Grid>
                </Grid.Container>


            </Grid.Container>
            <Grid.Container gap={2}>
                <Grid xs={12} justify="center"><Text h2> Enroll Classes</Text></Grid>


                <Grid xs={12} justify="center"><EnrollClass /></Grid>



            </Grid.Container>

        </Grid.Container>


    </>


}


export default UserDashboard;
