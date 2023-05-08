import {Line} from 'react-chartjs-2';
import {CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title} from "chart.js";
import {Dropdown, Grid, Tooltip} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import axios from "axios";
//,
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const HoursSpentByWeekType = () => {


    const types = [{key: "Week-Day", value: 0}, {key: "Week-End", value: 1}]

    const locations = [{key: "All", value: 0}, {key: "San Francisco", value: 1}, {
        key: "Sacramento",
        value: 2
    }, {key: "Milpitas", value: 3}, {key: "Sunnyvale", value: 4}, {key: "Santa Clara", value: 5}, {
        key: "San Mateo",
        value: 6
    }, {key: "San Jose", value: 7}];

    const [selected, setSelected] = React.useState(new Set(["All"]));
    const [selectedLocation, setSelectedLocation] = React.useState("All");

    const [selectedType, setSelectedType] = React.useState(new Set(["Week-Day"]));
    const [selectedChoice, setSelectedChoice] = React.useState("Week-Day");

    const [classData, setClassData] = useState([]);
    const [enrollmentData, setEnrollmentData] = useState([]);


    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Day Vs Classes',
            }
        }
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'Classes',
                data: classData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };


    const getData = () => {


        // todo : API call

        let v = ''
        selected.forEach((value) => {
            v = value
        });

        let dp = locations.filter((el) => {
            return el.key === v
        })

        const locationValue = dp[0].value


        selectedType.forEach((value) => {
            v = value
        });

        const dayType = v === 'Week-Day' ? 0 : 1

        console.log(`http://0.0.0.0/someEndpoint?locationid=${locationValue}&dayType=${dayType}`)
        const d = axios.get(`http://0.0.0.0/someEndpoint?locationid=${locationValue}&dayType=${dayType}`)

        //const d =[{attendees:40, classes_offered:50, day:'Monday'},{attendees:60, classes_offered:70, day:'Monday'}]


        setClassData((p) => {
            let t = [];

            for (let i = 0; i < d.length; i++) {
                t.push(d[i].classes_offered)
            }

            return t;
        })

        setEnrollmentData((p) => {
            let t = [];

            for (let i = 0; i < d.length; i++) {
                t.push(d[i].attendees)
            }

            return t;
        })


    }

    useEffect(() => {
        getData();
    }, [])


    return <Grid.Container>
        <Grid xs={6}>

        </Grid>
        <Grid xs={3}>
            <Dropdown>
                <Dropdown.Button flat color="secondary" css={{tt: "capitalize"}} name='day'>
                    {selectedChoice}
                </Dropdown.Button>
                <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="secondary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedType}
                    items={types}

                    /*i am tracking 2 states, 1 state for the currently selected value and another state for storing the currently selected value that is stored in the format that is appropriate for the dropdown, since having a single value in the state doesn't work, so i am storing 2 states for 1 dropdown.*/

                    onSelectionChange={(e) => {

                        let d = ""
                        e.forEach((value) => {
                            d = value
                        });
                        setSelectedType((currentState) => {

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
        <Grid xs={3}>
            {/*for weekly day vs class*/}
            <Dropdown name="l1">
                <Dropdown.Button flat color="secondary" css={{tt: "capitalize"}} name='day'>
                    {selectedLocation}
                </Dropdown.Button>
                <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="secondary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selected}
                    items={locations}

                    /*i am tracking 2 states, 1 state for the currently selected value and another state for storing the currently selected value that is stored in the format that is appropriate for the dropdown, since having a single value in the state doesn't work, so i am storing 2 states for 1 dropdown.*/

                    onSelectionChange={(e) => {

                        let d = ""
                        e.forEach((value) => {
                            d = value
                        });
                        setSelected((currentState) => {

                            currentState.clear()
                            currentState.add(d)
                            setSelectedLocation(d)
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

        <Grid xs={12}>
            <Line

                options={options}

                data={data}
            />
        </Grid>


    </Grid.Container>


}


export default HoursSpentByWeekType
