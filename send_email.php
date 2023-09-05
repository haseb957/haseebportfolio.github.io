<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set the recipient email address
    $to = "ranahaseeb793@gmail.com";

    // Set the subject of the email
    $subject = "Contact Us Form Submission from $name";

    // Compose the email message
    $message_body = "Name: $name\n";
    $message_body .= "Email: $email\n\n";
    $message_body .= "Message:\n$message";

    // Set additional headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $message_body, $headers)) {
        echo "Email sent successfully. We will get back to you shortly.";
    } else {
        echo "Email sending failed.";
    }
}
?>
