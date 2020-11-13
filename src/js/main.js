//= jquery.min.js

$(`input[type='radio']`).change(function() {
    const id = $(this).val()
    $(".slider").attr("data-slider", id);
    $(`.slide_info-wrapper`).removeClass('slide_info-wrapper_active')
    $(`.slide_info-wrapper[data-content="${id}"]`).addClass('slide_info-wrapper_active')

 
});

var len = $(`input[type='radio']`).length;
var intervalCounter = 1;
setInterval(function() {
  intervalCounter++;
  if (intervalCounter > len) intervalCounter = 1;
    $(".slider").attr("data-slider", intervalCounter);
    $(`.slide_info-wrapper`).removeClass('slide_info-wrapper_active')
    $(`.slide_info-wrapper[data-content="${intervalCounter}"]`).addClass('slide_info-wrapper_active')
    $(`input[type='radio']`)[intervalCounter - 1].checked = true;
}, 5000);



var initialPoint;
var finalPoint;
document.addEventListener('touchstart', function(event) {
event.preventDefault();
event.stopPropagation();
initialPoint=event.changedTouches[0];
}, false);
document.addEventListener('touchend', function(event) {
event.preventDefault();
event.stopPropagation();
finalPoint=event.changedTouches[0];
var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
if (xAbs > 20 || yAbs > 20) {
if (xAbs > yAbs) {
if (finalPoint.pageX < initialPoint.pageX){
    intervalCounter++;
    if (intervalCounter > len) intervalCounter = 1;
    $(".slider").attr("data-slider", intervalCounter);
    $(`.slide_info-wrapper`).removeClass('slide_info-wrapper_active')
    $(`.slide_info-wrapper[data-content="${intervalCounter}"]`).addClass('slide_info-wrapper_active')
    $(`input[type='radio']`)[intervalCounter - 1].checked = true;
/*СВАЙП ВЛЕВО*/}
else {
    intervalCounter--;
    if (intervalCounter < 1) intervalCounter = 3;
    $(".slider").attr("data-slider", intervalCounter);
    $(`.slide_info-wrapper`).removeClass('slide_info-wrapper_active')
    $(`.slide_info-wrapper[data-content="${intervalCounter}"]`).addClass('slide_info-wrapper_active')
    $(`input[type='radio']`)[intervalCounter - 1].checked = true;
    }
}
}
}, false);