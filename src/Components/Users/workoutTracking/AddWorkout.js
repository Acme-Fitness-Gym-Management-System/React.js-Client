import {Button, Card, Dropdown, Grid, Input, Loading, Text} from "@nextui-org/react";
import React, {useState} from "react";
import axios from "axios";

//TODO :: refresh Record activity form after submiting
const AddWorkout = ()=>{

    const workouts = [{key:"Treadmill",value:1},{key:"Cycling",value:2},{key:"Stair Machine",value:3},{key:"Weight Training",value:4}];
    const [workout, setWorkout] = React.useState(new Set(["Choose a Workout"]));

    const workoutValue = React.useMemo(
        () => Array.from(workout).join(", ").replaceAll("_", " "),
        [workout]
    );
    const [loading, setLoading] = useState(false);

    const el = loading ? <Button type="submit"><Loading color='success'/></Button> :
        <Button type="submit">Submit</Button>

    const user = JSON.parse(sessionStorage.user)


    const formSubmitHandler = (event)=>{
        event.preventDefault()


        const type = event.target.workoutType.children[1].innerHTML

        console.log(type);

        if(type==="Choose a Workout")
            alert("Choose a workout type");
        else{


            let dp = workouts.filter((el) => {
                return el.key === type
            })

            let startTime = event.target.startTime.value
            let endTime = event.target.endTime.value

            if(endTime<startTime)
                alert("End Time is less than start Time please correct!.");
            else{
                const data = {
                    userid:user.id,
                    deviceid:dp[0].value,
                    start:startTime,
                    end:endTime
                }
                console.log(data);
                apiCall(data)
            }


        }
    }


    // http://gym-backend-autoscale-group-1-2059727889.us-east-1.elb.amazonaws.com:8080/userActivity (post)
    const apiCall = async (data)=>{


        setLoading(true);

        try{
            console.log(JSON.stringify(data));
            await axios.post("http://gym-backend-autoscale-group-1-2059727889.us-east-1.elb.amazonaws.com:8080/userActivity", JSON.stringify(data) )
            alert("Data Submitted sucessfully")



        }catch (e){
            console.log(e);
            alert("OOps something happened")
        }

        setLoading(false);

    }

    return  <Card isHoverable variant="bordered" >
        <Card.Body>
            <form onSubmit={formSubmitHandler}>
            <Grid.Container gap={2} >

                <Grid xs={12} justify="center">
                    <Text h3>Track your workout.</Text>
                </Grid>

                <Grid xs={12} justify="center">
                    <Dropdown name="location">
                        <Dropdown.Button flat color="secondary" css={{tt: "capitalize"}} name='workoutType' required>
                            {workoutValue}
                        </Dropdown.Button>
                        <Dropdown.Menu
                            aria-label="Single selection actions"
                            color="secondary"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={workouts}
                            onSelectionChange={setWorkout}
                            items={workouts}

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
                    <Input
                        clearable bordered
                        label="Start Time"
                        type="time"
                        name="startTime"
                        required
                    />
                </Grid>
                <Grid xs={6} justify="center">
                    <Input
                        clearable bordered
                        label="End Time"
                        type="time"
                        name="endTime"
                        required
                    />
                </Grid>
                <Grid xs={12} justify="center">
                    {el}
                </Grid>


            </Grid.Container>
            </form>

        </Card.Body>
    </Card>


}


export default AddWorkout;
