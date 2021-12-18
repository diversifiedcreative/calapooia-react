import React, { useState } from 'react';
import { SectionHead, FetchHead } from '../toolComponents/DisplayModules';
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
					<FetchHead
						text="This page provides a moderated database of runnable routes on the Calapooia. Please submit your proposed route with as much detail as possible. Please note that user-submitted routes are not automatically posted, but will be reviewed and edited for clarity and to prevent duplicative entries."
						btnText="Propose a River Route"
						onClick={onOpenModal}
					/>
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
