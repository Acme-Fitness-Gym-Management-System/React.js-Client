import {Button, Card, Dropdown, Grid, Input, Loading, Text} from "@nextui-org/react";
import React, {useState} from "react";


const AddWorkout = ()=>{

    const workouts = [{key:"Treadmill"},{key:"Cycling"},{key:"Stair Machine"},{key:"Weight Training"}];
    const [workout, setWorkout] = React.useState(new Set(["Choose a Workout"]));

    const workoutValue = React.useMemo(
        () => Array.from(workout).join(", ").replaceAll("_", " "),
        [workout]
    );
    const [loading, setLoading] = useState(false);

    const el = loading ? <Button type="submit"><Loading color='success'/></Button> :
        <Button type="submit">Submit</Button>




    const formSubmitHandler = (event)=>{
        event.preventDefault()


        const type = event.target.workoutType.value

        if(type==="Choose a Workout")
            alert("Please choose a workout type");
        else{
            const data = {
                userId:"",
                workoutType:type,
                startTime:event.target.startTime.value,
                endTime:event.target.endTime.value
            }
            console.log(data);
            apiCall(data)
        }
    }


    const apiCall = (data)=>{



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
