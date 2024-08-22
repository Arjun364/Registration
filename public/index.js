const btn = (event) => {
    event.preventDefault();
    // varibles created
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const pass = document.getElementById("password").value
    const errorMsg = document.getElementById("error")
    const errorMsg2 = document.getElementById("error2")
    const errorMsg3 = document.getElementById("error3")
    let data = "This field cannot be empty"


    // email pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name !== "" && email !== "" && pass !== "") {
        // checking email 
        emailRegex.test(email) ? errorMsg2.innerHTML = "" : errorMsg2.innerHTML = "Invaild email address"

        // password checker
        pass.length>8?errorMsg3.innerHTML = "":errorMsg3.innerHTML = "Password atleast need 8 characters"

        // Alert section (OTP generation)
        const generateOTP = () => Math.floor(1000 + Math.random() * 9000).toString();
        let OTP = generateOTP();
        alert(`Your OTP is: ${OTP}`);

    } else {
        name == "" ? errorMsg.innerHTML = data : errorMsg.innerHTML = "";

        if (email!=='') {
            emailRegex.test(email) ? errorMsg2.innerHTML = "" : errorMsg2.innerHTML = "Invaild email address"
        } else {
            email == ""? errorMsg2.innerHTML = data : errorMsg2.innerHTML = "";
        }

        if (pass.length!==0) {
            pass.length>8?errorMsg3.innerHTML = "":errorMsg3.innerHTML = "Password atleast need 8 characters"
        } else {
            pass == "" ? errorMsg3.innerHTML = data : errorMsg3.innerHTML = "";
        }
    }

}