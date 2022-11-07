function printError(Id,Msg){
	document.getElementById(Id).innerHTML = Msg;
}
function validateForm(){
	var name = document.Form.name.value;
	var email = document.Form.email.value;
	var mobile = document.Form.mobile.value;
	var city = document.Form.city.value;
	var gender = document.Form.gender.value;
	var namErr = emailErr = mobileErr = cityErr = genderErr = true;
	if(name == ""){
		printError("nameErr", "please enter your name");
		var elem = document.getElementById("name");
		    elem.classList.add("input-2");
		    elem.classList.remove("input-1");
	}else{
		var regex = /^[a-zA-Z\s]+$/;
		if(regex.test(name) === false){
			printError("nameErr","Please enter a valid name");
			var elem = document.getElementById("name");
			elem.classList.add("input-2");
		    elem.classList.remove("input-1");
		}else{
			printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
			elem.classList.add("input-2");
		    elem.classList.remove("input-1"); 
		}
	}

if(email == ""){
		printError("emailErr", "please enter your email address");
		var elem = document.getElementById("email");
		    elem.classList.add("input-2");
		    elem.classList.remove("input-1");
	}else{
		var regex = /^\S+@\S+\.\S+$/;
		if(regex.test(email) === false){
			printError("emailErr","Please enter a valid email address");
			var elem = document.getElementById("email");
			elem.classList.add("input-2");
		    elem.classList.remove("input-1");
		}else{
			printError("emailErr", "");
            emailErr = false;
            var elem = document.getElementById("email");
			elem.classList.add("input-2");
		    elem.classList.remove("input-1"); 
		}
	}
if(mobile == ""){
		printError("mobileErr", "please enter your mobile number");
		var elem = document.getElementById("mobile");
		    elem.classList.add("input-2");
		    elem.classList.remove("input-1");
	}else{
		var regex = /^[1-9]\d{9}$/;
		if(regex.test(mobile) === false){
			printError("emailErr","Please enter a valid 10 digit mobile number");
			var elem = document.getElementById("mobile");
			elem.classList.add("input-2");
		    elem.classList.remove("input-1");
		}else{
			printError("mobileErr", "");
            emailErr = false;
            var elem = document.getElementById("mobile");
			elem.classList.add("input-2");
		    elem.classList.remove("input-1"); 
		}
	}
	if(city == "Select"){
		printError("cityErr", "please select your city");
		var elem = document.getElementById("city");
		    elem.classList.add("input-4");
		    elem.classList.remove("input-3");
		}else{
			printError("cityErr", "");
            cityErr = false;
            var elem = document.getElementById("city");
			elem.classList.add("input-3");
		    elem.classList.remove("input-4"); 
		}
	if(gender == ""){
		printError("genderErr", "please select your gender");
		var elem = document.getElementById("gender");
		    elem.classList.add("input-4");
		    elem.classList.remove("input-3");
		}else{
			printError("genderErr", "");
            genderErr = false;
            var elem = document.getElementById("gender");
			elem.classList.add("input-3");
		    elem.classList.remove("input-4"); 
		}
	if((nameErr || emailErr || mobileErr || cityErr || genderErr) == true) {
		return false;
	}
};