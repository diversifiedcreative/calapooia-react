import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import axios from 'axios';
import { baseUrl } from '../config';

function RenderRoute ({route}) {
    if(route) {
        return(
            <div className="render-cont container">
                <div className="render-row row">
                    <div className="render-left col-sm-8">
                        <div className="render-head">{route.name}</div>
                        <div className="render-sub"><strong>Class: </strong>{route.class} | <strong>Location: </strong>{route.source} ({route.sourceType})</div>
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

function FetchRoutes() {
	const [routes, setRoutes] = useState([]);

	useEffect(() => {
		axios
			.get(`${baseUrl}routes`)
			.then((res) => {
				console.log(res);
				setRoutes(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			{routes.map((route) => (
				<Container key={route.id}>
					<Row tag="li">
						<Col>
							<RenderRoute route={route} />
						</Col>
					</Row>
				</Container>
			))}
		</>
	);
}

export default FetchRoutes;
