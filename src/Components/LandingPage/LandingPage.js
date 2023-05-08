import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
import {Button, Card, Container, Grid, Input, Spacer, Text} from "@nextui-org/react";
import LPNavbar from "./LPNavbar";
import AddWorkout from "../Users/workoutTracking/AddWorkout";
import Login from "../Login/Login";
import WorkoutDashboard from "../Users/workoutTracking/WorkoutDashboard";
import UpcomingClassCard from "../Users/Classes/UpcomingClassCard";
import EnrollClass from "../Users/Classes/EnrollClass/EnrollClass";
import Footer from "../Footer/Footer";

const LandingPage = (props)=>{const navigate = useNavigate();
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
        console.log(data);
        if(data.error.length===0){
            // go to home
            console.log("Fk");
            var details = response.data.object;
            details = JSON.parse(details);
            console.log(details);

            if(data.type==="employee") {
                const d = details;

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
                const d = details;

                const el={
                    id:d.id,
                    name:d.name,
                    email:d.email
                }
                console.log(el);

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
    return <>

        <LPNavbar/>

        <Grid.Container>
            <Grid.Container gap={2}>
                <Grid xs={12} justify="center"><Text h2> You're at the right place to get FIT!</Text></Grid>
                <Grid xs={8}>
                    <Card isHoverable variant="bordered">
                        <Card.Body>
                            <Grid.Container>
                                <Grid xs={12} justify="center">
                                    <Text h3>ACME Fitness</Text>
                                </Grid>
                                <Grid xs={6} justify="center">
                                    {/*<WorkoutDashboard/>*/}
                                    <Text h3>Welcome to the ACME Fitness. </Text>
                                    <Text ></Text>
                                    <Text p>Hello world</Text>
                                    {/*<h3>Welcome to the ACME Fitness. </h3>*/}
                                    {/*<Grid  justify="center"><p>A gym with world class facilities.</p></Grid>*/}
                                    {/*<p>A gym with world class facilities.</p>*/}

                                </Grid>
                                <Grid xs={6}>
                                    <Grid.Container>
                                        {/*<Grid xs={12} justify="center">*/}
                                        {/*    <Text h4>Upcoming Classes</Text>*/}
                                        {/*</Grid>*/}

                                        {/*<UpcomingClassCard/>*/}

                                    </Grid.Container>

                                </Grid>

                            </Grid.Container>

                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Login/>
                </Grid>

            </Grid.Container>
            <Grid.Container gap={2}>
                <Grid xs={12} justify="center"><Text h2> Available Classes</Text></Grid>


                <Grid xs={12} justify="center"><EnrollClass/></Grid>


            </Grid.Container>

        </Grid.Container>
        <Footer/>

    </>
}
export default LandingPage