function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user==="BHEESHMA" && pass==="2085"){

document.getElementById("loginPage").style.display="none";
document.getElementById("mainSystem").style.display="block";

openTab("sos");

}else{

document.getElementById("loginMsg").innerText="Invalid Username or Password";

}

}

function openTab(tabId){

let tabs=document.getElementsByClassName("tab-content");

for(let i=0;i<tabs.length;i++){
tabs[i].style.display="none";
}

document.getElementById(tabId).style.display="block";

}

function sendSOS(){

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let disaster=document.getElementById("disaster").value;
let location=document.getElementById("location").value;

if(name=="" || phone=="" || disaster=="" || location==""){
alert("Please fill all fields!");
return;
}

let message=
"🚨 SOS ALERT 🚨\n\n"+
"Name: "+name+"\n"+
"Phone: "+phone+"\n"+
"Disaster: "+disaster+"\n"+
"Location: "+location;

document.getElementById("smsOutput").innerText=message;

}

function sendRealSMS(){

let phone=document.getElementById("phone").value;
let disaster=document.getElementById("disaster").value;
let location=document.getElementById("location").value;

let message="SOS ALERT! Disaster: "+disaster+" Location: "+location;

window.location.href="sms:"+phone+"?body="+encodeURIComponent(message);

}

function clearForm(){

document.getElementById("name").value="";
document.getElementById("phone").value="";
document.getElementById("disaster").value="";
document.getElementById("location").value="";
document.getElementById("smsOutput").innerText="";

}

function getLocation(){

navigator.geolocation.getCurrentPosition(function(position){

let lat=position.coords.latitude;
let long=position.coords.longitude;

document.getElementById("location").value="Lat:"+lat+" , Long:"+long;

});

}