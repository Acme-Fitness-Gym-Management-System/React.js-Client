

import {Button, Checkbox, Dropdown, Grid, Input, Loading, Modal, Spacer, Text} from "@nextui-org/react";
import React, {forwardRef, useImperativeHandle, useState} from "react";
import axios from "axios";


const CheckModal = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => {
        return {
            checkInUser: checkIn,
            checkOutUser:checkOut
        }
    })


    const [loading, setLoading] = useState(false);


    const [visible, setAddClassVisible] = React.useState(false);

    const [data, setData ] = useState({nane:"Check In User",isCheckIn:true,description:"Enter user email to check them in"});


    const checkIn = ()=>{
        setAddClassVisible(true);
        setLoading(false);
        setData({name:"Check In User", isCheckIn: true,description:"Enter user email to check them in"});
    }
    const checkOut = ()=>{
        setAddClassVisible(true);
        setLoading(false);
        setData({name:"Check Out User", isCheckIn: false,description:"Enter user email to check them out"});
    }


    const closeHandler = () => {
        setAddClassVisible(false);
        setLoading(true);

    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        // {
        //     "employeeid": 0,
        //     "locationid": 0,
        //     "type": 0, // 1 for checkin 2 for checkout
        //     "userid": 0
        // }
        const data = {"email":event.target.email.value}
        apiCall(data)


    }

    const apiCall = async (data) => {
        console.log("inside");
        const url= data.isCheckIn?"http://0.0.0.0:8080/checkinRecord":"http://0.0.0.0:8080/checkoutRecord"

        try{
            const response =  await axios.post(url, data)
            alert("User data entered sucessfully");
            setAddClassVisible(false);


        }catch (e){
            alert("OOPs something happened");
        }

        setLoading(false);

    }

    const el = loading ? <Button type="submit"><Loading color='success'/></Button> :
        <Button type="submit">{data.isCheckIn?"Check In":"Check Out"}</Button>



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
                        <Text h3>{data.name}</Text>
                    </Grid>
                    <Grid xs={12} justify={"center"}>
                        <Text h4>{data.description}</Text>
                    </Grid>

                    <Grid xs={12} justify={"center"}>
                        <Input size="lg" clearable bordered type="email" labelPlaceholder="johndoe@company.com" name="email" required/>


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

export default CheckModal;
