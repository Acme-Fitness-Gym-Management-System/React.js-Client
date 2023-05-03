import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createTheme, NextUIProvider} from '@nextui-org/react';
import EmployeeDashboard from "./Components/Employee/EmployeeDashboard";
import CustomerDashboard from "./Components/Users/CustomerDashboard";
import Login from "./Components/Login/Login";



const theme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
        colors: {
            // brand colors
            primaryLight: '$green200',
            primaryLightHover: '$green300',
            primaryLightActive: '$green400',
            primaryLightContrast: '$green600',
            primary: '#0072F5',
            primaryBorder: '$green500',
            primaryBorderHover: '$green600',
            primarySolidHover: '$green700',
            primarySolidContrast: '$white',
            primaryShadow: '$green500',

            gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
            link: '#5E1DAD',

            // you can also create your own color
            myColor: '#ff4ecd'

            // ...  more colors
        },
        space: {},
        fonts: {}
    }
})

function App() {
    return (


        <NextUIProvider theme={theme}>


            <BrowserRouter>

                <Routes>
                    {/*todo*/}


                    <Route path='/employee/analytics' element={<EmployeeDashboard/>}/>

                    <Route path='/employee/userManagement' element={<EmployeeDashboard/>}/>

                    <Route path='/employee/classManagement' element={<EmployeeDashboard/>}/>

                    <Route path='/dashboard' element={<CustomerDashboard/>}/>

                    {/*<Route path='/home' element={<Landing/>}/>*/}

                    <Route path='/login' element={<Login/>}/>



                </Routes>
            </BrowserRouter>
        </NextUIProvider>


    );
}

export default App;
