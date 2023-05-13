import {Card, Col, Grid, Text} from "@nextui-org/react";
import React from "react";
import platinum from "../../images/platinum.jpg"
import gold from "../../images/gold.jpg"
import silver from "../../images/silver.jpg"


const Memberships = ()=>{




    return <>

        <Grid.Container gap={2}>
            <Grid xs={12} justify={"center"}>
                <Text h1 css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                      size={40}
                      weight="bold">Available Memberships</Text>
            </Grid>



            <Grid xs={4}> <Card>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>

                    <Grid.Container>
                        <Grid xs={12} justify={"center"}> <Text h2> Platinum </Text> </Grid>
                        <Grid xs={1}></Grid>
                        <Grid xs={10}><Text> Platinum membership covers gym membership for 12 months, you can access everything the gym has to offer. </Text></Grid>
                        <Grid xs={1}></Grid>
                    </Grid.Container>

                </Card.Header>
                <Card.Image
                    src={platinum}
                    objectFit="cover"
                    width="100%"
                    height={200}
                    alt="Card image background"
                />
            </Card></Grid>


            <Grid xs={4}> <Card>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>

                    <Grid.Container>
                        <Grid xs={12} justify={"center"}> <Text h2> Gold </Text> </Grid>
                        <Grid xs={1}></Grid>
                        <Grid xs={10}><Text> Gold membership covers gym membership for 6 months, you can access everything the gym has to offer, if you wish to like the experience, you can always upgrade :).</Text></Grid>
                        <Grid xs={1}></Grid>
                    </Grid.Container>

                </Card.Header>
                <Card.Image
                    src={gold}
                    objectFit="cover"
                    width="100%"
                    height={200}
                    alt="Card image background"
                />
            </Card></Grid>


            <Grid xs={4}> <Card>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>

                    <Grid.Container>
                        <Grid xs={12} justify={"center"}> <Text h2> Silver </Text> </Grid>
                        <Grid xs={1}></Grid>
                        <Grid xs={10}><Text> Silver membership covers 3 months, this is suitable for those who want to test the waters, before getting in, no problem, start slow.</Text></Grid>
                        <Grid xs={1}></Grid>
                    </Grid.Container>

                </Card.Header>
                <Card.Image
                    src={silver}
                    objectFit="cover"
                    width="100%"
                    height={200}
                    alt="Card image background"
                />
            </Card></Grid>


        </Grid.Container>
    </>




}


export default Memberships
