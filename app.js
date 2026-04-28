

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
function clicklogin() {
  window.location.href = "login.html"
}
function clicksignup() {
  window.location.href = "signup.html"
}
function clickhome() {
  window.location.href = "home.html"
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

function clicknow() {
  window.location.href = "signup.html"
}
function guest() {
  window.location.href = "main.html"
}
function getData() {

  var cvData = {
    fName: document.getElementById("fName").value.trim(),
    lName: document.getElementById("lName").value.trim(),
    num: document.getElementById("num").value.trim(),
    email: document.getElementById("email").value.trim(),
    address: document.getElementById("address").value.trim(),
    title: document.getElementById("title").value.trim(),
    summary: document.getElementById("summary").value.trim()
  };


  if (
    cvData.fName === "" ||
    cvData.lName === "" ||
    cvData.num === "" ||
    cvData.email === "" ||
    cvData.address === "" ||
    cvData.title === "" ||
    cvData.summary === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill all fields!",
      confirmButtonColor: "#ffcc00",
    });
    return;
  }

  console.log(cvData);

  localStorage.setItem("cvData", JSON.stringify(cvData));
  window.location.href = "form.html";
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
        <h3>Job Title</h3>
        <p>${data.title}</p>
        <h3>Summary</h3>
        <p>${data.summary}</p>
        <h3>Education</h3>
        <p>${data.education || ""}</p>
        <h3>Skill</h3>
        <p>${data.skills || ""}</p>
      </div>
    `;
  }

  if (template === "template2") {
    document.getElementById("cv").innerHTML = `
      <div class="template2">
      <div class ="left">
        <h2>${data.fName} ${data.lName}</h2>
          <p>${data.email}</p>
        <p>${data.num}</p>
        <p>${data.address}</p>
        <div class="right">
         <h3>Job Title</h3>
        <p>${data.title}</p>
        <hr>
<h3>Summary</h3>
        <p>${data.summary}</p>
        <h3>Education</h3>
        <p>${data.education || ""}</p>
        <h3>Skill</h3>
        <p>${data.skills || ""}</p>
      </div>
      </div>
    `;
  }

};
function saveCV() {
  var cv = {
    fullname: document.getElementById("fullName"),
    email: document.getElementById("emailForm").value,
    phone: document.getElementById("phone").value,
    title: document.getElementById("title").value,
    summary: document.getElementById("summary").value,
    education: document.getElementById("education").value,
    experience: document.getElementById("experience").value,
    skills: document.getElementById("skills").value
  };
  if (cv.fullname == "" ||
    cv.emailForm == "" ||
    cv.phone == "" ||
    cv.title == "" ||
    cv.summary == "" ||
    cv.education == "" ||
    cv.experience == "" ||
    cv.skills == ""

  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill all fields!",
      confirmButtonColor: "#ffcc00",
    });
    return;
  }


  localStorage.setItem("cvData", JSON.stringify(cv));
  window.location.href = "template.html"
}
var currentStep = 0;
var steps = document.querySelectorAll(".step");

function showStep(index) {
  steps.forEach(step => step.classList.remove("active"));
  steps[index].classList.add("active");
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}
var