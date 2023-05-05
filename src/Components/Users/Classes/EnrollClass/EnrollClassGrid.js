import {Button, Card, Col, Grid, Text} from "@nextui-org/react";
import {useEffect, useState} from "react";
import EnrollClassCard from "./EnrollClassCard";


const EnrollClassGrid = (props)=>{

const [data,setData] = useState([

]);

    // {className:"Aerobics",time:"7.00-8.00",capacity:"40",},{className:"Aerobics",time:"7.00-8.00",capacity:"40",}



    useEffect(()=>{
        setData(props.data)
    })

    return <Grid.Container gap={2}>

        {data.map((d,i)=> <Grid xs={3} key={i}>

          <EnrollClassCard data={d} id={d.class_id}/>

        </Grid>)}


    </Grid.Container>
}


export default EnrollClassGrid
