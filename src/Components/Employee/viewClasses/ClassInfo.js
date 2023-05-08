import {Dropdown, Grid, Text} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import EnrollClassCard from "../../Users/Classes/EnrollClass/EnrollClassCard";
import ViewClassCard from "./ViewClassCard";
import axios from "axios";


const ClassInfo = ()=>{

    const days=[{key:"Monday"},{key:"Tuesday"},{key:"Wednesday"},{key:"Thursday"},{key:"Friday"},{key:"Saturday"}]

    const [selected, setSelected] = React.useState(new Set(["Sunday"]));

    const employee = JSON.parse(sessionStorage.employee)

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
        //Request
        // http://13.57.252.62:8080/getClassesForEmployee?day=Monday&locationid=1
        // Output
        //[
        //   {
        //     "class_id": 3,
        //     "class_name": "dummy ",
        //     "instructorname": "name123",
        //     "cost": 10,
        //     "startdate": "2023-05-04T00:00:00Z",
        //     "enddate": "2023-05-31T00:00:00Z",
        //     "starttime": "0000-01-01T09:00:00Z",
        //     "endtime": "0000-01-01T10:00:00Z"
        //   },
        //   {
        //     "class_id": 1,
        //     "class_name": "Yoga",
        //     "instructorname": "inst1",
        //     "cost": 10,
        //     "startdate": "2023-06-01T00:00:00Z",
        //     "enddate": "2023-05-01T00:00:00Z",
        //     "starttime": "0000-01-01T21:00:00Z",
        //     "endtime": "0000-01-01T22:00:00Z"
        //   }
        // ]

        console.log(`http://13.57.252.62:8080/getClassesForEmployee?day=${d}&locationid=${employee.locationid}`);


        const { data } = await axios.get(`http://13.57.252.62:8080/getClassesForEmployee?day=${d}&locationid=${employee.locationid}`);
        console.log(data);
        setData(data);
    };

    useEffect(()=>{
        getData()
    })


    return <Grid.Container gap={2}>
        <Grid xs={12} justify="center"> <Text h2> Classes Information </Text></Grid>
        <Grid xs={10}> </Grid>
        <Grid xs={2}><Dropdown name="day">
            <Dropdown.Button flat color="secondary" css={{tt: "capitalize"}} name='day'>
                {selectedValue}
            </Dropdown.Button>
            <Dropdown.Menu
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}
                items={days}
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
