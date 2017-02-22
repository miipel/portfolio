showImage = function() {
    $("#funny_image").removeClass("hidden");
    $("#showImage_button").addClass("hidden");
    $("#hideImage_button").removeClass("hidden");
}

hideImage = function() {
    $("#funny_image").addClass("hidden");
    $("#showImage_button").removeClass("hidden");
    $("#hideImage_button").addClass("hidden");
}