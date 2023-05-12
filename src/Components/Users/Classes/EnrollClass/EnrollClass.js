import {Dropdown, Grid, Loading} from "@nextui-org/react";
import EnrollClassGrid from "./EnrollClassGrid";
import React, {useEffect, useState} from "react";
import axios from "axios";
import EnrollClassCard from "./EnrollClassCard";


const EnrollClass = (props) => {
    let user = JSON.parse(sessionStorage.user)

    const days=[{key:"Monday"},{key:"Tuesday"},{key:"Wednesday"},{key:"Thursday"},{key:"Friday"},{key:"Saturday"},{key:"Sunday"}]
    // this is the data at a given day and a location
    // once the user changes any of that a new api call will be made and data will be updated
    const [data, setData] = useState([])

    // hardcoded these locations for now
    const locations = [{key: "San Francisco", value: 1}, {
        key: "Sacramento",
        value: 2
    }, {key: "Milpitas", value: 3}, {key: "Sunnyvale", value: 4}, {key: "Santa Clara", value: 5}, {
        key: "San Mateo",
        value: 6
    }, {key: "San Jose", value: 7}];

    const [selected, setSelected] = React.useState(new Set(["Sunday"]));

    const [selectedDay, setSelectedDay] = useState("Sunday");

    const [location, setLocation] = React.useState(new Set(["San Francisco"]));

    const [selectedLocation, setSelectedLocation] = useState("San Fransico");

    const [loading,setLoading] = useState(false)


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

        setLoading(true)

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

        const { data } = await axios.get(`http://gym-backend-autoscale-group-1-2059727889.us-east-1.elb.amazonaws.com:8080/getClasses?day=${d}&locationid=${locValue}&userid=${user.id}`);
        console.log(data);
        setData(data)

        setLoading(false)
    };

    useEffect(() => {
        getData();
    }, []);

    //const [dayState, setDayState] = useState("Sunday")


    const e =  loading?<Loading color='success'/> : data.map((d,i)=> <Grid xs={3} key={i}>

            <EnrollClassCard data={d} id={d.class_id}/>

        </Grid>)


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

            {e}
        </Grid>

    </Grid.Container>

}


export default EnrollClass
