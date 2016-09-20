<?php 

	session_start();
	
    $to = "filipebch@gmail.com"; // this is your Email address
    $first_name = $_SESSION['FirstName'];
    $last_name = $_SESSION['LastName'];
    $from = $_SESSION['Email']; // this is the sender's Email address
    $message = $_SESSION['Message'];

    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = "Message from " . $first_name . " " . $last_name . ":" . "\n\n" . $message;
    $message2 = "Copy of your message " . $first_name . "\n\n" . $message;

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . " " . $last_name;
    header('Location: contact.php?');
   
 ?>