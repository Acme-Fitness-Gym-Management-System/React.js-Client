import {Card, Col, Grid, Text} from "@nextui-org/react";
import React from "react";


const ViewClassCard = (props)=>{


    const data = props.data

    return  <Card isHoverable   style={{backgroundImage: "linear-gradient(to right, #919bff, #133a94)" }}  width="100%"
                  height={220}>
        <Card.Header >

            <Grid.Container>
                <Grid xs={8}>
                    <Text h3 color="white">
                        {data.class_name}
                    </Text>
                </Grid>
                <Grid xs={4}>
                    <Text h4 weight="bold" transform="uppercase" color="#ffffffAA">
                        {data.cost}$
                    </Text>
                </Grid>

                {/*row 2*/}
                <Grid xs={4}>
                    <Text size={18} weight="bold" transform="uppercase" color="#ffffffAA">
                        {data.startdate.split("T")[0]}
                    </Text>
                </Grid>
                <Grid xs={1}>
                    <Text size={18} weight="bold" color="#ffffffAA">
                        to
                    </Text>
                </Grid>
                <Grid xs={4}>
                    <Text size={18} weight="bold" transform="uppercase" color="#ffffffAA">
                        {data.enddate.split("T")[0]}
                    </Text>
                </Grid>
                <Grid xs={3}>
                    <Text size={18} weight="bold" transform="uppercase" color="#ffffffAA">

                    </Text>
                </Grid>

                {/*row 3*/}
                <Grid xs={4}>
                    <Text size={18} weight="bold" transform="uppercase" color="#ffffffAA">
                        {data.starttime.split("T")[1].substring(0, 5)}
                    </Text>
                </Grid>
                <Grid xs={1}>
                    <Text size={18} weight="bold" color="#ffffffAA">
                        to
                    </Text>
                </Grid>
                <Grid xs={4}>
                    <Text size={18} weight="bold" transform="uppercase" color="#ffffffAA">
                        {data.endtime.split("T")[1].substring(0, 5)}
                    </Text>
                </Grid>
                <Grid xs={3}>
                    <Text size={18} weight="bold" transform="uppercase" color="#ffffffAA">

                    </Text>
                </Grid>

                {/*row 4*/}
                <Grid xs={12}>
                    <Text size={18} weight="bold" transform="uppercase" color="#ffffffAA">
                        by {data.instructorname}
                    </Text>
                </Grid>

            </Grid.Container>

        </Card.Header>

    </Card>
}

export default ViewClassCard
