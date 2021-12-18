export function FullImg({ source, caption, credit }) {
	return (
		<div className="fullImgCont">
			<img className="fullImgImg" src={source} alt="" />
			<div className="row fullImgText">
				<div className="col-9 fullImgCap">
					<p>{caption}</p>
				</div>
				<div className="col-3 fullImgCred">
					<p>&copy; {credit}</p>
				</div>
			</div>
		</div>
	);
}

export function SectionHead({ heading }) {
	return (
		<div className="section-head">
			<h4>{heading}</h4>
			<hr />
		</div>
	);
}

export function RenderRecSite({ recSite }) {
	if (recSite) {
		return (
			<>
				<h5 className="render-head">{recSite.name}</h5>
				<div className="render-row row">
					<div className="render-left col-sm-4">
						<div className="render-sub">
							<strong>Type: </strong>
							{recSite.type}
						</div>
						<div className="render-sub">
							<strong>Location: </strong>
							{recSite.location}
						</div>
					</div>
					<div className="render-right col-sm-7 offset-sm-1">
						<strong>Description: </strong>
						{recSite.description}
					</div>
				</div>
			</>
		);
	}
	return <div />;
}

export function RenderRoute({ route }) {
	if (route) {
		return (
			<>
				<h5 className="render-head">{route.name}</h5>
				<div className="render-row row">
					<div className="render-left col-sm-9">
						<div className="render-sub">
							<strong>Class: </strong>
							{route.class}
						</div>
						<div className="render-sub">
							<strong>Source: </strong>
							{route.source} ({route.sourceType})
						</div>
						<div className="render-desc">
							<strong>Description: </strong>
							{route.description}
						</div>
					</div>
					<div className="render-right col-sm-3 render-btn-col">
						{route.sourceType === 'published' ? (
							<a href={route.url} target="none">
								<button className="route-link-btn">View route at external source</button>
							</a>
						) : (
							<div className="render-no-route-link">Additional info not yet available for user-submitted routes</div>
						)}
					</div>
				</div>
			</>
		);
	}
	return <div />;
}

export function RenderTripReport({ tripReport }) {
	if (tripReport) {
		return (
			<>
				<div className="render-head col-sm-7 offset-1">{tripReport.location}</div>
				<div className="render-row row">
					<div className="render-left col-sm-5">
						<div>
							<strong>Date of Visit:</strong> {tripReport.visitDate}
						</div>

						<div className="render-sub">
							<strong>User: </strong>
							{tripReport.userName} <br />
							<strong>Recommendation: </strong>
							{tripReport.recommend}
						</div>
					</div>
					<div className="render-right col-sm-7">
						<p>{tripReport.tripText}</p>
					</div>
				</div>
			</>
		);
	}
	return <div />;
}

export function FetchHead({ text, btnText, onClick }) {
	return (
		<div className="row fetch-head">
			<div className="col-sm-8">{text}</div>
			<div className="col-sm-4 render-btn-col">
				<button onClick={onClick}>{btnText}</button>
			</div>
		</div>
	);
}
