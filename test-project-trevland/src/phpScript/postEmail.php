<meta http-equiv='refresh' content='10; url=http://thecode.local/'>
<meta charset="UTF-8" />

<?php
$email = $_POST['email'];
$to = "bayntis@gmail.com";

$mes = "E-mail: $email, тук тук";

$send = mail($to, $header, $mes, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email");

if ($send == 'true') {
      echo "Форма работает, Сообщение отправлено<br/>";

      $msq = new mysqli("localhost", "root", "root", "F171261_name");
      $msq->query("INSERT INTO `emails` (`email`) VALUES('$email')");

      echo "Соединение с базой данных успешно<br/>";
      $msq->close();

      header('location: /');

} else {
      echo "Ой, что-то пошло не так";
}
?>