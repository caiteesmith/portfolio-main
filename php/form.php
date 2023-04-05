<?php  
 
if(
	isset($_POST['submit'])) {
	$mailto = "caiteecodes@gmail.com";
 
	//getting customer data
	$name = $_POST['name']; //getting customer name
	$email = $_POST['email']; //getting customer email
	$subject = $_POST['subject']; //getting subject line from client
 
	//Email body I will receive
	$message = "Name: " . $name . "\n"
	. "Portfolio Message: " . "\n" . $_POST['message'];

    //Email headers
    $headers = "From: " . $email; // Client email, I will receive

    //PHP mailer function
    $result1 = mail($mailto, $subject, $message, $headers); // This email sent to My address

    //Checking if mail sent successfully
    if ($result1 && $result2) {
      $success = "Your message was sent successfully!";
    } else {
      $failed = "Sorry! Your message was not sent. Try again later.";
    }
  }
?>