"use strict";

console.log("populate.js");

let headerTemplate = require("../templates/header.hbs");
let footerTemplate = require("../templates/footer.hbs");
let attractionTemplate = require("../templates/attractions.hbs");
let areasTemplate = require("../templates/areas.hbs");
let typesTemplate = require("../templates/types.hbs");

function header (parkInfo) {
    return new Promise ((resolve, reject) => {
		console.log(parkInfo[0]);
	    $("#headerID").append(headerTemplate(parkInfo[0]));
	    resolve(parkInfo);
    });
}

function footer (parkInfo) {
	return new Promise ((resolve, reject) => {
	console.log("footer info",parkInfo);
    $("#footerID").append(footerTemplate(parkInfo[0]));
	resolve();
	});
}

function areas (parkInfo) {
	return new Promise ((resolve, reject) => {
		for(let n=0; n<parkInfo.length; n+=1){
    		$("#mapScreen").append(areasTemplate(parkInfo[n]));
		}
    resolve(parkInfo);
	});
}

function types (data) {
	return new Promise ((resolve, reject) => {
		for(let n=0; n<data[0].length; n+=1){
			$("#typeScreen").append(typesTemplate(data[0][n]));
		}
		console.log(data[0], "second data 0");
		console.log("jason's second request", data[1]);
    resolve(data);
	});
}

function attractions (parkInfo) {
	return new Promise ((resolve, reject) => {
		for(let n=0; n<parkInfo.length;n+=1){
		$("#attractionScreen").append(headerTemplate(parkInfo[n]));
	}
	resolve();
    });
}

module.exports = {header, footer, areas, types, attractions};
