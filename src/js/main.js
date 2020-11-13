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

