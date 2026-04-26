

  function signup() {
    var name = document.getElementById("signupName").value;
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;

    var user = {
      name: name,
      email: email,
      password: password
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup Successful!");
    showLogin();
  }
function clicklogin(){
 window.location.href="login.html"
}
function clicksignup(){
    window.location.href="signup.html"
}
function clickhome(){
    window.location.href="home.html"
}
  function login() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    var user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      alert("Login Successful!");
      window.location.href = "main.html"; 
    } else {
      alert("Invalid Email or Password");
    }
  }
 
  function clicknow(){
    window.location.href="signup.html"
  }
  function guest(){
    window.location.href="main.html"
  }
function getData() {

  var cvData = {
    fName: document.getElementById("fName").value,
    lName: document.getElementById("lName").value,
    num: document.getElementById("num").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    title: document.getElementById("title").value,
    summary: document.getElementById("summary").value
  };

  console.log(cvData);

  localStorage.setItem("cvData", JSON.stringify(cvData));

  window.location.href = "template.html";
}


function selectTemplate(templateName) {
  localStorage.setItem("selectedTemplate", templateName);
   window.location.href = "preview.html";
}


window.onload = function () {

  var template = localStorage.getItem("selectedTemplate");
  var data = JSON.parse(localStorage.getItem("cvData"));

  if (!data || !template) {
    document.getElementById("cv").innerHTML = "<h2>No Data Found</h2>";
    return;
  }

  if (template === "template1") {
    document.getElementById("cv").innerHTML = `
      <div class="template1">
        <h1>${data.fName} ${data.lName}</h1>
        <p>${data.email}</p>
        <p>${data.num}</p>
        <p>${data.address}</p>
        <p>${data.title}</p>
        <p>${data.summary}</p>
      </div>
    `;
  }

  if (template === "template2") {
    document.getElementById("cv").innerHTML = `
      <div class="template2">
        <h2>${data.fName} ${data.lName}</h2>
        <p>${data.title}</p>
        <hr>
        <p>${data.summary}</p>
        <p>${data.email}</p>
      </div>
    `;
  }

};