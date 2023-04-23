import React from 'react';
import {
    Card,
    Spacer,
    Button,
    Text,
    Input,
    Row,
    Checkbox,
    Container,
} from '@nextui-org/react';
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


export default function Login() {
    console.log("entered login");

    const navigate = useNavigate();
    let mes=false;
    let errorMessage="";
    const [error, setError] = useState(mes);

    const [message, setMessage] = useState(errorMessage);

    const submitHandler = async(event)=>{

        event.preventDefault();
        console.log("entered submit handler");
        const email = event.target.email.value;
        const pass = event.target.password.value;

        if(await authenticate(email,pass))
        {
            console.log("authenticated successfully");
        }else {

            console.log("authentication failed");
        }



    }

    const authenticate = async(email, pass)=>{
        const response = await axios.post("http://localhost:8080/login",{
            email:email,
            password:pass
        });

        const data = response.data;

        if(data.error==="Success"){
            // go to home
            var userdetails = response.data.object;
            userdetails = JSON.parse(userdetails);
            var id = userdetails.id;
            var username = userdetails.username;

            sessionStorage.setItem('userId', id);
            sessionStorage.setItem('userName', username);
            console.log(data.name);
            if(data.type==="employee")
                navigate("/employee");
            else
                navigate("/user");

            return true;
        }else{
            // display error.
            setMessage(response.data.error);
            setError(true);
            return false;
        }

    }

    const displayError = (flag)=>{
        if(flag)
            return  <Container style={{marginTop:"5%"}}>
                <Text key='danger' variant='danger'>
                    {message}
                </Text>
            </Container>
        else <> </>
    }


    return (
        <div>
            <Container
                display="flex"
                alignItems="center"
                justify="center"
                color={"white"}
                css={{ minHeight: '100vh' }}
            >
                <Card css={{ mw: '420px', p: '20px' }} onSubmit={submitHandler}>
                    <Text
                        size={24}
                        color={"success"}
                        weight="bold"
                        css={{
                            as: 'center',
                            mb: '20px',
                        }}
                    >
                        Gym Login
                    </Text>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                    />
                    <Spacer y={1} />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color={"success"}
                        size="lg"
                        placeholder="Password"
                    />
                    {/*<Row justify="space-between">*/}
                    {/*    <Checkbox>*/}
                    {/*        <Text size={14}>Remember me</Text>*/}
                    {/*    </Checkbox>*/}
                    {/*    <Text size={14}>Forgot password?</Text>*/}
                    {/*</Row>*/}
                    <Spacer y={1} />
                    <Button variant="primary" type="submit" onSubmit={submitHandler}>Sign in</Button>
                </Card>
                {displayError(error,message)}

            </Container>
        </div>
    );
}