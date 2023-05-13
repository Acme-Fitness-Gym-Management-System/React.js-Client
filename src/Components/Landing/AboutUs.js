import {Grid, Text} from "@nextui-org/react";
import React from "react";


const AboutUs = () => {


    return <Grid.Container gap={2}>


        <Grid xs={12} justify={"center"}>
            <Text h1 css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
                  size={40}
                  weight="bold">About Us</Text>
        </Grid>

        <Grid xs={2}> </Grid>
        <Grid xs={8} justify={"center"}><Text h3>Start building your own legacy with the best strength training areas,
            group classes, cardio and free weights and Personal Trainers at a Acme Fitness Center near you.</Text>
        </Grid>
        <Grid xs={2}> </Grid>


    </Grid.Container>

}


export default AboutUs
