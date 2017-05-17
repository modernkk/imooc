$(function() {
	"use strict";
	var sidebar = $("#sidebar");
	var mask = $(".mask");
	var sidebar_trigger = $("#sidebar_trigger");
	var backButton = $(".back-to-top");

	function showSidebar() {
		console.log("clicked");
		mask.fadeIn();
		sidebar.css("transform", "translate(0, 0)");
	}

	function hideSidebar() {
		console.log("clicked");
		mask.fadeOut();
		sidebar.css({"transform": "translate(" + sidebar.width() + "px, 0)"});
	}
	sidebar_trigger.on("click", showSidebar);
	mask.on("click", hideSidebar);
	backButton.on("click", function() {
		console.log("clicked");
		$("html,body").animate({scrollTop: 0}, 800);
	});

	$(window).on("scroll", function() {
		if($(window).scrollTop() > $(window).height()) {
			backButton.show();
		} else {
			backButton.hide();
		}
	});
	$(window).trigger("scroll");
})