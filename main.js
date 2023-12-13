//צרו דף נחמד (ומעוצב!) שמקבל מייל וסיסמא
//לחיצה על הכפתור פונקציה אשר תופסת את שם המשתמש והסיסמא
//ובודקת האם שם המשתמש שווה ל idanmagl@gmail.com
//סיסמא שווה ל im1234$$
//במידה והם שווים הפונקציה מעביר את היוזר לדף של ״התחברת בהצלחה״ 
//במידה ולא מוצגת הודעה שגיאה (מעל לתיבות הטקסט שהשם משתמש או הסיסמא שגויים) 

//בונוס: יש ליצור כפתור ״עזרה״ שיעביר לדף חדש, עם תיבת טקסט
//מידה והמשתמש מגניב לשם את האימייל 
//idanmagled@gmail.com
//הסיסמא מוצגת לו בתיבת טקסט למשך 4 שניות ונעלמת



function checkLogin() {

    const usermailBox = document.getElementById("usermailBox");
    const passwordBox = document.getElementById("passwordBox");
    const usermail = usermailBox.value;
    const password = passwordBox.value;

    usermailBox.style.backgroundColor = "";
    passwordBox.style.backgroundColor = "";

    if (usermail ==! "idanmagl@gmail.com" && password ==! `im1234$$`) {
        alert("Wrong usermail or password");
        usermailBox.style.backgroundColor = "red";
        usermailBox.focus();
        event.preventDefault();
        return;
    }
    
   
    alert("Sending the values to the server...");
}