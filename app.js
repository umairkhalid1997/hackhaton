let register = () => {

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let country = document.getElementById("country");
    let city = document.getElementById("city");
    var user_key = firebase.database().ref("User-Information").push().key
    var user_data = {
        user_Name: username.value,
        email: email.value,
        password: password.value,
        country: country.value,
        city: city.value,
        key: user_key
    }
    if (username.value === "" || email.value === "" || password.value === "" || country.value === "" || city.value === "") {
        swal("Please  Fill All The Filled!");
    }
    else {
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        firebase.database().ref("User-Information").child(user_key).set(user_data)
            .then(() => {
                user_key
                location.href = "profile.html"
            })
            .catch((error)=>{
                swal(error.message)
            })
    }

}



let login = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if(email.value ==="" || password.value === ""){
        swal("Please  Fill All The Filled!");
    }
    else{
        firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((uid)=>{
            console.log(uid)
                swal("You successfully Login");
                location.href = "../profie-page/profile-page.html"

            })
.catch((error)=>{
    swal(error.message)
})
}
}