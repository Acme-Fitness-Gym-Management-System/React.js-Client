import {Card, Col, Text} from "@nextui-org/react";
import React from "react";


const ViewClassCard = (props)=>{


    const data = props.data

    return  <Card isHoverable >
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

export default ViewClassCard
