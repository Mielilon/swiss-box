//= jquery.min.js

$(`input[type='radio']`).change(function() {
    const id = $(this).val()
    $(".slider").attr("data-slider", id);
    $(`.slide_info-wrapper`).removeClass('slide_info-wrapper_active')
    $(`.slide_info-wrapper[data-content="${id}"]`).addClass('slide_info-wrapper_active')
});