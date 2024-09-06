const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const register = document.getElementById("register")
const form = document.getElementById("form")







// =======================================================
// ------  Functions
// =======================================================

function checkLength(field, min, max) {
    const text = field.value.trim();
    const fieldName = field.parentNode.querySelector("input").name;

    if (text.length < min || text.length > max) {

        if (!field.parentNode.classList.contains("error")) {
            field.parentNode.classList.add("error")
            const small = field.parentNode.querySelector("small");
            small.innerHTML = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be larger then ${min} characters`

            return;

        }
        if (field.parentNode.classList.contains("success")) {
            field.parentNode.classList.remove("error")
            return;

        }
    }
    else {
        field.parentNode.classList.remove("error")
        field.parentNode.classList.add("success")
    }
}





function matchPass() {


    if (confirmPassword.value.length != 0) {
        // console.log("- block")

        if (password.value.trim() === confirmPassword.value.trim()) {
            // console.log("0 block")
            if (!confirmPassword.parentNode.classList.contains("success")) {
                // console.log("1st block")
                confirmPassword.parentNode.classList.add("success")
                const small = confirmPassword.parentNode.querySelector("small");
                small.style.visibility = "hidden"

            }

        }
        else {
            // console.log("2nd block")
            confirmPassword.parentNode.classList.remove("success")
            confirmPassword.parentNode.classList.add("error")
            const small = confirmPassword.parentNode.querySelector("small");
            small.innerHTML = `Password not match.`
            small.style.visibility = "visible"


        }

    }
    else {
        const abc = confirmPassword.parentNode.querySelector("small");

        abc.innerHTML = "Enter password to confirm."
        // console.log("3rd block")

    }





}


function checkAvailability(field) {
    // console.log("running")
    const fieldName = field.id.charAt(0).toUpperCase() + field.id.slice(1)
    // console.log(fieldName)
    if (field.value.trim().length == 0) {
        // console.log("inside")
        const small = field.parentNode.querySelector("small");
        small.innerHTML = `Please enter ${fieldName}`
        if (field.parentNode.classList.contains("success")) {
            field.parentNode.classList.remove("success")
        }
        if (!field.parentNode.classList.contains("error")) {
            field.parentNode.classList.add("error")


        }
    }
    else {
        if (field.parentNode.classList.contains("error")) {
            field.parentNode.classList.remove("error")

        }
    }

}



const validateEmail = (field) => {
    const email = field.value.trim();
    // console.log(email)
    const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    if (email.match(regex)) {
        if (field.parentNode.classList.contains("error")) {
            field.parentNode.classList.remove("error")
        }
        if (!field.parentNode.classList.contains("success")) {
            field.parentNode.classList.add("success")
            // console.log("Valid")


        }
    }
    else {
        if (field.parentNode.classList.contains("success")) {
            field.parentNode.classList.remove("success")
            // console.log("Valid")


        }
        if (!field.parentNode.classList.contains("error")) {
            field.parentNode.classList.add("error")
            const small = field.parentNode.querySelector("small")
            small.innerHTML = "Invalid Email"
            // console.log("Invalid")

        }
    }
}




// =======================================================
// ------  Event Listener
// =======================================================

form.addEventListener("submit", (e) => {


    e.preventDefault();
    [name, email, password, confirmPassword].map(field => checkAvailability(field))
    checkLength(name, 3, 20)
    checkLength(password, 6, 20)
    validateEmail(email)
    matchPass()
  if ([name, email, password, confirmPassword].every(field => field.parentNode.classList.contains("success"))){
    form.submit()
    alert("user registered")
  }


})













