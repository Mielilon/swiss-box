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
if($(event.target).closest('.form').length) return;
if($(event.target).closest('.slider__button').length) return;
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
}
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


$(".slider__button").click(function (event) {
    $('.form-wrapper').addClass('form-wrapper_active');
  })

$(".exit").click(function (event) {
    $('.form-wrapper').removeClass('form-wrapper_active');
  })

$(document).on('click',function (e) {
    if($(e.target).closest('.form').length) return;
    if($(e.target).closest('.slider__button').length) return;
    $('.form-wrapper').removeClass('form-wrapper_active');
   });
   


   function initForm() {
    $('form').submit(function (e) {
      e.preventDefault();
      let mailExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
      let theForm = $(this);
      const email = theForm.find('input[name="email"]').val();
      const name = theForm.find('input[name="name"]').val();
      const phone = theForm.find('input[name="phone"]').val();
  
      if (email && !mailExp.test(email)) {
        theForm.find('.form__errors').text('Почта введена некорректно');
        return false;
      } else {
        if (!name || !phone) {
          theForm.find('.form__errors').text('Заполните все поля');
          return false;
        } else {
          theForm.find('.form__errors').text('');
        }
      }
  
      $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: theForm.serialize(),
      })
        .done(function () {
          theForm
            .find('.form__status')
            .text('Сообщение успешно отправлено!')
            .addClass('mt-12');
          theForm.find('.form__submit').hide();
        })
        .fail(function () {
          theForm
            .find('.form__status')
            .text(
              'Ошибка отправки сообщения. Пожалуйста, повторите попытку'
            )
            .addClass('mt-12');
          theForm.find('.form__submit').hide();
        });
  
      return false;
    });
  }
  
  initForm();
  
