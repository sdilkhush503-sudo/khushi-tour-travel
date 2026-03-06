
function scrollBooking(){

document.getElementById("booking").scrollIntoView({
behavior:"smooth"
});

}

let pricePerKm = 12;

function calculateFare(){

let pickup = document.getElementById("pickup").value;
let drop = document.getElementById("drop").value;

if(pickup=="" || drop==""){

alert("Enter pickup and drop");

return;

}

let distance = 200;

let fare = distance * pricePerKm;

document.getElementById("fare").innerText="Estimated Fare ₹"+fare;

}

function sendWhatsApp(){

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let pickup=document.getElementById("pickup").value;
let drop=document.getElementById("drop").value;
let date=document.getElementById("date").value;
let car=document.getElementById("cartype").value;

let msg=`Taxi Booking

Name: ${name}
Phone: ${phone}
Pickup: ${pickup}
Drop: ${drop}
Date: ${date}
Car: ${car}`;

let url=`https://wa.me/919772740065?text=${encodeURIComponent(msg)}`;

window.open(url,"_blank");

}
