import {Card, Dropdown, Grid, Spacer, Text} from "@nextui-org/react";
import CustomerNavbar from "./Navbar/CustomerNavbar";
import AddWorkout from "./AddWorkout";
import React, {useEffect} from "react";
import WorkoutDashboard from "./WorkoutDashboard";
import UpcomingClassCard from "./UpcomingClassCard";
import ConsolidatedActivityDashboard from "./ConsolidatedActivity";


const Employee = () => {


    // fetch customer name
    const customerName="Chiruhas"

    //const [activityData, setActivityData] = useEffect([]);


    return <>
        {/*todo*/}

        <CustomerNavbar name="Chiruhas Bobbadi"/>


      <Grid.Container gap={2} >
          <Grid xs={12} justify="center"><Text h2> Welcome back, {customerName}!</Text></Grid>
          <Grid xs={8}>
              <Card isHoverable variant="bordered">
                  <Card.Body>
                      <Grid.Container >
                      <Grid xs={12} justify="center">
                          <Text h3>Your Dashboard</Text>
                      </Grid>
                      <Grid xs={6} justify="center">
                          <WorkoutDashboard/>
                      </Grid>
                      <Grid xs={6} >
                          <Grid.Container>
                              <Grid xs={12} justify="center">
                                  <Text h4>Upcoming Classes</Text>
                              </Grid>
                              <Grid xs={12} justify="center">
                                  <UpcomingClassCard/>
                              </Grid>
                          </Grid.Container>

                      </Grid>

                      </Grid.Container>

                  </Card.Body>
              </Card>
          </Grid>
          <Grid xs={4}>
              <AddWorkout/>
          </Grid>
          <Grid xs={12} justify="center">
              <Text h2> Consolidate Workout Activity.</Text>
          </Grid>
          <Grid xs={12} justify="center">
              <Card isHoverable variant="bordered">
                  <Card.Body>
                      <Grid.Container >
                          <Grid xs={1} justify="center">
                              <Grid.Container>
                                  <Grid xs={12}>
                                      <Text h5>January</Text>
                                  </Grid>
                                  <Grid xs={12}>
                                      {/*<ConsolidatedActivity data={activityData.january}/>*/}
                                  </Grid>

                              </Grid.Container>



                          </Grid>
                          <Grid xs={1} justify="center"><Text h5>February</Text></Grid>
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






    </>


}


export default Employee;
