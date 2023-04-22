import {Button, Card, Grid, Spacer, Text} from "@nextui-org/react";


const UserManagement = () => {
    return <>

        <Grid.Container justify="center">
            <Grid xs={12}>
                <Text h2>User Management</Text>
            </Grid>
            <Grid xs={12}>
                <Card>
                    <Card.Body>
                        <Button> Add User </Button>
                        <Spacer y={1}/>
                        <Button> Checkin User </Button>
                        <Spacer y={1}/>
                        <Button> CheckOut User </Button>
                    </Card.Body>
                </Card>
            </Grid>

        </Grid.Container>


    </>


}


export default UserManagement;
