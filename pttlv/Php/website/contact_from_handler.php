<!-- contact_form_handler.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Here you could add code to send an email or store the message in a database

    echo "<p>Thank you, $name! Your message has been received.</p>";
} else {
    echo "<p>There was an error submitting your form. Please try again.</p>";
}
?>
<a href="index.php">Return to Home</a>
