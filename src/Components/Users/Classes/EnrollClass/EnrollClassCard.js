import {Button, Card, Col, Grid, Loading, Text} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import axios from "axios";


const EnrollClassCard = (props)=>{


    const [data, setData] = useState(props.data);

    const clickHandler = async ()=>{

        // props.id is the id reference of the class
        // todo handle what happens once a user clicks enroll

        // i need to send the class id and the user id

        // id of the class that is clicked will be availale in props.id.

        //todo
        const user = JSON.parse(sessionStorage.user)

        const data ={
            classid:props.id,
            userid:user.userid
        }



        setLoading(true);
        // api call

        try{

           await axios.post("http://0.0.0.0:8080/classCatalogue", JSON.stringify(data) )



        }catch (e){
            alert("OOPs something happened");
        }

        setLoading(false);

        setEnrolled(true);

    }



    const [loading, setLoading] = useState(false);
    const [enrolled, setEnrolled] = useState(false)

    const el = loading?<Button size="xs" type="submit" style={{position: 'absolute',
        right:0,
        bottom:0}} onClick={clickHandler}> <Loading color='success'/></Button> : !enrolled ? <Button size="xs" type="submit" style={{position: 'absolute',
            right:0,
            bottom:0}} onClick={clickHandler}>Enroll</Button> :
        <Button size="xs" style={{position: 'absolute',
            right:0,
            bottom:0}}  type="submit" color="success" disabled>Enrolled</Button>

    return   <Card isHoverable >
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>

            {/*<Col>*/}

            {/*    <Text h2 color="white">*/}
            {/*        {data.class_name}*/}
            {/*    </Text>*/}

            {/*    <Text size={18} weight="bold" transform="uppercase" color="#ffffffAA">*/}
            {/*        {data.capacity} people*/}
            {/*    </Text>*/}
            {/*    {el}*/}
            {/*</Col>*/}

            <Grid.Container>
                <Grid xs={8}>
                    <Text h2 color="white">
                        {data.class_name}
                    </Text>
                </Grid>
                <Grid xs={4}>
                    <Text h3 weight="bold" transform="uppercase" color="#ffffffAA">
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
                        {data.starttime.split("T")[1].substring(0,5)}
                    </Text>
                </Grid>
                <Grid xs={1}>
                    <Text size={18} weight="bold"  color="#ffffffAA">
                        to
                    </Text>
                </Grid>
                <Grid xs={4}>
                    <Text size={18} weight="bold" transform="uppercase" color="#ffffffAA">
                        {data.endtime.split("T")[1].substring(0,5)}
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




                <Grid xs={4}>

                </Grid>
                <Grid xs={4}>
                    {el}
                </Grid>
                <Grid xs={4}>

                </Grid>




            </Grid.Container>

        </Card.Header>
        <Card.Image
            src="https://nextui.org/images/card-example-4.jpeg"
            objectFit="cover"
            width="100%"
            height={200}
            alt="Card image background"
        />
    </Card>

}


export default EnrollClassCard
