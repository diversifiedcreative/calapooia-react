import React, { useState } from 'react';
import { FullImg, SectionHead } from './DisplayModules';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import SubmitTrip from './SubmitTripComponent';
import { postTripReport } from '../serverInteraction/post';

function TripReports() {
	const [open, setOpen] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	return (
		<>
			<div className="section-cont">
				<SectionHead heading="User Trip Reports" />
				<div className="section">
					<p>This page provides public access to user-submitted trip reports. </p>
				</div>
				<div className="section">
					<button onClick={onOpenModal}>Submit Your Trip Report</button>
				</div>
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