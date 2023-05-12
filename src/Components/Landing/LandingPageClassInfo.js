import {Dropdown, Grid, Loading, Text} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import axios from "axios";
import ViewClassCard from "../Employee/viewClasses/ViewClassCard";


const LandingPageClassInfo = () => {

    const days = [{key: "Monday"}, {key: "Tuesday"}, {key: "Wednesday"}, {key: "Thursday"}, {key: "Friday"}, {key: "Saturday"}]

    const [selected, setSelected] = React.useState(new Set(["Sunday"]));
    const [selectedDay, setSelectedDay] = useState("Sunday");

    //const employee = JSON.parse(sessionStorage.employee)

    const selectedValue = React.useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );


    // hardcoded these locations for now
    const locations = [{key: "San Francisco", value: 1}, {
        key: "Sacramento",
        value: 2
    }, {key: "Milpitas", value: 3}, {key: "Sunnyvale", value: 4}, {key: "Santa Clara", value: 5}, {
        key: "San Mateo",
        value: 6
    }, {key: "San Jose", value: 7}];

    const [location, setLocation] = React.useState(new Set(["San Francisco"]));

    const [selectedLocation, setSelectedLocation] = useState("San Fransico");

    const [loading, setLoading] = useState(false)


    const [data, setData] = useState([])


    const getData = async () => {

        setLoading(true)

        let d = ""
        selected.forEach((value) => {
            d = value
        });

        let l = ""
        location.forEach((value) => {
            l = value
        });

        // fetching the value associated with the location
        let dp = locations.filter((el) => {
            return el.key === l
        })
        const locValue = dp[0].value

        const {data} = await axios.get(`http://100.26.42.194:8080/getClassesForEmployee?day=${d}&locationid=${locValue}`);
        console.log(data);
        setData(data)

        setLoading(false)
    };

    useEffect(() => {
        getData()
    }, [])


    const e = loading ? <Loading color='success'/> : data.map((d, i) => <Grid xs={3} key={i}>

        <ViewClassCard data={d} id={d.class_id}/>

    </Grid>)


    // expected data is an array of array of objecys

    //[[],[],[].....] => 0th index array consists the data of all classes on monday.

    // const el = loading ? <Button type="submit"><Loading color='success'/></Button> :
    //     <Button type="submit">Submit</Button>

    return <Grid.Container style={{display: "flex"}}>
        <Grid xs={12} justify={"center"}>
            <Text h2 css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
                  size={40}
                  weight="bold">Available Classes</Text>
        </Grid>
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

            {e}
        </Grid>



    </Grid.Container>

}

export default LandingPageClassInfo
