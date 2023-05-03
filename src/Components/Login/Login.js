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


export default () => {


    const navigate = useNavigate();
    let mes=false;
    let errorMessage="";
    const [error, setError] = useState(mes);

    const [message, setMessage] = useState(errorMessage);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');


    const submitHandler = async()=>{

        // console.log("entered submit handler");
        validateEmail(email);
        validatePassword(password);

        if(await authenticate(email,password))
        {
            console.log("authenticated successfully");
        }else {

            console.log("authentication failed");
        }

    }

    const validateEmail = (email) => {
        if(email ==="")
        {
            setEmailError('Enter Email address!')
        }
    }

    const validatePassword = (password) => {
        if(password==="")
        {
            setPasswordError('Enter Password!')
        }else if(password.length < 6)
        {
            setPasswordError('Password must contain atleast 6 characters!')
        }
    }

    const handleEmailChange = (event) => {
        setEmailError('');
        setSuccessMsg('');
        setEmail(event.target.value);
    }

    const handlePassChange = (event) => {
        setPasswordError('');
        setSuccessMsg('');
        setPassword(event.target.value)
    }

    const authenticate = async(email, pass)=>{

        const response = await axios.post("http://localhost:8080/login",{
            email:email,
            password:pass
        });

        const data = response.data;

        if(data.error==="Success"){
            // go to home
            var details = response.data.object;
            details = JSON.parse(details);


            if(data.type==="employee") {
                const d = details.object;

                const el={
                    id:d.id,
                    locationid:d.locationid,
                    name:d.name,
                    email:d.email
                }


                sessionStorage.setItem('employee', JSON.stringify(el));

                navigate("/employee");
            }
            else{
                const d = details.object;

                const el={
                    id:d.id,
                    name:d.name,
                    email:d.email
                }
                sessionStorage.setItem('user', JSON.stringify(el));

                navigate("/user");
            }


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
                        onChange={handleEmailChange}
                    />
                    {/*<Spacer y={1} />*/}
                    <br/>
                    {emailError&&<div>{emailError}</div>}
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color={"success"}
                        size="lg"
                        placeholder="Password"
                        onChange={handlePassChange}
                    />
                    <br/>

                    {/*<Spacer y={1} />*/}

                    {passwordError&&<div>{passwordError}</div>}

                    {/*<Row justify="space-between">*/}
                    {/*    <Checkbox>*/}
                    {/*        <Text size={14}>Remember me</Text>*/}
                    {/*    </Checkbox>*/}
                    {/*    <Text size={14}>Forgot password?</Text>*/}
                    {/*</Row>*/}
                    <Spacer y={1} />
                    <Button variant="primary" onPress={submitHandler}>Sign in</Button>
                </Card>
                {displayError(error,message)}

            </Container>
        </div>
    );
}
