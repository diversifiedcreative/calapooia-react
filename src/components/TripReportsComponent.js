import React, { useState } from 'react';
import { FullImg, SectionHead } from './DisplayModules';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import SubmitTrip from './SubmitTripComponent';
import { postTripReport } from '../serverInteraction/post';
import FetchTrips from '../serverInteraction/FetchTrips';

function TripReports() {
	const [open, setOpen] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	return (
		<>
			<div className="section-cont">
				<SectionHead heading="User Trip Reports" />
				<div className="section">
					<div className="row">
						<div className="col-sm-8">This page provides public access to user-submitted trip reports. Click the button to the right to submit your own report for the benefit and use of other visitors of this website.</div>
						<div className="col-sm-4" display="inline">
							<button onClick={onOpenModal}>Submit Your Trip Report</button>
						</div>
					</div>
				</div>
                <FetchTrips />

			</div>
			<div className="section-cont">
				<FullImg source="img/cala-bend.jpg" caption="Oregon's beautiful Calapooia River" credit="2021 Diversified Creative" />
			</div>
			<Modal open={open} onClose={onCloseModal} center>
				<SubmitTrip closeModal={onCloseModal} postTripReport={postTripReport} />
			</Modal>
		</>
	);
}

export default TripReports;
