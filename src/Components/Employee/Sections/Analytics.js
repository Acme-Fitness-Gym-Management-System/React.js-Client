import EmployeeNavbar from "../Navbar/EmployeeNavbar";
import {Grid, Text} from "@nextui-org/react";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
import React from "react";

{/*const data = [*/}
{/*    {*/}
{/*        name: 'Monday',*/}
{/*        classes: 4*/}
{/*    },*/}
{/*    {*/}
//         name: 'Tuesday',
{/*        classes: 3*/}
{/*    },*/}
{/*    {*/}
{/*        name: 'Monday',*/}
{/*        classes: 4*/}
//     },
//     {
//         name: 'Tuesday',
//         classes: 3
//     },
//     {
{/*        name: 'Wednesday',*/}
{/*        classes: 2*/}
{/*    },*/}
{/*    {*/}
//         name: 'Thursday',
//         classes: 2
//     },
//     {
//         name: 'Friday',
//         classes: 1
//     },
//     {
//         name: 'Saturday',
//         classes: 2
//     },
//     {
//         name: 'Sunday',
//         classes: 3
//     },
// ];

const Analytics = () => {
    return <>

        <Grid.Container gap={2} justify="center">
            <Grid xs={3}></Grid>

            <Grid xs={6} justify="center" gap={2}>


                <Text h2>Analytics Dashboard</Text>


            </Grid>
            <Grid xs={3}>
            </Grid>
        </Grid.Container>
        <Grid.Container gap={2} justify="center">
            <Grid >
                <BarChart

                    width={1000}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="classes" fill="#82ca9d" /> {/*8884d8*/}
                </BarChart>
        </Grid>

    </Grid.Container>






    </>


}


export default Analytics;
