function contactLink(){
    var email1 = "hello"
    var email2 = "@"
    var email3 = "nachozaba."+"com"
    var fullEmail = email1 + email2 + email3;
    var contact   = document.getElementsByClassName("contact-me")[0]

    contact.href="mailto:" + fullEmail;
}

if (window.addEventListener){
    window.addEventListener("load", contactLink, false);
} else if (window.attachEvent){
    window.attachEvent("onload", contactLink);
} else {
    window.onload=contactLink;
}
