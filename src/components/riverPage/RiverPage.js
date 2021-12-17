import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import "./river.css";
import { FullImg, SectionHead } from "../toolComponents/DisplayModules";
import { baseUrl } from 'config';

function History() {
	return (
		<>
			<div className="section-cont">
				<div className="section">
					<SectionHead heading="History" />
					<p>Travelling along the beautiful Calapooia river is a window into the rich and complex story of western Oregon. Named for the Kalapuya tribe whose various and diverse bands roamed throughout the entire Willamette Valley basin prior to white settlement, the river offers a faint echo of the indiginous heritage which stretches back to antiquity.</p>
					<p>
						The band of Kalapuya specific to areas around the river that bears their tribal name are known to modern scholars as the <em>Tsankupi</em> people. They are thought to have spoken dialects of the Central Kalapuya language, similar to many other subdivisions of Kalapuyans whose names endure, such as the Santiam, the Luckiamute, and the Mohawk. The other main language branches of the Kalapuya peoples were the Northern Kalapuya language, spoken primarily by peoples living
						along the Tualatin and Yamhill rivers, and the Southern Kayapuya (also known as Yoncalla) language spoken by various Kalapuyan bands living further to south.
					</p>
					<p>The meandering, 81-mile path of the Calapooia offers a more direct look at the history of Euro-American settlement and expansion. For much of the first third of the river's course it flows through post-settlement Oregon's most important industry: timber production. The Calapooia Tree Farm is an extensive tract of timberland owned, managed, and heavily worked by Weyerhaeuser.</p>
					<p>
						Below the Weyerhaeuser land, the river winds through small, agrarian, old-world-feeling properties before emptying out into the broadest expanses of Linn County, dominated by large scale agricultural production. Along the way, the river passes directly through the quaint town of Brownsville, itself an interesting link to the Oregon's rural heritage. A historic town full of character and well-maintained old homes and buildings, Brownsville's recognizable downtown featured
						prominently in the 1986 Rob Reiner film <em>Stand By Me</em>.
					</p>
				</div>
			</div>
		</>
	);
}

function Geography() {
	return (
		<>
			<div className="section-cont">
				<FullImg source={baseUrl + 'img/cala-head.jpg'} caption="A view down the uppermost reaches of the Calapooia basin from above the headwaters. Taken on road NF520 below Tidbits Mountain" credit="2021 Diversified Creative" />
				<div className="section">
					<SectionHead heading="Geography" />
					<p>
						The Calapooia finds its genesis in the deep forested folds of an area of the western Cascade Range known as the 'Old Cascades'. This sub-region derives it's name from the volcanic remnants which are dramatically older than the bigger peaks of the Cascade crest--such as Hood, Jefferson, and the Three Sisters, which lie further east. The peaks of the Old Cascades were lower to begin with have had many more millenia to erode, leaving steep, lush, forested drainage valleys
						punctuated by dramatic rock pillars--the hardened plugs of ancient volcanoes which have persisted through millions of year of wet northwest weather.
					</p>
					<p>
						From a collection of small, mostly seasonal streams in the Willamette National Forest, the river forms and begins it's journey. The first 30 miles wind through steep valleys of active timberland, much of which is owned and actively worked by the Weyerhaeuser timber company. This is an ecologically rich area.{" "}
						<strong>
							Weyerhaeuser maintains strict control of roughly 15 miles of Upper Calapooia Drive (which becomes NF2820 after leaving Weyerhaeuser land and entering public land). The controlled area--which begins roughly 8.5 miles from the beginning of Upper Calapooia Road at Holley, OR--is managed by gates which are opened and closed at Weyerhaeuser's discretion. While public through-access to the national forest is allowed, parking/stopping within the gated stretch is forbidden
							and can result in fines. Observe posted signs carefully.
						</strong>
					</p>
				</div>
				<FullImg source={baseUrl + 'img/cala-swiss-cheese.jpg'} caption="A beautiful swimming hole between the small town of Holley and the lower Weyerhaeuser gate." credit="2021 Diversified Creative" />
				<div className="section">
					<p>
						Between the lower Weyerhaeuser gate and the small town of Holley, the Calapooia boasts many lovely recreation opportunities in the form of swimming holes and stretches of river which are seasonally runnable for kayakers. See the <Link to="/resources">resources page</Link> for some specific recreation opportunities.
					</p>
					<p>Roughly one-third of the way through the Calapooia's 81-mile course, the river leaves the the narrow valleys of it's birth and empties out into the flatter, open agricultural terrain of the Willamette Valley at the town of Holley. From Holley onward, the river primarily winds through and between farm and ranch properties in the narrow earthen gorge it has carved through the ancient flood plains of the Willamette Basin.</p>
				</div>
				<FullImg source={baseUrl + 'img/cala-rail-bridge.jpg'} caption="A family cools off in the Calapooia under a rail bridge between the small towns of Shedd and Tangent." credit="2021 Diversified Creative" />
				<div className="section">
					<p>Roughly one-third of the way through the Calapooia's 81-mile course, the river leaves the the narrow valleys of it's birth and empties out into the flatter, open agricultural terrain of the Willamette Valley at the town of Holley. From Holley onward, the river primarily winds through and between farm and ranch properties in the narrow earthen gorge it has carved through the ancient flood plains of the Willamette Basin.</p>
					<p>
						As the river winds towards its eventual fate--confluence with mighty Willamette River--it passes near numerous small towns and places of interest. It drops into the flatlands at the small town of Holley, meanders past Crawfordsville, and through the center of historic Brownsville. After passing Brownsville, the river remains mostly hidden in it's narrow sunken passage, generally surrounded by massive swaths of private property as it passes through the agricultural region
						frequently referred to as "the grass seed capitol of the world," passing by the small towns of Halsey, Shedd, and Tangent
					</p>
				</div>
				<FullImg source={baseUrl + 'img/cala-queen.jpg'} caption="Looking south along the Calapooia near the western city limits of Albany. The bridge visible is Queen Avenue, and the gravel bar visible under and past the bridge is a popular swimming hole." credit="2021 Diversified Creative" />
				<div className="section">
					<p>
						The final stretch of the Calapooia river takes it past the town of Albany, Oregon, the only town of any significant size within 20 miles of any part of this remote and reclusive waterway. The river peaks into public view as it passes under Queen Avenue at Albany's western city limits, where there is a popular swimming hole and an opportunity for intrepid floaters/kayakers to put in when the flow is appropriate. The river slinks away back into private, hidden passages
						before it's swan song stretch next to downtown Albany.
					</p>
					<p>
						That final stretch, a gentle and picturesque half-mile, begins at a dramatic man-made waterfall and ends when the river is consumed by the much larger Willamette River. The waterfall is the outflow from Albany's drinking water treatment facility--also a minor power plant--which is the terminus of the 18-mile Santiam-Albany Canal. From that dramatic plunge, the river turns north and passes directly between Albany's two best-loved public spaces: Montieth Riverfront and
						Bryant Park. This stretch of the river is popular for swimming and paddling, and is one of the few spots on the river's entire course that sees substantial and regular public recreation.
					</p>
				</div>
				<FullImg source={baseUrl + 'img/cala-mouth.jpg'} caption="Looking into the mouth of Calapooia from the confluence with the Willamette River at Albany." credit="2021 Diversified Creative" />
			</div>
		</>
	);
}

function River() {
	return (
		<>
			<Geography />
			<History />
		</>
	);
}

export default River;