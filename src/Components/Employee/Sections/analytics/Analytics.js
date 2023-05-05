/*
import EmployeeNavbar from "../Navbar/EmployeeNavbar";
import {Dropdown, Grid, Text} from "@nextui-org/react";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
import React, {useEffect, useState} from "react";
import axios from "axios";

const dataa = [
    {
        name: 'Monday',
        classes: 4
    },
    {
        name: 'Tuesday',
        classes: 3
    },
    {
        name: 'Monday',
        classes: 4
    },
    {
        name: 'Tuesday',
        classes: 3
    },
    {
        name: 'Wednesday',
        classes: 2
    },
    {
        name: 'Thursday',
        classes: 2
    },
    {
        name: 'Friday',
        classes: 1
    },
    {
        name: 'Saturday',
        classes: 2
    },
    {
        name: 'Sunday',
        classes: 3
    },
];

const Analytics = () => {

    const [xaxis, setXAxis]= React.useState("Location");
    const [yaxis, setYAxis]= React.useState("users");


    const graphs = [{key: "Location vs Users", value: 1},
        {key: "Classes vs Users", value: 2
    }, {key: "Location vs Classes", value: 3},
        {key: "Days vs Classes", value: 4}];

    const [graph, setGraph] = React.useState(new Set(["Location vs Users"]));

    // const setXYAxes = () = {
    //
    // }

    const graphValue = React.useMemo(
        () => Array.from(graph).join(", ").replaceAll("_", " "),
        [graph]
    );

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {

        console.log(graph);

        // const { data } = await axios.get(`http://0.0.0.0:8080/getgraph?xaxis=${xaxis}&yaxis=${yaxis}`);

        // setData(data);
    };

    const [data,setData] = useState([])

    return <>

        <Grid.Container gap={2} justify="center">
            <Grid xs={3}></Grid>

            <Grid xs={6} justify="center" gap={2}>


                <Text h2>Analytics Dashboard</Text>


            </Grid>
            <Grid xs={3}>
            </Grid>
        </Grid.Container>
        <Grid.Container gap={2} justify="center">
            <Grid >

                <Dropdown name="Graphs" >
                    <Dropdown.Button flat color="secondary" css={{tt: "capitalize"}} name='graph' required>
                        {graphValue}
                    </Dropdown.Button>
                    <Dropdown.Menu
                        aria-label="Single selection actions"
                        color="secondary"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={graph}
                        onSelectionChange={setGraph}
                        items={graphs}

                    >

                        {(item) => (
                            <Dropdown.Item>
                                {item.key}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <BarChart

                    width={1000}
                    height={300}
                    data={dataa}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="classes"/>
                    <YAxis label={yaxis} />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="classes" fill="#82ca9d" />   {/!*8884d8*!/}
                </BarChart>
        </Grid>

    </Grid.Container>






    </>


}


export default Analytics;
*/


import AnalyticsCard from "./AnalyticsCard";
import {Dropdown, Grid} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import axios from "axios";

const Analytics = () => {


    const [data, setData] = useState([{previous:0,current:0,change:0},{previous:0,current:0,change:0},{previous:0,current:0,change:0}]);

    const choices=[{key:"Daily",value:0},{key:"Weekly",value:1},{key:"Monthly",value: 2}]

    const [selected, setSelected] = React.useState(new Set(["Daily"]));

    const [selectedChoice, setSelectedChoice] = useState("Daily");

    const getData = async () => {

        let d=""
        selected.forEach((value) =>{
            d = value
        });
        let dp = choices.filter((el) => {
            return el.key === d
        })
        dp = dp[0].value

         const { data } = await axios.get(`http://0.0.0.0:8080/getOverallAnalytics?type=${dp}`);
        // console.log(data);


        setData((d)=>{

            let t=[]

            for (let i = 0; i < 3; i++) {
                let p = Math.round(((data[i].current-data[i].previous)/data[i].current*100.0)||0)
                let o={current : data[i].current, previous:data[i].previous, change :p}
                t.push(o)
            }


            return t;


        });
    };

    useEffect(()=>{
        getData()
    },[])


    return <Grid.Container gap={2}>
        <Grid xs={10}></Grid>
        <Grid xs={2}>
            <Dropdown name="day">
                <Dropdown.Button flat color="secondary" css={{tt: "capitalize"}} name='day'>
                    {selectedChoice}
                </Dropdown.Button>
                <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="secondary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selected}
                    items={choices}

                    /*i am tracking 2 states, 1 state for the currently selected value and another state for storing the currently selected value that is stored in the format that is appropriate for the dropdown, since having a single value in the state doesn't work, so i am storing 2 states for 1 dropdown.*/

                    onSelectionChange={(e) => {

                        setSelected((currentState) => {
                            let d = ""
                            e.forEach((value) => {
                                d = value
                            });
                            currentState.clear()
                            currentState.add(d)
                            setSelectedChoice(d)
                            return currentState
                        })

                        getData()
                    }
                    }
                >

                    {(item) => (
                        <Dropdown.Item>
                            {item.key}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </Grid>
        <AnalyticsCard data={data}/>

    </Grid.Container>


}


export default Analytics
