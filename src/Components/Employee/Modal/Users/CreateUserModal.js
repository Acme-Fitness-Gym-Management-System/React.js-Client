import {Button, Checkbox, Dropdown, Grid, Input, Loading, Modal, Text} from "@nextui-org/react";
import React, {forwardRef, useImperativeHandle, useState} from "react";
import axios from "axios";


const CreateUserModal = forwardRef(({}, ref) => {
    useImperativeHandle(ref, () => {
        return {
            addUser: show
        }
    })

    const [isTrail, setIsTrail] = useState(false);
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

        const data={
            userName :event.target.userName.value,
            password :event.target.password.value,
            email:event.target.email.value,
            isTrail:isTrail,
            membership:isTrail?"1":event.target.membership.value
        }




        apiCall(data)


    }

    const apiCall = async (data) => {
        console.log("inside");
        try{
           const response =  await axios.post("localhost:4000/createUser", data)
            alert("User data entered sucessfully");
            setAddClassVisible(false);


        }catch (e){
            alert("OOPs something happened");
        }

        setLoading(false);

    }

    const el = loading ? <Button type="submit"><Loading color='success'/></Button> :
        <Button type="submit">Submit</Button>


    const months = !isTrail ?  <Grid xs={12} justify={"center"}>
        <Input clearable bordered type="number" labelPlaceholder="Membership" name="membership" min={1} max={12} required />
    </Grid> : ""

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
                        <Text h3>Create User</Text>
                    </Grid>
                    <Grid xs={12} justify={"center"}>
                        <Input clearable bordered labelPlaceholder="User Name" name="userName" required/>
                    </Grid>
                    <Grid xs={12} justify={"center"}>
                        <Input clearable bordered type="email" labelPlaceholder="Email" name="email" required/>

                    </Grid>
                    <Grid xs={12} justify={"center"}>
                        <Input clearable bordered type="password" labelPlaceholder="Password" name="password" required/>

                    </Grid>
                    <Grid xs={12} justify={"center"}>
                        <Checkbox required isSelected={isTrail} onChange={setIsTrail}>checking out a free trail ?</Checkbox>
                    </Grid>

                    {months}

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

export default CreateUserModal;