import {Button, Card, Col, Text} from "@nextui-org/react";
import {useState} from "react";


const EnrollClassCard = (props)=>{


    const [data, setData] = useState(props.data);

    const clickHandler = ()=>{

        // props.id is the id reference of the class
        // todo handle what happens once a user clicks enroll
        console.log(props.id);
    }


    return   <Card isHoverable >
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>

            <Col>

                <Text h2 color="white">
                    {data.className}
                </Text>
                <Text size={18} weight="bold" transform="uppercase" color="#ffffffAA">
                    {data.time}
                </Text>
                <Text size={18} weight="bold" transform="uppercase" color="#ffffffAA">
                    {data.capacity} people
                </Text>

            </Col>
            <Button size="xs" type="submit" style={{position: 'absolute',
                right:0,
                bottom:0}} onClick={clickHandler}>Enroll</Button>
        </Card.Header>
        <Card.Image
            src="https://nextui.org/images/card-example-4.jpeg"
            objectFit="cover"
            width="100%"
            height={200}
            alt="Card image background"
        />
    </Card>

}


export default EnrollClassCard
