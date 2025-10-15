<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form fields
    $name = htmlspecialchars($_POST['full-name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $jobTitle = htmlspecialchars($_POST['job-title']);
    $description = htmlspecialchars($_POST['job-description']);

    // Email details
    $to = "info@gulfbaylogistic.com";
    $subject = "New Career Application - " . $jobTitle;
    $message = "
    <h2>New Career Application Received</h2>
    <p><strong>Full Name:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Phone:</strong> {$phone}</p>
    <p><strong>Position:</strong> {$jobTitle}</p>
    <p><strong>Message:</strong><br>{$description}</p>
    ";

    $headers = "From: {$email}\r\n";
    $headers .= "Reply-To: {$email}\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Handle file upload (resume)
    if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
        $file_tmp = $_FILES['resume']['tmp_name'];
        $file_name = $_FILES['resume']['name'];
        $file_type = $_FILES['resume']['type'];
        $file_size = $_FILES['resume']['size'];

        // Read file
        $handle = fopen($file_tmp, "r");
        $content = fread($handle, $file_size);
        fclose($handle);
        $encoded_content = chunk_split(base64_encode($content));

        $boundary = md5("random");
        $headers .= "Content-Type: multipart/mixed; boundary = $boundary\r\n\r\n";

        $body = "--$boundary\r\n";
        $body .= "Content-Type: text/html; charset=UTF-8\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= chunk_split(base64_encode($message));
        $body .= "--$boundary\r\n";
        $body .= "Content-Type: $file_type; name=\"$file_name\"\r\n";
        $body .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= "X-Attachment-Id: " . rand(1000, 99999) . "\r\n\r\n";
        $body .= $encoded_content;
        $body .= "--$boundary--";

        $sent = mail($to, $subject, $body, $headers);
    } else {
        $sent = mail($to, $subject, $message, $headers);
    }

    if ($sent) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
