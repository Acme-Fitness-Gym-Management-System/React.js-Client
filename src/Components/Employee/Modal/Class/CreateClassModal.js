import {Button, Dropdown, Grid, Input, Loading, Modal, Text} from "@nextui-org/react";
import React, {forwardRef, useImperativeHandle, useState} from "react";
import axios from "axios";


const CreateClassModal = forwardRef(({}, ref) => {
    useImperativeHandle(ref, () => {
        return {
            showModal: show
        }
    })

    const days = [{key: "sunday"}, {key: "monday"}, {key: "tuesday"}, {key: "wednesday"}, {key: "thursday"}, {key: "friday"}, {key: "saturday"}];

    // hardcoded these locations for now
    const locations = [{key: "San jose", value: 0}, {key: "san fransico", value: 1}, {
        key: "Sacramento",
        value: 2
    }, {key: "Milpitas", value: 3}, {key: "Sunnyvale", value: 4}, {key: "Santa Clara", value: 5}, {
        key: "San Mateo",
        value: 6
    }];

    const [selected, setSelected] = React.useState(new Set(["Day of the week"]));

    const selectedValue = React.useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );

    const [location, setLocation] = React.useState(new Set(["Choose Location"]));

    const locationValue = React.useMemo(
        () => Array.from(location).join(", ").replaceAll("_", " "),
        [location]
    );


    const [loading, setLoading] = useState(false);


    const [visible, setAddClassVisible] = React.useState(false);

    const show = () => {
        setAddClassVisible(true);
        setLoading(false);

        // send API CALL

    }
    const closeHandler = () => {
        setAddClassVisible(false);
        setLoading(true);

    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const location = event.target.location.children[1].innerHTML;
        const day = event.target.day.children[1].innerHTML;


        if (day === "Day of the week") {

            alert("Day of week is required");
        } else if (location === "Choose Location") {
            // show alert dialog
            alert("location is required");
        } else {

            setLoading(true);

            const data = {
                className: event.target.className.value,
                instructorName: event.target.instructorName.value,
                startDate: event.target.startDate.value,
                endDate: event.target.endDate.value,
                startTime: event.target.startTime.value,
                endTime: event.target.endTime.value,
                location: location,
                day: day
            }

            // do some validations on data


              apiCall(data);
            // make a rest API call.
        }


    }

    const apiCall = async (data) => {
        console.log("inside");
        try{
            await axios.post('/', data)
        }catch (e){
            alert("OOPs something happened");
        }

        setLoading(false);

    }

    const el = loading ? <Button type="submit"><Loading color='success'/></Button> :
        <Button type="submit">Submit</Button>

    return <>
        <Modal
            closeButton
            preventClose
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
        >
            <form onSubmit={formSubmitHandler}>


                <Grid.Container gap={2} justify={'center'}>
                    <Grid xs={12} justify={"center"}>
                        <Text h3>Add Class</Text>
                    </Grid>
                    <Grid xs={12} justify={"center"}>
                        <Input clearable bordered labelPlaceholder="Class Name" name="className" required/>
                    </Grid>
                    <Grid xs={12} justify={"center"}>
                        <Input clearable bordered labelPlaceholder="Instructor Name" name="instructorName" required/>

                    </Grid>
                    <Grid xs={6} justify={"center"}>
                        <Input
                            clearable bordered
                            label="Start Date"
                            type="date"
                            required
                            name="startDate"
                        />
                    </Grid>
                    <Grid xs={6} justify={"center"}>
                        <Input
                            clearable bordered
                            label="End Date"
                            type="date"
                            required
                            name="endDate"
                        />
                    </Grid>
                    <Grid xs={6} justify={"center"}>
                        <Input
                            clearable bordered
                            label="Start Time"
                            type="time"
                            name="startTime"
                            required
                        />
                    </Grid>
                    <Grid xs={6} justify={"center"}>
                        <Input
                            clearable bordered
                            label="End Time"
                            type="time"
                            name="endTime"
                            required
                        />
                    </Grid>
                    <Grid xs={12} justify={"center"}>
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

                    <Grid xs={12} justify={"center"}>
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
                    <Grid xs={4} justify={"center"}>

                    </Grid>
                    <Grid xs={4} justify={"center"}>
                        {el}
                    </Grid>
                    <Grid xs={4} justify={"center"}>

                    </Grid>


                </Grid.Container>

            </form>

        </Modal>
    </>


});

export default CreateClassModal;
