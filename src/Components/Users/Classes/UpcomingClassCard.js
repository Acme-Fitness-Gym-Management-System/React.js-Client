import {Card, Grid, Text} from "@nextui-org/react";
import React, {useState} from "react";


const UpcomingClassCard = () => {

// modal definition

    /**
     * {
     *         className:"",
     *         time:"",
     *         location:""
     *  }
     */

    const [data, useData] = useState([{
        className: "hello",
        time: "",
        location: ""
    }, {
        className: "hello",
        time: "",
        location: ""
    }
    ]);

    // Grid.container >
    //
    // {/*<Grid xs={12}>*/}
    // {/*<Card isHoverable variant="bordered">*/}
    // {/*    <Card.Body>*/}
    // {/*        <Grid.Container>*/}
    // <Grid xs={8}><Text h4>{d.className}</Text></Grid>
    // <Grid xs={4}><Text h5>@{d.location}</Text></Grid>
    // <Grid xs={5}><Text h5>{d.time}</Text></Grid>
    // <Grid xs={7}><Text h5>{d.time}</Text></Grid>
    // {/*</Grid.Container>*/}
    //
    // {/*    </Card.Body>*/}
    // {/*</Card>*/}
    // {/*</Grid>*/}
    //


//
// </Grid.container>)
    return data.map((d, index) =><> <Grid xs={8}><Text h4>{d.className}</Text></Grid>
        <Grid xs={4}><Text h5>@{d.location}</Text></Grid>
        <Grid xs={5}><Text h5>{d.time}</Text></Grid>
        <Grid xs={7}><Text h5>{d.time}</Text></Grid></>)


}


export default UpcomingClassCard
