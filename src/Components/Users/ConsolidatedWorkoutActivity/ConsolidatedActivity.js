import {useEffect, useState} from "react";
import {Card, Grid, Spacer, Tooltip} from "@nextui-org/react";

const ConsolidatedActivity = (props) => {

    console.log(props.data);
    const [data, setData] = useState([]);

    console.log(data);


    // console.log(len);


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


    useEffect(()=>{
        setData(props.data || [])

    })

    let el =[]
    console.log(data)
    for (let i = 0; i < 11 && data.length>0 ; i++) {
       let t = <Grid.Container key={i} justify="center">

            <Grid xs={4}>

                <Tooltip content={i + 1}>
                    <Card variant="bordered" css={{
                        width: "15px",
                        height: "15px",
                        backgroundColor: data[i].time === 0 ? "#000" : data[i].time > 60 ? "#4F7942 " : data[i].time > 30 ? "#50C878" : "#AFE1AF"
                    }}></Card>
                </Tooltip>
                <Spacer y={1.3}></Spacer>

            </Grid>
            <Grid xs={4}>
                <Tooltip content={i+12}>
                    <Card variant="bordered" css={{
                        width: "15px",
                        height: "15px",
                        backgroundColor: data[i+11].time === 0 ? "#000" : data[i+11].time > 60 ? "#4F7942 " : data[i+11].time > 30 ? "#50C878" : "#AFE1AF"
                    }}></Card>
                </Tooltip>


            </Grid>
            <Grid xs={4}>


                <Tooltip content={i + 22 < data.length ? i + 23 : ""}>
                    {/*<Card variant="bordered" css={{ width: "15px",height:"15px", backgroundColor:data[i].time>60?"#4F7942 ":data[i].time>30?"#50C878":"#AFE1AF"}}></Card>*/}
                    {i + 22 < data.length ? <Card variant="bordered" css={{
                        width: "15px",
                        height: "15px",
                        backgroundColor: data[i+22].time === 0 ? "#000" : data[i+22].time > 60 ? "#4F7942 " : data[i+22].time > 30 ? "#50C878" : "#AFE1AF"
                    }}></Card> : ""}
                </Tooltip>
                <Spacer y={1}></Spacer>
            </Grid>

        </Grid.Container>


        el.push(t)
    }



    return el.map((ob,index)=>ob)


}


export default ConsolidatedActivity
