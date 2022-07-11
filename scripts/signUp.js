function signup(){
    let name=document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value


    let userData= JSON.parse(localStorage.getItem("user"))||[]

    if(email!=""&&password!=""&&name!=""){
        let dataDone={
            email:email,
            password:password
        }
        userData.push(dataDone)
        localStorage.setItem("user",JSON.stringify(userData))
        window.location.href="login.html"
    }
}