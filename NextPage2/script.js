function toggleDropdown () {
    let navbarToggle = document.getElementById("navbar-toggle");
    if (navbarToggle.className === 'topnav') {
        navbarToggle.className += ' responsive';
    }
    else {
        navbarToggle.className = 'topnav';
    }
}



function validate() {
    if(document.myForm.email.value ==""){
    alert("Please Provide Email ID");
    document.myForm.email.focus()
    return false
} else if (document.myForm.name.value =="") {
    alert("Please Provide Password ");
    document.myForm.Password.focus()
    return false
}
else if (document.myForm.message.value =="") {
    alert("Please leave us a message");
    document.myForm.message.focus()
    return false
}
else {
return true
}
}