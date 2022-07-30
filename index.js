let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
                    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
                    "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
                    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
                    "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
                    "(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",
                    ">",".","?","/"];

function generatePassword() {
    let pass = ""
    for (i = 0; i < 17; i++) {
        let randomChar = characters[Math.floor( Math.random() * 91 )]
        pass += randomChar 
    }

    return pass
}

function generate2Passwords() {
    pass1.textContent = generatePassword()
    pass2.textContent = generatePassword()
}