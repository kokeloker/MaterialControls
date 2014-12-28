var MaterialControls = require('MaterialControls');
//actually exist 3 sizes of checkbox big, medium and small
//to make use of them you just need to create the one you need and change their position properties
//you can check their value (checked:true or unchecked:false) using checkbox.checked
var checkboxBig = MaterialControls.createBigCheckBox();
var labelBig = Ti.UI.createLabel({
	text: "Big",
	top: "5%",
	left: "15%",
	color: "black"	
});
checkboxBig.top = "10%";
checkboxBig.left = "15%";
$.index.add(labelBig);
$.index.add(checkboxBig);

var checkboxMedium = MaterialControls.createMediumCheckBox();
var labelMedium = Ti.UI.createLabel({
	text: "Medium",
	top: "5%",
	left: "45%",
	color: "black"
});
checkboxMedium.top = "10%";
checkboxMedium.left = "45%";
$.index.add(labelMedium);
$.index.add(checkboxMedium);

var checkboxSmall = MaterialControls.createSmallCheckBox();
var labelSmall = Ti.UI.createLabel({
	text: "Small",
	top: "5%",
	left: "75%",
	color: "black"
});
checkboxSmall.top = "10%";
checkboxSmall.left = "75%";
$.index.add(labelSmall);
$.index.add(checkboxSmall);

$.index.open();
