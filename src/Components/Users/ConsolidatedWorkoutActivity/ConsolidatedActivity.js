import {useEffect, useState} from "react";
import {Card, Dropdown, Grid, Spacer, Text, Tooltip} from "@nextui-org/react";

const ConsolidatedActivityDashboard = (props)=>{


const [data, setData] = useState(props.data);




const len =30


        /**
         *
         * lets have 3 intensities of green color
         * #AFE1AF => for 15 to 30 mins
         * #50C878 => for 30 to 60 mins
         * #4F7942 => for 60 mins+
         *
         *
         *
          */
return data.map((d,i)=> <Grid.Container key={i} justify="center">


        <Grid xs={4}>

<Tooltip content={i+1}>
    <Card variant="bordered" css={{ width: "15px",height:"15px", backgroundColor:data[i].workoutTime==0?"#000":data[i].workoutTime>60?"#4F7942 ":data[i].workoutTime>30?"#50C878": "#AFE1AF"}}></Card>

</Tooltip>
            <Spacer y={1.3}></Spacer>

        </Grid>
        <Grid xs={4}>
            <Tooltip content={i+11}>
                <Card variant="bordered" css={{ width: "15px",height:"15px", backgroundColor:data[i].workoutTime>60?"#4F7942 ":data[i].workoutTime>30?"#50C878":"#AFE1AF"}}></Card>
            </Tooltip>



        </Grid>
        <Grid xs={4}>

            {/*<Tooltip content={i+22<=len?i+22:""}>*/}
            {/*    {i+22 <=len?<Card variant="bordered" css={{ mw: "15px",mh:"15px",backgroundColor:data[i].workoutTime>60?"#4F7942 ":data[i].workoutTime>30?"#50C878":"#AFE1AF" }}></Card>:""}*/}
            {/*</Tooltip>*/}
            <Tooltip content={i+22<=len?i+22:""}>
                {/*<Card variant="bordered" css={{ width: "15px",height:"15px", backgroundColor:data[i].workoutTime>60?"#4F7942 ":data[i].workoutTime>30?"#50C878":"#AFE1AF"}}></Card>*/}
                {i+22<=len?<Card variant="bordered" css={{ width: "15px",height:"15px", backgroundColor:data[i].workoutTime>60?"#4F7942 ":data[i].workoutTime>30?"#50C878":"#AFE1AF"}}></Card>:""}
            </Tooltip>
            <Spacer y={1}></Spacer>


        </Grid>

    </Grid.Container>
)






}



export  default ConsolidatedActivityDashboard
