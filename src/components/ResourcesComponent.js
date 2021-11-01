import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FullImg, SectionHead } from './DisplayModules';
import { routes, recSites } from './dataArrays'
import './resources.css';

const routesList = routes.map(route => {
    return (
        <>
            <Container key={route.id}>
                <Row tag="li">
                    <Col>
                        <RenderRoute route={route}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
})

const recSitesList = recSites.map(recSite => {
    return (
        <Container key={recSite.id}>
            <Row tag="li">
                <Col>
                    <RenderRecSite recSite={recSite}/>
                </Col>
            </Row>
        </Container>
    )
})

function RenderRoute ({route}) {
    if(route) {
        return(
            <div className="render-cont container">
                <div className="render-row row">
                    <div className="render-left col-sm-8">
                        <div className="render-head">{route.name}</div>
                        <div className="render-sub"><strong>Class: </strong>{route.class} | <strong>Source: </strong>{route.source} ({route.sourceType})</div>
                    </div>
                    <div className="render-right col-sm-4">
                        <a href={route.url} target="none"><Button>Click to view route</Button></a> 
                    </div>
                </div>
            </div>
        );
    }
    return <div />;
}

function Routes() {
    return (
        <>
            <div className="section-cont">
                <SectionHead heading="River Routes" />
                <div className="row">
                    {routesList}
                </div>
            </div>
        </>
    );
}

function RenderRecSite ({recSite}) {
    if(recSite) {
        return(
            <div className="render-cont container">
                <div className="render-row row">
                    <div className="render-left col-sm-4">
                        <div className="render-head">{recSite.name}</div>
                        <div className="render-sub"><strong>Type: </strong>{recSite.type} | <strong>Location: </strong>{recSite.location}</div>
                    </div>
                    <div className="render-right col-sm-7 offset-sm-1">
                        {recSite.description}
                    </div>
                </div>
            </div>
        );
    }
    return <div />;
}

function RecSites() {
    return (
        <>
            <div className="section-cont">
                <SectionHead heading="Recreation Sites" />
                <div className="row">
                    {recSitesList}
                </div>
            </div>
        </>
    );
}

function Resources() {
    return(
        <>
            <div className="section-cont">
                <SectionHead heading="Calapooia River Resources" />
                <div className="section">
                    <p>This page provides a variety of resources to aid in the public enjoyment of the Calapooia River. These materials are still under construction. Additions under development include: </p>
                    <ul>
                        <li>External Links to relevant other websites</li>
                        <li>Linkage between locations of 'River Routes' and 'Recreation Sites' and the Explore Map of this website</li>
                        <li>Detailed pictures for all locations which will aid users in finding put-in/take-out locations</li>
                    </ul>
                </div>
            </div>
            <Routes />
            <RecSites />
            <div className="section-cont">
                <FullImg source="img/cala-bend.jpg" 
                    caption="Oregon's beautiful Calapooia River"
                    credit="2021 Diversified Creative"
                />
            </div>
        </>
    );
}

export default Resources;