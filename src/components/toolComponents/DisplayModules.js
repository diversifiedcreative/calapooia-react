export function FullImg({source, caption, credit}) {
    return (
        <div className="fullImgCont">
            <img className="fullImgImg" src={source} alt=""/>
            <div className="row fullImgText">
                <div className="col-9 fullImgCap">
                    <p>{caption}</p>
                </div>
                <div className="col-3 fullImgCred">
                    <p><i className="fa fa-copyright" />{credit}</p>
                </div>
            </div>
        </div>
    );
}

export function SectionHead({heading}) {
    return (
        <div className="section-head">
            <h4>{heading}</h4>
            <hr/>
        </div>
    );
}

export function RenderRecSite ({recSite}) {
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

export function RenderRoute ({route}) {
    if(route) {
        return(
            <div className="render-cont container">
                <div className="render-row row">
                    <div className="render-left col-sm-8">
                        <div className="render-head">{route.name}</div>
                        <div className="render-sub"><strong>Class: </strong>{route.class} | <strong>Location: </strong>{route.source} ({route.sourceType})</div>
                    </div>
                    <div className="render-right col-sm-4">
                        <a href={route.url} target="none"><button>Click to view route</button></a> 
                    </div>
                </div>
            </div>
        );
    }
    return <div />;
}

export function RenderTripReport({ tripReport }) {
	if (tripReport) {
		return (
			<div className="render-cont container">
				<div className="render-row row">
					<div className="render-head col-sm-7 offset-1">{tripReport.location}</div>
                    <div><strong>Date of Visit:</strong> {tripReport.visitDate}</div>
				</div>
				<div className="render-row row">
					<div className="render-left col-sm-5">
						<div className="render-sub">
							<strong>User: </strong>
							{tripReport.userName} <br /><strong>Recommendation: </strong>
							{tripReport.recommend} ({tripReport.visitDate})
						</div>
					</div>
					<div className="render-right col-sm-7">
						<p>{tripReport.tripText}</p>
					</div>
				</div>
			</div>
		);
	}
	return <div />;
}