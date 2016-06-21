/*global console*/
'use strict';

var globalVariable = 'this is global variable';

function globalFunction() {
	var localVariable = 'this is local variable';
	console.log('visit global/local variable');
	console.log(globalVariable);
	console.log(localVariable);

	globalVariable = "this is changed variable";
	console.log(globalVariable);

	function localFunction() {
		var innerLocalVariable = 'this is inner local variable';

		console.log('visit global/local/innerLocal variable');
		console.log(globalVariable);
		console.log(localVariable);
		console.log(innerLocalVariable);
	}

	localFunction();
}

globalFunction();
