(function validateform() {
	var name = document.validateform.name.value;
	var email = document.validateform.password.value;
	var message = document.validateform.message.value;
	
	if (name == null || name == "") {
		alert("Name can't be blank");
		return false;
	} else if (email == "") {
		alert("Email can't be blank");
		return false;
	} else if (message == "") {
		alert("Message can't be blank");
		return false;
	}
	
	var x = document.validateform.email.value;
	var atposition = x.indexOf("@");
	var dotposition = x.lastIndexOf(".");
	
	if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
		alert("Please enter a valid e-mail address \n atpostion:" + atposition + "\n dotposition:" + dotposition);
		return false;  
  }
})