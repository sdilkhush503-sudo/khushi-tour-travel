function scrollBooking(){
    document.getElementById("booking").scrollIntoView({
        behavior:"smooth"
    });
}

let pricePerKm = 12;

function calculateFare() {
    let car = document.getElementById("cartype").value;
    let distance = prompt("Enter distance in km:");
    let rate = 0;
    
    if (car === "sedan") {
        rate = 12;
    } else if (car === "ertiga") {
        rate = 15;
    } else if (car === "crysta") {
        rate = 18;
    }
    
    if (distance && !isNaN(distance)) {
        let fare = distance * rate;
        document.getElementById("fare").innerText = "Estimated Fare ₹ " + fare;
    } else {
        alert("Please enter valid distance");
    }
}

function sendWhatsApp(){
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let pickup = document.getElementById("pickup").value;
    let drop = document.getElementById("drop").value;
    let date = document.getElementById("date").value;
    let car = document.getElementById("cartype").value;

    if (!name || !phone || !pickup || !drop || !date) {
        alert("Please fill all details");
        return;
    }

    let msg = `नमस्ते खुशी टूर एंड ट्रैवल! 👋\n\n📋 *बुकिंग विवरण:*\n👤 नाम: ${name}\n📱 फोन: ${phone}\n🚩 पिकअप: ${pickup}\n🎯 ड्रॉप: ${drop}\n📅 तारीख: ${date}\n🚕 कार: ${cartype}\n\nकृपया मेरी बुकिंग की पुष्टि करें। धन्यवाद!`;
    let url = `https://wa.me/919785125935?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank");
}
