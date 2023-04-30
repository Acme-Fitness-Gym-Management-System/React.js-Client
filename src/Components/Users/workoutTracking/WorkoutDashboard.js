import {Container, Dropdown, Grid, Text} from "@nextui-org/react";
import React, {useEffect} from "react";
import axios from "axios";

const WorkoutDashboard = (props) => {

    const days = [{key:"1 day"},{key:"7 days"},{key:"30 days"},{key:"60 days"},{key : "90 days"}];
    const [day, setDay] = React.useState(new Set(["1 day"]));

    const dayValue = React.useMemo(
        () => Array.from(day).join(", ").replaceAll("_", " "),
        [day]
    );



    const [data, setData] = React.useState({
        treadmill: "1",
        cycling: "1",
        stairMachine: "1",
        weightTrainning: "1"
    })


    const getData = async () => {
        //todo

        let d=""
        day.forEach((value) =>{
            d = value
        });
        d = d.split(" ")[0]


        const { data } = await axios.get(`http://0.0.0.0:8080/getPastWorkoutData?days=${d}`);

        // todo
        // required data format
        /**
         * {
         *         treadmill: "x",
         *         cycling: "y",
         *         stairMachine: "z",
         *         weightTrainning: "a"
         *     }
         */

        //setActivityData(data);
    };

    useEffect(() => {
    //todo
        getData()
    });

    return <Grid.Container>
        <Grid xs={12} justify="center">
            <Text h4>Your Activity</Text>

        </Grid>
        <Grid xs={12} justify="center">
            <Dropdown name="days">
                <Dropdown.Button flat color="secondary" css={{tt: "capitalize"}} name='workoutType' required>
                    {day}
                </Dropdown.Button>
                <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="secondary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={days}
                    onSelectionChange={setDay}
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
        <Grid xs={6} justify="center">
            <Text h4>Weight Training</Text>

                <Text h4> {data.weightTrainning}</Text>


        </Grid>

        <Grid xs={6} justify="center">
            <Text h4>Cycling</Text>
            {'\n'}
            <Text h4>{data.cycling}</Text>
        </Grid>

        <Grid xs={6} justify="center">
            <Text h4>Stair Machine</Text>
            {'\n'}
            <Text h4>{data.stairMachine}</Text>
        </Grid>

        <Grid xs={6} justify="center">
            <Text h4>Treadmill</Text>
            {'\n'}
            <Text h4>{data.treadmill}</Text>
        </Grid>


    </Grid.Container>


}


export default WorkoutDashboard;
