import {Button, Grid, Text} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";


const Error = ()=>{

    const navigate = useNavigate();

    const sendHome = ()=>{

        const employee = sessionStorage.employee
        const user = sessionStorage.user





        if(!employee)
            navigate("/employee");
        if(!user)
            navigate("/user");

        navigate("/");



    }


    return (
        <Grid.Container gap={4} >

            <Grid xs={12} justify='center'>
                <Text h1>Hmm, looks like a 404!.</Text>
            </Grid>
            <Grid xs={4} >

            </Grid>
            <Grid xs={4} justify='center'>
                <Button onClick={sendHome}>Take Me Back!!</Button>
            </Grid>
            <Grid xs={4}> </Grid>


        </Grid.Container>
    )

}


export default Error
