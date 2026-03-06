function showSection(id){

document.querySelectorAll(".section")

.forEach(sec=>sec.classList.remove("active"))

document.getElementById(id).classList.add("active")

}



function calculateFare(){

let pickup=document.getElementById("pickup").value

let drop=document.getElementById("drop").value

let rate=document.getElementById("cartype").value



let distance=200



let fare=distance*rate



document.getElementById("fare").innerHTML=

"Estimated Fare ₹ "+fare

}



function sendWhatsApp(){

let name=document.getElementById("name").value

let phone=document.getElementById("phone").value

let pickup=document.getElementById("pickup").value

let drop=document.getElementById("drop").value

let date=document.getElementById("date").value



let msg=`Taxi Booking

Name:${name}

Phone:${phone}

Pickup:${pickup}

Drop:${drop}

Date:${date}`



window.open(

"https://wa.me/919785125935?text="+

encodeURIComponent(msg)

)

}
