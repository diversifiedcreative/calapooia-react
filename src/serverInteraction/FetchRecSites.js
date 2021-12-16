import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { baseUrl } from 'config';

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

function FetchRecSites() {
	const [recSites, setRecSites] = useState([]);

	useEffect(() => {
		axios
			.get(`${baseUrl}recsites`)
			.then((res) => {
				console.log(res);
				setRecSites(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			{recSites.map((recSite) => (
				<Container key={recSite._id}>
					<Row tag="li">
						<Col>
							<RenderRecSite recSite={recSite} />
						</Col>
					</Row>
				</Container>
			))}
		</>
	);
}

export default FetchRecSites;
