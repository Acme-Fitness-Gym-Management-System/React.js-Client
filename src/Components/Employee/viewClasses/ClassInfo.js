import {Dropdown, Grid, Text} from "@nextui-org/react";
import React, {useState} from "react";
import EnrollClassCard from "../../Users/Classes/EnrollClass/EnrollClassCard";
import ViewClassCard from "./ViewClassCard";


const ClassInfo = ()=>{

    const days=[{key:"Monday"},{key:"Tuesday"},{key:"Wednesday"},{key:"Thursday"},{key:"Friday"},{key:"Saturday"}]

    const [selected, setSelected] = React.useState(new Set(["Sunday"]));

    const selectedValue = React.useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );


    const [data, setData] = useState([{className:"Hello"},{className:"world"},{}])


    return <Grid.Container gap={2}>
        <Grid xs={12} justify="center"> <Text h2> Classes Information </Text></Grid>
        <Grid xs={10}> </Grid>
        <Grid xs={2}><Dropdown name="day">
            <Dropdown.Button flat color="secondary" css={{tt: "capitalize"}} name='day'>
                {selectedValue}
            </Dropdown.Button>
            <Dropdown.Menu
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}
                items={days}
            >

                {(item) => (
                    <Dropdown.Item>
                        {item.key}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown></Grid>


        {data.map((d,i)=> <Grid xs={3} key={i}>

            <ViewClassCard data={d} id={"hello world "+i}/>

        </Grid>)}






    </Grid.Container>


}


export default ClassInfo
