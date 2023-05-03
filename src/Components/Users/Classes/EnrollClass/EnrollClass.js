import {Dropdown, Grid} from "@nextui-org/react";
import EnrollClassGrid from "./EnrollClassGrid";
import React, {useEffect, useState} from "react";
import axios from "axios";


const EnrollClass = (props) => {

    const days = [{key: "Sunday"}, {key: "Monday"}, {key: "Tuesday"}, {key: "Wednesday"}, {key: "Thursday"}, {key: "Friday"}, {key: "Saturday"}]


    // hardcoded these locations for now
    const locations = [{key: "san fransico", value: 1}, {
        key: "Sacramento",
        value: 2
    }, {key: "Milpitas", value: 3}, {key: "Sunnyvale", value: 4}, {key: "Santa Clara", value: 5}, {
        key: "San Mateo",
        value: 6
    }];

    const [selected, setSelected] = React.useState(new Set(["Sunday"]));

    const [selectedDay, setSelectedDay] = useState("Sunday");

    const [location, setLocation] = React.useState(new Set(["san fransico"]));

    const [selectedLocation, setSelectedLocation] = useState("san fransico");




    const setDayState = async (e) => {
        console.log(e);
        try {

        } catch (e) {
            console.log(e);
        }


        await getData()
    }


    // fetching activity data
    const getData = async () => {

        let d=""
       selected.forEach((value) =>{
           d = value
       });

        let l=""
        location.forEach((value) =>{
            l = value
        });

        // fetching the value associated with the location
        let dp = locations.filter((el) => {
            return el.key === l
        })
        const locValue = dp[0].value

        const { data } = await axios.get(`http://0.0.0.0:8080/getClasses?day=${d}&location=${locValue}`);

        setData(data);
    };

    useEffect(() => {
        getData();
    }, []);

    //const [dayState, setDayState] = useState("Sunday")


    // this is the data at a given day and a location
    // once the user changes any of that a new api call will be made and data will be updated
    const [data, setData] = useState([])

    // expected data is an array of array of objecys

    //[[],[],[].....] => 0th index array consists the data of all classes on monday.

    // const el = loading ? <Button type="submit"><Loading color='success'/></Button> :
    //     <Button type="submit">Submit</Button>

    return <Grid.Container>
        <Grid xs={8}></Grid>
        <Grid xs={2}>
            <Dropdown name="day">
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

                     /*i am tracking 2 states, 1 state for the currently selected value and another state for storing the currently selected value that is stored in the format that is appropriate for the dropdown, since having a single value in the state doesn't work, so i am storing 2 states for 1 dropdown.*/

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
        <Grid xs={2}>
            <Dropdown name="location">
                <Dropdown.Button flat color="secondary" css={{tt: "capitalize"}} name='location' required>
                    {selectedLocation}
                </Dropdown.Button>
                <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="secondary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={location}
                    onSelectionChange={(e) => {

                        setLocation((currentState) => {
                            let d = ""
                            e.forEach((value) => {
                                d = value
                            });
                            currentState.clear()
                            currentState.add(d)
                            setSelectedLocation(d)
                            return currentState
                        })

                        getData()
                    }}
                    items={locations}

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
            <EnrollClassGrid data={data}/>
        </Grid>

    </Grid.Container>

}


export default EnrollClass
