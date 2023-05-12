import {Card, Grid, Text} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import axios from "axios";


const UpcomingClassCard = (props) => {

// modal definition



    const user = props.data

    const [data, setData] = useState([]);





    const getData = async()=>{


        const {data}= await axios.get(`http://gym-backend-autoscale-group-1-2059727889.us-east-1.elb.amazonaws.com:8080/getUpcomingClasses?userid=${user.id}`)

        console.log(data);

        setData(data)
    }


    useEffect(()=>{
        getData()
    },[]);





    return <Grid.Container gap={1}>
        {data.map((d, index) => <Card variant="bordered" key={d.class_id}>
            <Card.Body>
               <Grid.Container>
                   <Grid xs={8}>{d.class_name}</Grid>
                   <Grid xs={4}>{d.class_date.split("T")[0]}</Grid>
                   <Grid xs={4}>From: {d.starttime.split("T")[1].split("Z")[0]}</Grid>
                   <Grid xs={4}>To: {d.endtime.split("T")[1].split("Z")[0]}</Grid>
               </Grid.Container>
            </Card.Body>
        </Card> )}
    </Grid.Container>




}


export default UpcomingClassCard
