function onClose() {
    var modal = document.getElementById("modal-subscription"); 
    console.log(modal);
    modal.style.display = "none";
};

function subscribe() {
    var modal = document.getElementById("modal-subscription"); 
    modal.style.display = "block"; //show the modal content
};
let button = document.getElementById('submit');
button.addEventListener('click', function(event) {
    event.preventDefault();
    validateForm();
});
function validateForm() {
    var firstName = document.getElementById("firstname").value; 
    console.log(firstName)
    //if the length of first/last name is less than 2, then it is not a valid input
    if(firstName.length < 2 ){
        alert("please enter a valid firstname"); 
        return false;
    }
    var lastName = document.getElementById("lastname").value; 
    if(lastName.length < 2 ){
        alert("please enter a valid lastname"); 
        return false
    }
    //if the email address does not contain @, then it is not a valid email
    var email = document.getElementById("email").value; 
    if(email && email.indexOf('@') <= 0){
        alert("please enter a valid email"); 
        return false
    }
    //if the length of the phone number is not 10, then it is not valid
    var phone = document.getElementById("phone").value;
    if(phone && phone.length != 10){
        alert("please enter a valid phone number"); 
        return false
    }
    else {
        alert("forms submitted!")
    }
}