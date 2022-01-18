document.addEventListener("DOMContentLoaded", inicio)
let contador = 0

function inicio(){
  let btn = document.querySelector("button")
  btn.addEventListener("click", sendButton)
}

function sendButton(){
  let nom = document.getElementById("nam2").value
  if (nom == ""){
    document.querySelector("span").textContent = "*"
    document.getElementById("spanX").textContent = "Please enter Your Name!"
    document.getElementById("spanX").style.padding = "10px"
    document.getElementById("nam2").style.border = "2px solid red"
    document.getElementById("nam2").style.borderRadius = "5px"    
  }else{
    document.querySelector("span").remove(document.querySelector("span"))
    document.querySelector("#spanX").textContent = ""
    document.getElementById("spanX").style.padding = "0px"
    document.getElementById("nam2").style.border = "2px solid black"
    document.getElementById("nam2").style.borderRadius = "5px"
  }

  let addr = document.getElementById("add2").value
  if (addr == ""){
    document.getElementById("spanAdd").textContent = "*"
    document.getElementById("spanAddres").textContent = "Please enter a Addres!"
    document.getElementById("spanAddres").style.padding = "10px"
    document.getElementById("add2").style.border = "2px solid red"
    document.getElementById("add2").style.borderRadius = "5px" 
  }else{
    let listaSpan = document.querySelectorAll("span")
    for (i=0;i < listaSpan.length;i++){
      document.getElementById("spanAdd").textContent = ""
      document.querySelector("#spanAddres").textContent = ""
    }
    console.log("Ola")
    document.getElementById("spanAddres").style.padding = "0px"
    document.getElementById("add2").style.border = "2px solid black"
    document.getElementById("add2").style.borderRadius = "5px"
  }

  let zip = document.getElementById("zipC2").value
  if (zip.length > 5){
    document.getElementById("spanZip").textContent = "*"
    document.getElementById("spanZipCode").textContent = "Please enter a valid ZipCode"
    document.getElementById("spanZipCode").style.padding = "10px"
    document.getElementById("zipC2").style.border = "2px solid red"
    document.getElementById("zipC2").style.borderRadius = "5px"
    console.log("ola")
  }else{
    document.querySelector("#spanZip").textContent = ""
    let listazip = document.querySelectorAll("span")
    for (i=0;i<listazip.length;i++){
      document.querySelector("#spanZipCode").textContent = ""
    }
    document.getElementById("spanZipCode").style.padding = "0px"
    document.getElementById("zipC2").style.border = "2px solid black"
    document.getElementById("zipC2").style.borderRadius = "5px"
  }

  let country = document.getElementsByName("country")[0] 
  if (country.selectedIndex == [0]){
    alert("Selecciona un país")
  }

  let pref = document.querySelectorAll("#pref input")
  for (i=0;i < pref.length;i++){
    if(pref[i].checked){
      contador++

    }
  }
  if (contador < 2){
    alert("Introduce mínimo 2")
  }

  let phone = document.getElementById("tel2").value
  if(phone > 9){
    document.getElementById("spanPho").textContent = "*"
    document.getElementById("spanPhone").textContent = "Please enter a valid Number"
    document.getElementById("spanPhone").style.padding = "10px"
    document.getElementById("tel2").style.border = "2px solid red"
    document.getElementById("tel2").style.borderRadius = "5px"
  }else{
    document.querySelector("#spanPho").textContent = ""
    let listaphone = document.querySelectorAll("span")
    for (i=0;i<listaphone.length;i++){
      document.querySelector("#spanPhone").textContent = ""
    }
    document.getElementById("spanPhone").style.padding = "0px"
    document.getElementById("tel2").style.border = "2px solid black"
    document.getElementById("tel2").style.borderRadius = "5px"
  }

  let emal = document.getElementsByName("em")[0].value
  if (emal.includes("@gmail.com")){

  }else{
    alert("no tiene gmail")
  }

  let pass = document.getElementById("pass2").value
  if(pass = ""){
    document.getElementById("SpanPass").textContent = "*"
    document.getElementById("SpanPassword").textContent = "Please enter a valid Password"
    document.getElementById("SpanPassword").style.padding = "10px"
    document.getElementById("pass2").style.border = "2px solid red"
    document.getElementById("pass2").style.borderRadius = "5px"
  }else{
    document.querySelector("#SpanPass").textContent = ""
    let listapass = document.querySelectorAll("span")
    for (i=0;i<listapass.length;i++){
      document.querySelector("#SpanPassword").textContent = ""
    }
    document.getElementById("SpanPassword").style.padding = "0px"
    document.getElementById("pass2").style.border = "2px solid black"
    document.getElementById("pass2").style.borderRadius = "5px"
  }

  let passv = document.getElementById("passv2").value
  if(passv = pass.value){
    alert("Las contraseñas no son iguales")
  }
}
