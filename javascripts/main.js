"use strict";


console.log("is main loading?");

require("bootstrap");
let header = require("./attractory.js");
let parkInfo;
let headerTemplate = require("../templates/header.hbs");
let footerTemplate = require("../templates/footer.hbs");

header.getParkInfo()
	.then((data) => {
		parkInfo = data;
		console.log(parkInfo);
        populateHeader(parkInfo);
        populateFooter(parkInfo);
	});

function populateHeader (parkInfo) {
    console.log(parkInfo[0]);
    $("#headerID").append(headerTemplate(parkInfo[0]));
}

function populateFooter (parkInfo) {
    $("#footerID").append(footerTemplate(parkInfo[0]));
}

let butt = require("./events.js");

butt.map()
	.then();