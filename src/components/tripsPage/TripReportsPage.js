import React, { useState } from 'react';
import { FullImg, SectionHead, FetchHead } from '../toolComponents/DisplayModules';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { SubmitTrip } from '../toolComponents/Forms';
import { postTripReport } from '../../serverInteraction/post';
import { FetchTrips } from '../../serverInteraction/fetch';
import calaWillamette from 'img/cala-willamette.jpg';

function TripReports() {
	const [open, setOpen] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	return (
		<>
			<div className="section-cont">
				<div className="section">
					<SectionHead heading="User Trip Reports" />
					<FetchHead
						text="This page provides public access to user-submitted trip reports. Click the button to the right to submit your own report for the benefit and use of other visitors of this website."
						btnText="Submit Your Trip"
						onClick={onOpenModal}
					/>
					<FetchTrips />
				</div>

				<FullImg
					source={calaWillamette}
					caption="Bryant Park and the mouth of the Calapooia from the Highway 20 bridge over the Willamette at Albany."
					credit="2021 Diversified Creative"
				/>
			</div>
			<Modal open={open} onClose={onCloseModal} center>
				<SubmitTrip closeModal={onCloseModal} postTripReport={postTripReport} />
			</Modal>
		</>
	);
}

export default TripReports;
