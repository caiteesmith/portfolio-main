<?php  
 
if(
	isset($_POST['submit'])) {
	$mailto = "caiteecodes@gmail.com";
 
	//getting customer data
	$name = $_POST['name']; //getting customer name
	$email = $_POST['email']; //getting customer email
	$subject = "Contact Form Details";
 
	//Email body I will receive
	$message = "Name: " . $name . "\n"
	. "Message: " . "\n" . $_POST['message'];

    //Email headers
    $headers = "From: " . $email; // Client email, I will receive

    //PHP mailer function
    $result = mail($mailto, $subject, $message, $headers); // This email sent to My address

    //Checking if mail sent successfully
    if ($result) {
		echo '<script type="text/javascript">alert("Your message was sent successfully!");</script>';
		echo '<script type="text/javascript">window.location.href = window.location.href;</script>';

	} else {
		echo '<script type="text/javascript">alert("Your message was not sent. Please try again Later.");</script>';
		echo '<script type="text/javascript">window.location.href = window.location.href;</script>';
	}
  }
?>