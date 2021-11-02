import React from 'react';
import { FullImg, SectionHead } from './DisplayModules';
import RecSites from './RecSitesComponent';
import Routes from './RoutesComponent'
import './resources.css';

function Resources() {
	return (
		<>
			<div className="section-cont">
				<SectionHead heading="Calapooia River Resources" />
				<div className="section">
					<p>
						This page provides a variety of resources to aid in the public enjoyment of the Calapooia River. These materials are still under
						construction. Additions under development include:{' '}
					</p>
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
				<FullImg source="img/cala-bend.jpg" caption="Oregon's beautiful Calapooia River" credit="2021 Diversified Creative" />
			</div>
		</>
	);
}

export default Resources;
