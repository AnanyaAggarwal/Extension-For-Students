function checkAll()
{
    firstNameRequired();
    checkMail();
    validateform();
    matchpass();
}




function firstNameRequired(){

	var empt=document.myform.username.value;
	var letters=/^[A-Z a-z]+$/;
	if(empt==""){
		alert("Please enter first name");
		return false;	
	}else{
	
		if(empt.match(letters)){
			return true;
            
		}else{
			alert("Enter a valid first name");
			return false;		

		}

	}

}

function checkMail(){
    var empt=document.myform.email.value;
    var letters=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(empt==""){
        alert("PLease enter email");
        return false;
    }else{
        if(empt.match(letters)){
            return true;
        }else{
            alert("Enter a valid email");
            return false;
        }
    }
}

function validateform(){  
    var password=document.myform.password.value;  
  
    if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
    }  
  }  

function matchpass(){  
var firstpassword=document.myform.password.value;  
var secondpassword=document.myform.passwordRepeat.value;  
  
if(firstpassword==secondpassword){  
return true;  
}  
else{  
alert("password must be same!");  
return false;  
}  


// function checkRadio(){
//     if(FruitForm.num[0].checked==false&&FruitForm.num[1].checked==false){
//         alert("Check one radio button");
//         return false;
//     }
//     return true;
// }






// function addressRequired()
// {

// 	var empt=document.FruitForm.address.value;
// 	var letters=^[a-zA-Z0-9\s\,\''\-]*$;
// 	if(empt==""){
// 		alert("Please enter your address");
// 		return false;	
// 	}else{
	
// 		if(empt.match(letters)){
// 			return true;
// 		}else{
// 			alert("Enter a valid address");
// 			return false;		

// 		}

// 	}

// }





