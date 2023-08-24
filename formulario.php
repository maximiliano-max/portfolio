<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $to = "maximilianodonofrio9@gmail.com"; // Cambia esto con tu dirección de correo electrónico
    $subject = "Nuevo mensaje del formulario de contacto";
    $message = "Nombre: $nombre\n";
    $message .= "Email: $email\n";
    $message .= "Mensaje:\n$mensaje";

    mail($to, $subject, $message);

    echo "Correo enviado exitosamente.";
}
?>