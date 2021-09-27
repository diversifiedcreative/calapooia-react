import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const routes = [
    {
        id: 0,
        name: 'National Forest to end of pavement',
        sourceType: 'published',
        source: 'American Whitewater',
        class: '2-4',
        url: 'https://www.americanwhitewater.org/content/River/detail/id/3038/'
    },
    {
        id: 1,
        name: 'End of pavement to McClun Wayside',
        sourceType: 'published',
        source: 'American Whitewater',
        class: '2-3',
        url: 'https://www.americanwhitewater.org/content/River/detail/id/1490/'
    },
    {
        id: 2,
        name: 'McClun Wayside to McKercher Park',
        sourceType: 'published',
        source: 'American Whitewater',
        class: '2',
        url: 'https://www.americanwhitewater.org/content/River/detail/id/1491/'
    },
    {
        id: 3,
        name: 'McKercher Park to Brownsville',
        sourceType: 'published',
        source: 'American Whitewater',
        class: '1',
        url: 'https://www.americanwhitewater.org/content/River/detail/id/3039/'
    },
    {
        id: 4,
        name: 'Queen Avenue to Willamette River',
        sourceType: 'user-submitted',
        source: 'Diversifed Creative',
        class: '1',
        url: '/userRoute1'
    }

];

function RenderRoute ({route}) {
    if(route) {
        return(
                <Card>
                    <CardBody>
                        <CardTitle>{route.name}</CardTitle>
                        <CardSubtitle><strong>Class: </strong>{route.class} | <strong>Source: </strong>{route.source} ({route.sourceType})</CardSubtitle>
                        <a href={route.url} target="none"><Button>Click to view route</Button></a>
                    </CardBody>
                </Card>
        );
    }
    return <div />;
}


const routesList = routes.map(route => {
    return (
        <Container key={route.id}>
            <Row tag="li">
                <Col>
                    <RenderRoute route={route}/>
                </Col>
            </Row>
        </Container>
    )
})



function Resources() {
    return(
        <div>
            <h2>RESOURCES: Welcome to the Calapooia River</h2>
            <h3>River Navigation Routes</h3>
            <div className="row">
                {routesList}
            </div>

        </div>
    );
}

export default Resources;