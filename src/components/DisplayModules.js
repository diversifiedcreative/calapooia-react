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
