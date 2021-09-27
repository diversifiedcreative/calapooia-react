import React from 'react';
import 'font-awesome/css/font-awesome.css';
import './river.css'

function FullImg({source, caption, credit}) {
    return (
        <div className="fullImgCont">
            <img className="fullImgImg" src={source} alt=""/>
            <div className="row fullImgText">
                <div className="col-8 fullImgCap">
                    <p>{caption}</p>
                </div>
                <div className="col-4 fullImgCred">
                    <p><i className="fa fa-copyright" />{credit}</p>
                </div>
            </div>
        </div>
    );
}

function History() {
    return(
        <>
            <div className="section-cont">
                <div className="section">
                    <h4>History</h4>
                    <p>Travelling along the beautiful Calapooia river is a window into the rich and complex story of western Oregon. Named for the Kalapuya tribe whose various and diverse bands roamed throughout the entire Willamette Valley basin prior to white settlement, the river offers a faint echo of the indiginous heritage which stretches back to antiquity.</p>
                    <p>The meandering, 81-mile path of the Calapooia offers a more direct look at the history of Euro-American settlement and expansion. T</p>
                    <p>Please expore</p>
                </div>
            </div>
        </>
    )
}

function Geography() {
    return(
        <>
            <div className="section-cont">
                <FullImg source="img/cala-head.jpg" 
                    caption="A view down the uppermost reaches of the Calapooia basin from above the headwaters. Taken on road NF520 below Tidbits Mountain"
                    credit="2021 Diversified Creative"
                />
                <div className="section">
                    <h4>Geography</h4>
                    <p>The Calapooia finds its genesis in the deep forested folds of an area of the western Cascade Range known as the 'Old Cascades'. This sub-region derives it's name from the volcanic remnants which are dramatically older than the bigger peaks of the Cascade crest--such as Hood, Jefferson, and the Three Sisters, which lie further east. The peaks of the Old Cascades were lower to begin with have had many more millenia to erode, leaving steep, lush, forested drainage valleys punctuated by dramatic rock pillars--the hardened plugs of ancient volcanoes which have persisted through millions of year of wet northwest weather.</p>
                </div>
                <FullImg source="img/cala-mouth.jpg" 
                    caption="Looking into the mouth of Calapooia from the confluence with the Willamette River at Albany."
                    credit="2021 Diversified Creative"
                />

            </div>
        </>
    )
}

function River() {
    return(
        <>
            <Geography />
            <History />
        </>
    );
}

export default River;