import React, { useState } from 'react';
import { SectionHead, FetchHead } from '../toolComponents/DisplayModules';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { FetchRecSites } from '../../serverInteraction/fetch';
import { SubmitRecSite } from '../toolComponents/Forms';
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
                <FetchHead
						text="This page provides a moderated database of recreation sites along the Calapooia. Please submit your site proposal with as much detail as possible. Note that user-submitted sites are not automatically posted, but are reviewed, edited, and curated for clarity, to prevent duplicative entries, and to ensure safety/legality of access."
						btnText="Propose a Rec Site"
						onClick={onOpenModal}
					/>
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