<?php
if(isset($_POST['email'])) {
  function died($error) {
    echo "<script>alert('$error')</script>";
    echo "<script>onclick=history.back(-1)</script>";
      die();
}
  
//Validate 4 standard fields fields
if(!isset($_POST['email']))
	died('Please input your email address and submit.');  

if(!isset($_POST['name']))
	died('Please input your first name and submit.');  

if(!isset($_POST['message']))
	died('Please input your company and submit.'); 

//Store fields in variables for easy use
$email 		 =		$_POST['email'];
$name		 = 		$_POST['name'];
$message 	 =	 	$_POST['message'];

//Validate that each variable is of proper form
$error_message = '';
$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
$string_exp = "/^[A-Za-z .'-]+$/";

if(!preg_match($email_exp,$email)) {
	$error_message .= '\n* The Email Address field does not appear to be valid.';
}
	
if(!preg_match($string_exp,$name)) {
	$error_message .= '\n* The First Name field does not appear to be valid.';
}
	
if(strlen($message) < 1) {
	$error_message .= '\n* The Company field does not appear to be valid.';
}
	
if(strlen($error_message) > 0) {
	$final_error_message .= $error_message . '\n\nPressing OK will return you to email form after a few seconds...';
	died($final_error_message);
}

//Setting the time up
date_default_timezone_set('America/New_York');
$date = date ("l, F jS, Y"); 
$time = date ("h:i A"); 

//Storing all of the data in a writeable array (NOTE: Make sure all standard form fields and CQ's are in the array)
$a1 = array($date,$time,$email,$name,$message);
$data = '"' . implode('","',$a1) . '"' . "\n";

////Open the file for writing
//$file = "formdata/formdata.csv";
//$fh = fopen($file, "a") or die("ERROR: Couldn't open $file for writing!");
//fwrite($fh, $data) or die("ERROR: Couldn't write values to file!");

?>

<?php
}
?>