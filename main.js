function data(){

var a=document.getElementById("name").value;
var b=document.getElementById("contact").value;
var c=document.getElementById("password").value;
var d=document.getElementById("password2").value;

if(a=="" || b=="" || c=="" || d==""){
    alert('No Input');
    return false;
}
else if(b.length>10 || b.length<10){
    alert("Number should be of 10 Digits");
    return false;
}
else if(isNaN(b)){
    alert("Only Numbers are Allowed");
    return false;
}
else if(c!=d){
    alert("Please Enter Same Password");
    return false;
}
else{
    true;
}

}
