<?php
//проверяем, существуют ли переменные в массиве POST
if(!isset($_POST['name']) and !isset($_POST['email']) and !isset($_POST['message'])){

} else {
 //показываем форму
 $name  $_POST['name'];
 $email = $_POST['email'];
 $message = $_POST['message'];
 $name = htmlspecialchars($name);
 $email = htmlspecialchars($email);
 $message = htmlspecialchars($message);
 $name = urldecode($name);
 $email = urldecode($email);
 $message = urldecode($message);
 $name = trim($name);
 $email = trim($email);
 $message = trim($message);
 if (mail("nasty-n@mail.ru", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email , "Сообщение: ".$message)){
 echo "Сообщение успешно отправлено";
 } else {
 echo "При отправке сообщения возникли ошибки";
 }
}
?>