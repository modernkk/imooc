// use as

function v1() {
	console.log("v1");
}

function v2() {
	console.log("v2");
}

export {
	v1 as streamV1,
	v2 as streamV2,
	v2 as streamLatestVersion
}
