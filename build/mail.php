<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'] ? $_POST['email'] : '<i>Не указано</i>';
$formcontent = "Заявка на рассылку от SWISSBOX+<br> 
            <ul>
              <li>Имя: $name</li>
              <li>Телефон: $phone</li>
              <li>Email: $email</li>
            </ul>
            ";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: Smartbox+ — склад для хранения вещей <smartbox@gmail.com>\r\n";

$recipient = "Dim89150740074@gmail.com";
$subject = "Заявка на рассылку";

if(isset($name) && isset($phone)) {
    mail($recipient, $subject, $formcontent, $headers);
}
?>