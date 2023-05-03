import {Container, Dropdown, Grid, Text} from "@nextui-org/react";
import React, {useEffect} from "react";
import axios from "axios";

const WorkoutDashboard = (props) => {

    const days = [{key:"1 day"},{key:"7 days"},{key:"30 days"},{key:"60 days"},{key : "90 days"}];
    const [day, setDay] = React.useState(new Set(["1 day"]));
    const [selectedDay, setSelectedDay] = React.useState("1 day");



    const [data, setData] = React.useState({
        treadmill: "1",
        cycling: "1",
        stairMachine: "1",
        weightTrainning: "1"
    })


    const getData = async () => {


        let d=""
        day.forEach((value) =>{
            d = value
        });
        d = d.split(" ")[0]
        const user = JSON.parse(sessionStorage.user)
        const data = await axios.get(`http://0.0.0.0:8080/getPastWorkoutData?days=${d}&userid=${user.id}`);


        // Done
        // required data format
        /**
         * [
         *   {
         *     "devicetype": "Thread Mill",
         *     "totaltimeseconds": 5100
         *   },
         *   {
         *     "devicetype": "cycling",
         *     "totaltimeseconds": 5100
         *   },
         *   {
         *     "devicetype": "stair machine",
         *     "totaltimeseconds": 3600
         *   },
         *   {
         *     "devicetype": "weight training",
         *     "totaltimeseconds": 2700
         *   }
         * ]
         */


        setData((prevData)=>{
            return {
                ...prevData,
                treadmill: data[0],
                cycling: data[1],
                stairMachine: data[2],
                weightTrainning: data[3]
            }
        });
    };

    useEffect(() => {

        getData()
    });

    return <Grid.Container>
        <Grid xs={12} justify="center">
            <Text h4>Your Activity</Text>

        </Grid>
        <Grid xs={12} justify="center">
            <Dropdown name="days">
                <Dropdown.Button flat color="secondary" css={{tt: "capitalize"}} name='workoutType' required>
                    {selectedDay}
                </Dropdown.Button>
                <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="secondary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={days}
                    items={days}
                    onSelectionChange={(e) => {

                        setDay((currentState) => {
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
