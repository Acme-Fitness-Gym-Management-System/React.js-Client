import {Card, Grid, Spacer, Text} from "@nextui-org/react";
import CustomerNavbar from "./Navbar/CustomerNavbar";
import AddWorkout from "./workoutTracking/AddWorkout";
import React, {useEffect, useState} from "react";
import WorkoutDashboard from "./workoutTracking/WorkoutDashboard";
import UpcomingClassCard from "./Classes/UpcomingClassCard";
import ConsolidatedActivity from "./ConsolidatedWorkoutActivity/ConsolidatedActivity";
import EnrollClass from "./Classes/EnrollClass/EnrollClass";


const Employee = () => {

    //todo revert
    // const user = JSON.parse(sessionStorage.user)
    //
    // // fetch customer name
    // const customerName = user.name

    const customerName = "chiruhas"

    const [activityData, setActivityData] = useState([[], [], [], [], [], [], [], [], [], [], [], []])

    //

    // fetching activity data
    const getData = async () => {

        //TODO:: add userid below
        const { data } = await axios.get(`http://0.0.0.0:8080/getDayWiseUserActivity?userid={}`);

        // todo figure out how to properly update state.
        let temp = [];
        data.forEach((el, index) => {
            temp.push([...el.activity]);
        })
        console.log(JSON.stringify(temp));

        setActivityData((old) => {
            return temp
        });


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
                                            {/*todo replicate this process for the remaining months.*/}

                                            <ConsolidatedActivity data={activityData[0]}/>


                                        </Grid.Container>


                                    </Grid>
                                    <Grid xs={1} justify="center">

                                        <Grid.Container>
                                            <Grid xs={12}>
                                                <Text h5>February</Text>
                                            </Grid>

                                            <ConsolidatedActivity data={activityData[1]}/>

                                        </Grid.Container>

                                    </Grid>
                                    <Grid xs={1} justify="center">
                                        <Grid.Container>
                                            <Grid xs={12}>
                                                <Text h5>March</Text>
                                            </Grid>

                                            <ConsolidatedActivity data={activityData[2]}/>

                                        </Grid.Container>

                                    </Grid>
                                    <Grid xs={1} justify="center"> <Grid.Container>
                                        <Grid xs={12}>
                                            <Text h5>Aril</Text>
                                        </Grid>

                                        <ConsolidatedActivity data={activityData[3]}/>

                                    </Grid.Container></Grid>
                                    <Grid xs={1} justify="center"> <Grid.Container>
                                        <Grid xs={12}>
                                            <Text h5>May</Text>
                                        </Grid>

                                        <ConsolidatedActivity data={activityData[4]}/>

                                    </Grid.Container></Grid>
                                    <Grid xs={1} justify="center"> <Grid.Container>
                                        <Grid xs={12}>
                                            <Text h5>June</Text>
                                        </Grid>

                                        <ConsolidatedActivity data={activityData[5]}/>

                                    </Grid.Container></Grid>
                                    <Grid xs={1} justify="center"> <Grid.Container>
                                        <Grid xs={12}>
                                            <Text h5>July</Text>
                                        </Grid>

                                        <ConsolidatedActivity data={activityData[6]}/>

                                    </Grid.Container></Grid>
                                    <Grid xs={1} justify="center"> <Grid.Container>
                                        <Grid xs={12}>
                                            <Text h5>August</Text>
                                        </Grid>

                                        <ConsolidatedActivity data={activityData[7]}/>

                                    </Grid.Container></Grid>
                                    <Grid xs={1} justify="center"> <Grid.Container>
                                        <Grid xs={12}>
                                            <Text h5>September</Text>
                                        </Grid>

                                        <ConsolidatedActivity data={activityData[8]}/>

                                    </Grid.Container></Grid>
                                    <Grid xs={1} justify="center"> <Grid.Container>
                                        <Grid xs={12}>
                                            <Text h5>October</Text>
                                        </Grid>

                                        <ConsolidatedActivity data={activityData[9]}/>

                                    </Grid.Container></Grid>
                                    <Grid xs={1} justify="center"> <Grid.Container>
                                        <Grid xs={12}>
                                            <Text h5>November</Text>
                                        </Grid>

                                        <ConsolidatedActivity data={activityData[10]}/>

                                    </Grid.Container></Grid>
                                    <Grid xs={1} justify="center"> <Grid.Container>
                                        <Grid xs={12}>
                                            <Text h5>December</Text>
                                        </Grid>

                                        <ConsolidatedActivity data={activityData[11]}/>

                                    </Grid.Container></Grid>
                                </Grid.Container>

                            </Card.Body>
                        </Card>
                    </Grid>
                </Grid.Container>


            </Grid.Container>
            <Grid.Container gap={2}>
                <Grid xs={12} justify="center"><Text h2> Enroll Classes</Text></Grid>


                <Grid xs={12} justify="center"><EnrollClass/></Grid>


            </Grid.Container>

        </Grid.Container>


    </>


}


export default Employee;
