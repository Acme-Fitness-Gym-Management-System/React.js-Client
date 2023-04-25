import {Button, Card, Col, Grid, Text} from "@nextui-org/react";
import {useState} from "react";
import EnrollClassCard from "./EnrollClassCard";


const EnrollClassGrid = (props)=>{

const [data,setdata] = useState([
    {className:"Aerobics",time:"7.00-8.00",capacity:"40",},{className:"Aerobics",time:"7.00-8.00",capacity:"40",}
]);





    return <Grid.Container gap={2}>

        {data.map((d,i)=> <Grid xs={3} key={i}>

          <EnrollClassCard data={d} id={"hello world "+i}/>

        </Grid>)}


    </Grid.Container>
}


export default EnrollClassGrid
