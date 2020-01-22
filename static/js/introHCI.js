'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Experience Chan! It's not a lot of questions. Too many questions is the Chan disease.The best way is just to observe the noise of the world. The answer to your questions? Ask your own heart.");

	$("#testjs").text("Please wait...");
	$(".jumbotron p").toggleClass("active");
	}
);

	// Add any additional listeners here
	$("a.thumbnail").click(projectClick);
	// example: $("#div-id").click(functionToCall);
}



function projectClick(e) {
		console.log("Project Click");
    // prevent the page from reloading
    e.preventDefault();
    // In an event handler, $(this) refers to
    // the object that triggered the event
    $(this).css("background-color", "#7fff00");

		var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");

    } else {
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
			 $("p").fadeToggle();
    }
	}