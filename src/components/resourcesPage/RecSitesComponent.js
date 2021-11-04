import React, { useState } from 'react';
import { SectionHead } from '../toolComponents/DisplayModules';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import FetchRecSites from '../../serverInteraction/FetchRecSites';
import SubmitRecSite from './SubmitRecSiteComponent';
import { postUserRecSite } from '../../serverInteraction/post';

function RecSites() {
	const [open, setOpen] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);
	return (
		<>
			<div className="section-cont">
				<SectionHead heading="Calapooia Recreation Sites" />
				<div className="section">
					<div className="row">
						<div className="col-sm-8">
							This page provides public access to user-submitted trip reports. Click the button to the right to submit your own report for the
							benefit and use of other visitors of this website.
						</div>
						<div className="col-sm-4" display="inline">
							<button onClick={onOpenModal}>Propose a Rec Site</button>
						</div>
					</div>
					<FetchRecSites />
				</div>
			</div>
			<Modal open={open} onClose={onCloseModal} center>
				<SubmitRecSite closeModal={onCloseModal} postUserRecSite={postUserRecSite} />
			</Modal>
		</>
	);
}

export default RecSites;