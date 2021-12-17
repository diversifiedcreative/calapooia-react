import React, { useState } from 'react';
import { SectionHead } from '../toolComponents/DisplayModules';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { FetchRoutes } from '../../serverInteraction/fetch';
import { SubmitRoute } from '../toolComponents/Forms';
import { postUserRoute } from '../../serverInteraction/post';

function Routes() {
	const [open, setOpen] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);
	return (
		<>
			<div className="section-cont">
				<SectionHead heading="Calapooia River-Run Routes" />
				<div className="section">
					<div className="row">
						<div className="col-sm-8">
							This page provides public access to user-submitted trip reports. Click the button to the right to submit your own report for the
							benefit and use of other visitors of this website.
						</div>
						<div className="col-sm-4" display="inline">
							<button onClick={onOpenModal}>Propose a River Route</button>
						</div>
					</div>

					<FetchRoutes />
				</div>
			</div>
			<Modal open={open} onClose={onCloseModal} center>
				<SubmitRoute closeModal={onCloseModal} postUserRoute={postUserRoute} />
			</Modal>
		</>
	);
}

export default Routes;
