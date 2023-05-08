import {Card, Grid, Text} from "@nextui-org/react";
import React from "react";


const AnalyticsCards = (props)=>{


    /**
     * Here the data i get is an array of the form [ {prev:val1, current:val2, change:val3}..]
     * and i have 3 such objects for 3 cards
     * 0th index is for total checkins
     * 1st index is for new members
     * 2nd index is for enrollment in classes
     *
     * i could've made the cards dynamically, since they are only 3 i resorted to hard coding.
     */

    const data = props.data || []

    return <Grid.Container gap={4}>
        <Grid xs={4} >
            <Card isHoverable style={{backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)" }}>
                <Card.Header>

                    <Grid.Container>

                        <Grid xs={12} justify={"center"}><Text h3>Total Checkin's</Text></Grid>
                        <Grid xs={4}></Grid>
                        <Grid xs={4} justify={"center"}><Text h2>{data[0].current}</Text></Grid>
                        <Grid xs={4}></Grid>
                        <Grid xs={12} justify={"center"}><Text h4>{data[0].change>0?"Increased by ":"Decreased by"} {data[0].change>0?data[0].change:-1*data[0].change}%</Text></Grid>

                    </Grid.Container>

                </Card.Header>
            </Card>

        </Grid>
        <Grid xs={4}>
            <Card isHoverable style={{backgroundImage: "linear-gradient(to right, #CB356B, #BD3F32)" }}>
                <Card.Header>

                    <Grid.Container>

                        <Grid xs={12} justify={"center"}><Text h3>New Member's</Text></Grid>
                        <Grid xs={4}></Grid>
                        <Grid xs={4} justify={"center"}><Text h2>{data[1].current}</Text></Grid>
                        <Grid xs={4}></Grid>
                        <Grid xs={12} justify={"center"}><Text h4>{data[1].change>0?"Increased by ":"Decreased by"} {data[1].change>0?data[1].change:-1*data[1].change}%</Text></Grid>

                    </Grid.Container>

                </Card.Header>


            </Card>
        </Grid>
        <Grid xs={4}>
            <Card isHoverable style={{backgroundImage: "linear-gradient(to right, #4568DC, #B06AB3)" }}>
                <Card.Header>

                    <Grid.Container>
                        <Grid xs={12} justify={"center"}><Text h3>Enrollment in classes</Text></Grid>
                        <Grid xs={4}></Grid>
                        <Grid xs={4} justify={"center"}><Text h2>{data[2].current}</Text></Grid>
                        <Grid xs={4}></Grid>
                        <Grid xs={12} justify={"center"}><Text h4>{data[2].change>0?"Increased by ":"Decreased by"} {data[2].change>0?data[2].change:-1*data[2].change}%</Text></Grid>
                    </Grid.Container>

                </Card.Header>
            </Card>
        </Grid>
    </Grid.Container>

}


export default AnalyticsCards
