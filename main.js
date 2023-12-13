function checkLogin() {

    const usermailBox = document.getElementById("usermailBox");
    const passwordBox = document.getElementById("passwordBox");
    const usermail = usermailBox.value;
    const password = passwordBox.value;

    usermailBox.style.backgroundColor = "";
    passwordBox.style.backgroundColor = "";

    if (usermail !== "idanmagl@gmail.com" || password !== "im1234$$") {
        alert("Wrong usermail or password");
        usermailBox.style.backgroundColor = "red";
        usermailBox.focus();
        event.preventDefault();
        return;
    }    
    
}