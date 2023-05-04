import {Button, Dropdown, Grid, Loading, Text} from "@nextui-org/react";
import EnrollClassGrid from "./EnrollClassGrid";
import React, {useEffect, useState} from "react";
import axios from "axios";


const EnrollClass = (props)=>{

const days=[{key:"Monday"},{key:"Tuesday"},{key:"Wednesday"},{key:"Thursday"},{key:"Friday"},{key:"Saturday"},{key:"Sunday"}]


    // hardcoded these locations for now
    const locations = [{key: "San Francisco", value: 1}, {
        key: "Sacramento",
        value: 2
    }, {key: "Milpitas", value: 3}, {key: "Sunnyvale", value: 4}, {key: "Santa Clara", value: 5}, {
        key: "San Mateo",
        value: 6
    }];

    const [selected, setSelected] = React.useState(new Set(["Sunday"]));

    const selectedValue = React.useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );

    const [location, setLocation] = React.useState(new Set(["San Francisco"]));

    const locationValue = React.useMemo(
        () => Array.from(location).join(", ").replaceAll("_", " "),
        [location]
    );





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

        let dp = locations.filter((el)=>{

            return el.key===l
        })
        const locValue = dp[0].value

        console.log(locValue);

         const { data } = await axios.get(`http://0.0.0.0:8080/getClasses?day=${d}&location=${locValue}`);

        setData(data);
    };

    useEffect(() => {
        getData();
    }, []);



    // this is the data at a given day and a location
    // once the user changes any of that a new api call will be made and data will be updated
const [data,setData] = useState([])

    // expected data is an array of array of objecys

    //[[],[],[].....] => 0th index array consists the data of all classes on monday.

    return <Grid.Container >
        <Grid xs={8}></Grid>
        <Grid xs={2}>
            <Dropdown name="day">
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
            </Dropdown>
        </Grid>
        <Grid xs={2}>
            <Dropdown name="location">
                <Dropdown.Button flat color="secondary" css={{tt: "capitalize"}} name='location' required>
                    {locationValue}
                </Dropdown.Button>
                <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="secondary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={location}
                    onSelectionChange={setLocation}
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
            <EnrollClassGrid data={data} />
        </Grid>

    </Grid.Container>

}


export default EnrollClass
