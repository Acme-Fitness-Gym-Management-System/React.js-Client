import {Dropdown, Grid, Text} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import EnrollClassCard from "../../Users/Classes/EnrollClass/EnrollClassCard";
import ViewClassCard from "./ViewClassCard";
import axios from "axios";


const ClassInfo = ()=>{

    const days=[{key:"Monday"},{key:"Tuesday"},{key:"Wednesday"},{key:"Thursday"},{key:"Friday"},{key:"Saturday"}]

    const [selected, setSelected] = React.useState(new Set(["Sunday"]));
    const [selectedDay, setSelectedDay] = useState("Sunday");


    let locationId=''
    const selectedValue = React.useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );


    const [data, setData] = useState([])


    const getData = async () => {

        let d=""
        selected.forEach((value) =>{
            d = value
        });
        const { data } = await axios.get(`http://gym-backend-autoscale-group-1-2059727889.us-east-1.elb.amazonaws.com:8080/getClassesForEmployee?day=${d}&locationid=${locationId}`);
        setData(data);
    };

    useEffect(()=>{

        const employee = (sessionStorage.employee)

        if(!employee)
            locationId = 1;
        else
            locationId = JSON.parse(employee).locationid


        getData()
    },[])


    return <Grid.Container gap={2}>
        <Grid xs={12} justify="center"> <Text h2> Classes Information </Text></Grid>
        <Grid xs={10}> </Grid>
        <Grid xs={2}><Dropdown name="day">
            <Dropdown.Button flat color="secondary" css={{tt: "capitalize"}} name='day'>
                {selectedDay}
            </Dropdown.Button>
            <Dropdown.Menu
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selected}
                items={days}
                onSelectionChange={(e) => {

                    setSelected((currentState) => {
                        let d = ""
                        e.forEach((value) => {
                            d = value
                        });
                        currentState.clear()
                        currentState.add(d)
                        setSelectedDay(d)
                        return currentState
                    })

                    getData()
                }}

            >

                {(item) => (
                    <Dropdown.Item>
                        {item.key}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown></Grid>


        {data.map((d,i)=> <Grid xs={3} key={i}>

            <ViewClassCard data={d} id={d.class_id}/>

        </Grid>)}






    </Grid.Container>


}


export default ClassInfo
