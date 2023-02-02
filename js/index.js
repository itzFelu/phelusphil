console.log("hello world");


function check(){
    let uid=document.getElementById("uid-el");
    let pass=document.getElementById("pass-el");
    let login=document.getElementById("login-el");
    let alrt=document.getElementById("alert-el");
    
    if(uid.value=="felu" && pass.value=="123"){
        window.location.href="./html/blog.html";
    }
    else if(uid.value=="" || pass.value==""){
        alrt.style.display="none";
        alrt.innerHTML="*empty fields";
        alrt.style.display="block";
    }
    else{
        alrt.innerHTML="*invalid user name or password !";
        alrt.style.display="block";
        console.log("bhakk madar");
    }
    
}
